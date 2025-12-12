// ============================
// CARROUSEL D'IMAGES
// ============================

let currentSlide = 0;
let slides = [];
let indicators = [];

// Initialisation du carousel
function initCarousel() {
  // Sélection des éléments
  slides = document.querySelectorAll('.carousel-slide');
  indicators = document.querySelectorAll('.carousel-indicator');

  if (slides.length === 0) {
    console.log('Aucun slide trouvé - carousel non initialisé');
    return;
  }

  // Ajouter les event listeners
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => changeSlide(-1));
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => changeSlide(1));
  }

  // Event listeners pour les indicateurs
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => goToSlide(index));
  });

  // Navigation au clavier
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
      changeSlide(1);
    }
  });

  // Démarrer le carousel
  showSlide(currentSlide);
  console.log('Carousel initialisé avec', slides.length, 'slides');
}

// Fonction pour changer de slide
function changeSlide(direction) {
  hideSlide(currentSlide);
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Fonction pour aller directement à un slide
function goToSlide(index) {
  if (index >= 0 && index < slides.length) {
    hideSlide(currentSlide);
    currentSlide = index;
    showSlide(currentSlide);
  }
}

// Fonction pour afficher un slide
function showSlide(index) {
  slides[index].classList.add('active');

  // Mettre à jour les indicateurs
  indicators.forEach((indicator, i) => {
    if (i === index) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

// Fonction pour masquer un slide
function hideSlide(index) {
  slides[index].classList.remove('active');
}

// Auto-play optionnel (désactivé par défaut)
// function startAutoPlay() {
//   setInterval(() => {
//     changeSlide(1);
//   }, 5000); // Change toutes les 5 secondes
// }

// Initialiser quand le DOM est chargé
document.addEventListener('DOMContentLoaded', initCarousel);
