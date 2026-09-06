// Shared renderer: pick the post from ?post=N, fill slots, fit hero figures.
(function () {
  var params = new URLSearchParams(location.search);
  var i = parseInt(params.get('post') || '0', 10);
  var post = (window.POSTS || [])[i] || window.POSTS[0];

  var LOGO = '<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="300" cy="300" r="300" fill="#222"/><circle cx="326.5" cy="96.5" r="43" fill="#fff" stroke="#000"/><path d="M391.5,93.5c3,181-375,158-204,440C102.5,313.5,421.5,356.5,391.5,93.5Z" fill="#ff9a00"/><path d="M450.5,274.5c26,250-239,101-253,259C178.5,310.5,427.5,449.5,450.5,274.5Z" fill="#ff9a00"/></svg>';

  function fill() {
    document.querySelectorAll('[data-field]').forEach(function (el) {
      var key = el.getAttribute('data-field');
      if (key === 'logo') { el.innerHTML = LOGO; return; }
      if (key === 'hero') {
        el.innerHTML = '<span class="num">' + post.heroNumber + '</span><span class="unit">' + post.heroUnit + '</span>';
        return;
      }
      var suffix = el.getAttribute('data-suffix') || '';
      var strip = el.getAttribute('data-strip-prefix');
      var val = post[key] != null ? String(post[key]) : '';
      if (strip && val.indexOf(strip) === 0) val = val.slice(strip.length);
      el.textContent = val + suffix;
    });
    document.title = post.kicker + ' - ' + post.heroNumber + ' ' + post.heroUnit;
  }

  // data-fit="shrink": start at data-max, shrink until it fits the container width.
  // data-fit="fill":   grow/shrink so the element spans the container width (capped at data-max).
  function fit() {
    document.querySelectorAll('[data-fit]').forEach(function (el) {
      var mode = el.getAttribute('data-fit');
      var max = parseFloat(el.getAttribute('data-max') || '260');
      var min = parseFloat(el.getAttribute('data-min') || '96');
      var box = el.parentElement;
      var pad = parseFloat(el.getAttribute('data-fit-pad') || '0');
      var target = box.clientWidth - parseFloat(getComputedStyle(box).paddingLeft) - parseFloat(getComputedStyle(box).paddingRight) - pad;
      var size = max;
      el.style.fontSize = size + 'px';
      var w = el.getBoundingClientRect().width;
      if (mode === 'fill') size = Math.min(max, Math.floor(size * target / w));
      el.style.fontSize = size + 'px';
      while (el.getBoundingClientRect().width > target && size > min) {
        size -= 2; el.style.fontSize = size + 'px';
      }
    });
  }

  fill();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit); else fit();
  window.addEventListener('load', fit);
})();
