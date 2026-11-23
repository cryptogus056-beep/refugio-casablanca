const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
export const prefersStillCamera = () => reducedMotion.matches;

const angleBetween = (from, to) => Math.atan2(Math.sin(to - from), Math.cos(to - from));
const smooth = (rate, dt) => 1 - Math.exp(-rate * dt);
export function stopWalking(nav) {
  nav.forwardSpeed = 0;
  nav.sideSpeed = 0;
  nav.turnSpeed = 0;
}

export function updateCamera(nav, elapsed) {
  const dt = Math.min(elapsed, 0.08);
  const keys = nav.keys;
  const held = (...choices) => Number(choices.some(key => keys.has(key)));
  const forward = held('w', 'arrowup') - held('s', 'arrowdown') - nav.stick.y;
  const side = held('d') - held('a') + nav.stick.x;
  const turn = held('arrowright', 'e') - held('arrowleft', 'q');
  const magnitude = Math.hypot(forward, side);
  const input = magnitude > 0.08;
  if (input || turn) {
    if (nav.path) nav.cancelPath();
    nav.finalYaw = null;
    if (!nav.manualInput) nav.onUserMove?.();
  }
  nav.manualInput = Boolean(input || turn);
  nav.turnSpeed += (turn * 1.45 - nav.turnSpeed) * smooth(14, dt);
  nav.yaw += nav.turnSpeed * dt;

  const previousX = nav.x;
  const previousZ = nav.z;
  if (nav.path) {
    const point = nav.path[nav.pathI];
    const dx = point.x - nav.x;
    const dz = point.z - nav.z;
    const distance = Math.hypot(dx, dz);
    const last = nav.pathI === nav.path.length - 1;
    const speed = last ? Math.min(nav.speed, 0.6 + distance * 2) : nav.speed;
    const stride = Math.min(distance, speed * dt);
    if (distance > 0) {
      nav.x += dx / distance * stride;
      nav.z += dz / distance * stride;
      if (nav.finalYaw !== null) {
        const heading = Math.atan2(dx, -dz);
        const blend = last ? Math.max(0, 1 - distance / 1.25) : 0;
        const target = heading + angleBetween(heading, nav.finalYaw) * blend;
        nav.yaw += angleBetween(nav.yaw, target) * smooth(3, dt);
      }
    }
    if (stride >= distance && ++nav.pathI >= nav.path.length) {
      nav.path = null;
      nav.onArrive?.(nav.pendingArrive);
    }
  } else {
    // Normalize diagonals but retain the full analog range of the touch stick.
    const speed = keys.has('shift') ? 2.65 : 1.55;
    const scale = input ? speed / Math.max(1, magnitude) : 0;
    const response = smooth(input ? 8 : 19, dt);
    nav.forwardSpeed += (forward * scale - nav.forwardSpeed) * response;
    nav.sideSpeed += (side * scale - nav.sideSpeed) * response;
    if (Math.hypot(nav.forwardSpeed, nav.sideSpeed) > 0.015) {
      const sin = Math.sin(nav.yaw);
      const cos = Math.cos(nav.yaw);
      nav.tryMove((sin * nav.forwardSpeed + cos * nav.sideSpeed) * dt,
        (-cos * nav.forwardSpeed + sin * nav.sideSpeed) * dt);
    }
    if (nav.finalYaw !== null) {
      nav.yaw += angleBetween(nav.yaw, nav.finalYaw) * smooth(4, dt);
      nav.pitch += (nav.stopPitch - nav.pitch) * smooth(4, dt);
      if (Math.abs(angleBetween(nav.yaw, nav.finalYaw)) + Math.abs(nav.pitch - nav.stopPitch) < 0.005) {
        nav.finalYaw = null;
      }
    }
  }
  const travelled = Math.hypot(nav.x - previousX, nav.z - previousZ);
  nav.walking = travelled > 0.0001;
  nav.bob += travelled * 7;
  const sway = nav.walking && !prefersStillCamera() ? Math.sin(nav.bob) * 0.008 : 0;
  nav.eyeOffset += (sway - nav.eyeOffset) * smooth(12, dt);
  nav._apply(nav.eyeOffset);
}
