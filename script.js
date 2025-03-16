// Burger-Menü für Mobilgeräte
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  // Burger-Menü Animation
  burger.classList.toggle('active');
  // Navigationslinks ein-/ausblenden
  navLinks.classList.toggle('active');
});

// Schließen des Menüs, wenn ein Link geklickt wird
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});