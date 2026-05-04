/* nav.js — mobile sidebar toggle + active link highlight */
(function () {
  /* Mobile toggle */
  var ham = document.getElementById('ham');
  var sb  = document.getElementById('sidebar');
  var ov  = document.getElementById('ov');
  if (ham && sb) {
    ham.addEventListener('click', function () {
      var o = sb.classList.toggle('open');
      ham.classList.toggle('open', o);
      if (ov) ov.classList.toggle('show', o);
    });
    if (ov) ov.addEventListener('click', function () {
      sb.classList.remove('open');
      ham.classList.remove('open');
      ov.classList.remove('show');
    });
  }

  /* Mark active link */
  var pg = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(function (a) {
    if (a.getAttribute('href') === pg) a.classList.add('active');
  });
}());
