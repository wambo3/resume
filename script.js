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
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Function to set dark mode
const setDarkMode = (isDark) => {
    body.classList.toggle('dark-mode', isDark);
    localStorage.setItem('darkMode', isDark);
}

// Initialize dark mode based on saved preference
setDarkMode(isDarkMode);

themeToggle.addEventListener('change', () => {
    const darkModeEnabled = themeToggle.checked;
    setDarkMode(darkModeEnabled);
});
