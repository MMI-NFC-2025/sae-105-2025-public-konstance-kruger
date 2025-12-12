// ============================
// MENU BURGER
// ============================

// Sélection des éléments
const menuToggle = document.querySelector('.menu-toggle');
const menuNav = document.querySelector('.menu-nav');
const body = document.body;

// Fonction pour ouvrir/fermer le menu
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  menuNav.classList.toggle('active');
  
  // Empêche le scroll quand le menu est ouvert
  if (menuNav.classList.contains('active')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
});

// Fermer le menu quand on clique sur un lien
const menuLinks = document.querySelectorAll('.menu-nav a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    menuNav.classList.remove('active');
    body.style.overflow = 'auto';
  });
});

// Fermer le menu avec la touche Échap
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menuNav.classList.contains('active')) {
    menuToggle.classList.remove('active');
    menuNav.classList.remove('active');
    body.style.overflow = 'auto';
  }
});

