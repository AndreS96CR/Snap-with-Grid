const hamburguerIcon = document.querySelector('.hamburguer-icon');
const mobileMenu = document.querySelector('.aside-container');
const closeButton = document.querySelector('.aside__close-button');

hamburguerIcon.addEventListener('click', toggleHamburguerIcon);
closeButton.addEventListener('click', closeMobileMenu)

function toggleHamburguerIcon() {
  mobileMenu.classList.remove('inactive');
}

function closeMobileMenu(){
    mobileMenu.classList.add('inactive');
}

