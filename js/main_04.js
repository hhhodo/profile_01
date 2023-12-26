const navToggle = document.querySelector('.hamburger');
const navMenu = document.querySelector('.header_menu')

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
})

navMenu.addEventListener('click', () => {
    navMenu.classList.remove('open')
})