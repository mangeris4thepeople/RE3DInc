/* Re3d Inc — re3dinc.com | main.js */

/* ── MOBILE NAV ── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open');
  });
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('nav-open');
    }
  });
}

/* ── COLOR SWATCHES (hero) ── */
document.querySelectorAll('.cdot').forEach(dot => {
  dot.addEventListener('click', function () {
    document.querySelectorAll('.cdot').forEach(d => d.classList.remove('active'));
    this.classList.add('active');
  });
});

/* ── CATEGORY STRIP TABS ── */
document.querySelectorAll('.cat-item').forEach(item => {
  item.addEventListener('click', function () {
    document.querySelectorAll('.cat-item').forEach(i => i.classList.remove('active'));
    this.classList.add('active');
  });
});

/* ── WISHLIST BUTTONS ── */
document.querySelectorAll('.product-wish').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    const active = this.textContent === '♥';
    this.textContent = active ? '♡' : '♥';
    this.style.color  = active ? '' : '#c8860a';
    this.style.background = active ? '' : '#faf0dd';
  });
});

/* ── CLOSE MODAL ON OVERLAY CLICK ── */
const modal = document.getElementById('register-modal');
if (modal) {
  modal.addEventListener('click', function (e) {
    if (e.target === modal) modal.classList.remove('open');
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modal.classList.remove('open');
  });
}

/* ── STICKY NAV SHADOW ── */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 10
      ? '0 2px 16px rgba(0,0,0,0.08)'
      : 'none';
  });
}
