const hamburger: HTMLElement = document.querySelector(
  '.hamburger',
) as HTMLElement;
const navMenu: HTMLMenuElement = document.querySelector(
  '.nav-menu',
) as HTMLMenuElement;
const navLink: NodeListOf<HTMLAnchorElement> =
  document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', mobileMenu);
navLink.forEach((n) => n.addEventListener('click', closeMenu));

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}
