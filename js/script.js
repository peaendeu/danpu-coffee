// Toggle class active
const navbarNav = document.querySelector('.navbar-nav')
// Click hamburger menu
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active')
}
// Click outside sidebar to hide nav
const hamburger = document.querySelector('#hamburger-menu')
document.addEventListener('click', (e) => {
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active')
  }
})