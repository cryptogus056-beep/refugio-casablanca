// Rectified samples from comedor-2, hab1-2 and hab2-2 in the site's photo album.
export function applyTextiles(materials) {
  const samples = [
    [materials.rug, 'alfombra'],
    [materials.grayDuvet, 'colcha-gris'],
    [materials.redDuvet, 'colcha-roja'],
  ];
  for (const [material, file] of samples) {
    const image = new Image();
    image.onload = () => {
      const previous = material.map;
      const texture = new previous.constructor(image);
      texture.colorSpace = previous.colorSpace;
      texture.anisotropy = previous.anisotropy;
      texture.needsUpdate = true;
      material.map = texture;
      material.needsUpdate = true;
      if (previous !== material.bumpMap) previous.dispose();
    };
    image.src = new URL('./texturas/' + file + '.webp', import.meta.url);
  }
}

// Fold a subdivided sheet over the mattress. The original UV grid follows the
// fabric around the sides so the print continues across each hanging edge.
export function addDuvet(builder, PlaneGeometry, material, width, length) {
  const half = width / 2;
  const foot = length / 2;
  const drop = 0.31;
  const head = -foot + 0.025;
  const depth = foot - head + drop;
  const cloth = new PlaneGeometry(width + drop * 2, depth, 44, 38);
  cloth.rotateX(-Math.PI / 2);
  const positions = cloth.attributes.position;
  for (let i = 0; i < positions.count; i++) {
    const u = positions.getX(i);
    const v = positions.getZ(i) + head + depth / 2;
    const sideFold = Math.max(0, Math.abs(u) - half);
    const footFold = Math.max(0, v - foot);
    const fold = Math.hypot(sideFold, footFold);
    const roll = distance => 0.075 * (1 - Math.exp(-distance / 0.075));
    const ripple = Math.sin(19 * u + 4 * v) * Math.cos(8 * v - u);
    const x = Math.sign(u) * (Math.min(Math.abs(u), half) + roll(sideFold));
    const z = Math.min(v, foot) + roll(footFold);
    // In both bedroom photos the pillows sit under the cover at the head.
    const pillowX = (Math.abs(u) - width / 4) / (width * 0.22);
    const pillowZ = (v - head - 0.18) / 0.16;
    const pillow = 0.105 * Math.exp(-(pillowX ** 4 + pillowZ ** 2));
    const y = 0.59 + pillow - fold + roll(fold) + ripple * (0.009 + 0.035 * fold);
    positions.setXYZ(i, x, y, z);
  }
  cloth.computeVertexNormals();
  material.userData.keepUV = true;
  material.bumpScale = 0.003;
  builder.geo(cloth, material);
}
