// Mobile nav
const toggle = document.getElementById('navToggle');
const mobile = document.getElementById('navMobile');
if (toggle && mobile) {
  toggle.addEventListener('click', () => mobile.classList.toggle('open'));
}

// Copy link button
const copyBtn = document.getElementById('copyBtn');
if (copyBtn) {
  copyBtn.addEventListener('click', () => {
    copyBtn.textContent = 'Copied!';
    setTimeout(() => copyBtn.textContent = 'Copy Link', 2000);
  });
}

// Active TOC highlight on scroll
const tocLinks = document.querySelectorAll('.toc-widget a');
const headings = document.querySelectorAll('.post-content h2, .post-content h3');

if (tocLinks.length && headings.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tocLinks.forEach(l => l.style.color = '');
        const id = entry.target.id;
        const active = document.querySelector(`.toc-widget a[href="#${id}"]`);
        if (active) active.style.color = 'var(--blue)';
      }
    });
  }, { rootMargin: '-80px 0px -70% 0px' });
  headings.forEach(h => { if (h.id) observer.observe(h); });
}
