// The tour uses page-wide movement shortcuts. Keep them outside the dialog
// and let focused buttons and links retain their native keyboard behavior.
const byId = id => document.getElementById(id);
const layers = ['guide', 'photos', 'modal', 'welcome'].map(byId);
const regions = [...layers, ...['top', 'card', 'freeBar', 'c', 'stickWrap'].map(byId)];
const firstControl = { guide: 'gNext', photos: 'pClose', modal: 'mClose', welcome: 'start' };
const openers = new Map();
let current;

function syncFocus() {
  const active = layers.find(layer => !layer.hidden && !layer.classList.contains('out'));
  if (active === current) return;
  const previous = current;
  const opener = openers.get(previous);
  if (active && active.id !== 'welcome' && !active.contains(document.activeElement)) {
    openers.set(active, document.activeElement);
  }
  current = active;
  for (const region of regions) region.inert = Boolean(active && region !== active);
  if (opener && opener !== document.body && opener.isConnected && opener.getClientRects().length && !opener.closest('[inert]')) {
    opener.focus();
  } else if (previous || (active && active.id !== 'welcome')) {
    byId(active ? firstControl[active.id] : 'next').focus();
  }
}
const observer = new MutationObserver(syncFocus);
for (const layer of layers) observer.observe(layer, { attributes: true, attributeFilter: ['hidden', 'class'] });
syncFocus();

document.addEventListener('keydown', event => {
  if (current?.id === 'photos' && ['ArrowLeft', 'ArrowRight'].includes(event.key)) {
    event.preventDefault();
    byId(event.key === 'ArrowLeft' ? 'pPrev' : 'pNext').click();
  }
  const control = event.target.closest?.('button, a, select');
  const activating = ['Enter', ' ', 'Backspace'].includes(event.key);
  if (event.key !== 'Escape' && (current || control?.matches('select') || (control && activating))) {
    event.stopPropagation();
  }
});
