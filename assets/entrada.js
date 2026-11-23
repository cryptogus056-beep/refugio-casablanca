const translations = {
  es: {
    language: 'Español', start: 'Comenzar recorrido', gallery: 'Ver fotos reales',
    help: '¿Cómo se usa?', sub: 'Cabaña con tinaja y piscina en el valle de Casablanca, Chile',
    approx: 'Recorrido 3D aproximado, hecho con las fotos reales del alojamiento.',
    loading: 'Preparando la cabaña…', failed: 'El recorrido 3D no pudo iniciarse. Puedes visitar la cabaña en fotos.',
  },
  en: {
    language: 'English', start: 'Start the tour', gallery: 'View real photos',
    help: 'How does it work?', sub: 'Cabin with hot tub and pool in the Casablanca Valley, Chile',
    approx: 'Approximate 3D tour, built from the real photos of the property.',
    loading: 'Getting the cabin ready…', failed: 'The 3D tour could not start. You can explore the cabin in photos.',
  },
  pt: {
    language: 'Português', start: 'Começar o passeio', gallery: 'Ver fotos reais',
    help: 'Como usar?', sub: 'Cabana com hidromassagem e piscina no Vale de Casablanca, Chile',
    approx: 'Passeio 3D aproximado, feito com as fotos reais da acomodação.',
    loading: 'Preparando a cabana…', failed: 'O passeio 3D não pôde começar. Você pode conhecer a cabana pelas fotos.',
  },
};

const params = new URLSearchParams(location.search);
const el = id => document.getElementById(id);
let saved;
try { saved = localStorage.getItem('rc-lang'); } catch {}
let language = [params.get('lang'), saved, navigator.language.slice(0, 2)]
  .find(code => Object.hasOwn(translations, code)) || 'es';
let state = 'idle';

function updateLanding() {
  const t = translations[language];
  document.documentElement.lang = language;
  document.querySelector('.sub').textContent = t.sub;
  document.querySelector('[data-i18n="approx"]').textContent = t.approx;
  el('start').querySelector('span').textContent = t.start;
  el('howto').textContent = t.help;
  el('galleryLink').textContent = t.gallery;
  el('galleryLink').href = './galeria.html?lang=' + language;
  el('loadingTxt').hidden = state === 'idle';
  el('loadingTxt').textContent = state === 'failed' ? t.failed : t.loading;
  for (const button of el('langPills').children) {
    button.classList.toggle('on', button.lang === language);
    button.setAttribute('aria-pressed', String(button.lang === language));
  }
}

for (const [code, t] of Object.entries(translations)) {
  const button = document.createElement('button');
  button.textContent = t.language;
  button.lang = code;
  button.onclick = () => {
    language = code;
    try { localStorage.setItem('rc-lang', code); } catch {}
    updateLanding();
  };
  el('langPills').append(button);
}
updateLanding();

async function openTour(action) {
  if (state !== 'idle') return;
  state = 'loading';
  el('start').disabled = el('howto').disabled = true;
  updateLanding();
  try {
    await import('./index-CpNIwfbs.js');
    // The renderer owns the controls once initialization finishes.
    el('lang').value = language;
    el('lang').dispatchEvent(new Event('change'));
    el('howto').disabled = false;
    if (action) {
      el(action).focus();
      el(action).click();
    }
  } catch (error) {
    console.error(error);
    state = 'failed';
    el('welcome').hidden = false;
    el('welcome').classList.remove('out');
    el('start').disabled = el('howto').disabled = true;
    updateLanding();
  }
}

el('start').disabled = el('howto').disabled = false;
el('start').onclick = () => openTour('start');
el('howto').onclick = () => openTour('howto');
if (params.has('spot') || params.get('skipwelcome') === '1') openTour();

// The tour can also change the language from its own welcome and toolbar.
new MutationObserver(() => {
  const code = document.documentElement.lang;
  el('galleryLink').textContent = translations[code].gallery;
  el('galleryLink').href = './galeria.html?lang=' + code;
}).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
