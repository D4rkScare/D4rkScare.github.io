// DEDSEC THEME — JS

// Clock
function tick() {
  const el = document.getElementById('clock');
  if (el) el.textContent = new Date().toTimeString().slice(0, 8);
}
setInterval(tick, 1000);
tick();

// Code block language label
document.querySelectorAll('pre code').forEach(block => {
  const cls = [...block.classList].find(c => c.startsWith('language-'));
  if (cls) block.parentElement.setAttribute('data-lang', cls.replace('language-', '').toUpperCase());
});

// Occasional body glitch flash
setInterval(() => {
  if (Math.random() > 0.88) {
    document.body.style.filter = 'brightness(1.06) hue-rotate(4deg)';
    setTimeout(() => document.body.style.filter = '', 70);
  }
}, 5000);

// Typing cursor on terminal-style elements (optional)
document.querySelectorAll('.type-effect').forEach(el => {
  const text = el.textContent;
  el.textContent = '';
  let i = 0;
  const t = setInterval(() => {
    el.textContent += text[i++];
    if (i >= text.length) clearInterval(t);
  }, 40);
});
