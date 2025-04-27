const mobileMenu = document.querySelector('.mobile-menu');
const openMenuBtn = document.querySelector('.open-mob-menu-btn');
const closeMenuBtn = document.querySelector('.mob-menu-close-btn');
const menuLinks = document.querySelectorAll('.mob-menu-nav-list-link');
const body = document.body;
const themeSwitcher = document.querySelector('#theme-switcher');

openMenuBtn.addEventListener('click', openMobileMenu);
closeMenuBtn.addEventListener('click', closeMobileMenu);

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
  themeSwitcher.checked = true;
}

themeSwitcher.addEventListener('change', changeTheme);

menuLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

function openMobileMenu() {
  mobileMenu.classList.add('is-open');
}

function closeMobileMenu() {
  mobileMenu.classList.remove('is-open');
}

function changeTheme() {
  if (themeSwitcher.checked) {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
}