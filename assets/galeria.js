const language = new URLSearchParams(location.search).get('lang');
if (['en', 'pt', 'es'].includes(language)) {
  document.documentElement.lang = language;
  document.getElementById('back').href = './index.html?lang=' + language;
  if (language !== 'es') {
    for (const node of document.querySelectorAll('[data-en]')) {
      if (node instanceof HTMLImageElement) node.alt = node.dataset[language];
      else node.textContent = node.dataset[language];
    }
    document.title = document.querySelector('h1').textContent + ' · Refugio Casablanca';
  }
}
