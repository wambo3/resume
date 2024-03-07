// Burger menu toggle
const navLinks = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const navLinksArray = Array.from(document.querySelectorAll('.nav-links a'));

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
});

navLinksArray.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('nav-active');
    burger.classList.remove('toggle');
  });
});

// Dark mode toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});