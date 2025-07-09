(function () {
  function getQuestion() {
    const params   = new URLSearchParams(location.search);
    const raw      = params.get('ask') || params.get('question') || params.get('q');
    return raw ? decodeURIComponent(raw.replace(/\+/g, ' ')) : null;
  }

  function fireQuestion(q) {
    const section = document.getElementById('discoverySection');
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'center' });

    const input = document.querySelector('#ai-search-client input');
    const btn   = document.querySelector('#ai-search-client button');
    if (!input || !btn) return;

    input.value = q;
    input.dispatchEvent(new Event('input',  { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));

    setTimeout(() => {
      ['pointerdown','mousedown','pointerup','mouseup','click'].forEach(type =>
        btn.dispatchEvent(new MouseEvent(type, { bubbles: true }))
      );
    }, 50);
  }

  document.addEventListener('DOMContentLoaded', () => {
    const q = getQuestion();
    if (!q) return;

    let tries = 0;
    const maxTries = 40;
    const poll = setInterval(() => {
      const ready = document.querySelector('#ai-search-client input')
                 && document.querySelector('#ai-search-client button');
      if (ready || ++tries >= maxTries) {
        clearInterval(poll);
        if (ready) fireQuestion(q);
      }
    }, 100);
  });
})();

