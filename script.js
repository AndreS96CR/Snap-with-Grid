const hamburguerIcon = document.querySelector('.hamburguer-icon');
const mobileMenu = document.querySelector('.aside-container');
const closeButton = document.querySelector('.aside__close-button');
const featuresDropdown = document.querySelector('.aside__dropdown-container--1');
const featuresItems = document.querySelector('.dropdown--3');
const companyDropdown = document.querySelector('.aside__dropdown-container--2');
const companyItems = document.querySelector('.dropdown--4');
const mainContainer = document.querySelector('.main');
const desktopFeaturesButton = document.querySelector('.dropdown--features');
const desktopFeaturesDropdown = document.querySelector('.desktopFeaturesDropdown');
const desktopCompanyButton = document.querySelector('.dropdown--company');
const desktopCompanyDropdown = document.querySelector('.dropdown-4');

/*Hamburguer Menu in Mobile*/

hamburguerIcon.addEventListener('click', toggleHamburguerIcon);
closeButton.addEventListener('click', closeMobileMenu)

function toggleHamburguerIcon() {
  mobileMenu.classList.remove('inactive');
}

function closeMobileMenu(){
    mobileMenu.classList.add('inactive');
}


/* Features and company dropdowns in Mobile*/

featuresDropdown.addEventListener('click', openFeatures);

function openFeatures(){
  featuresItems.classList.toggle('inactive');
}
companyDropdown.addEventListener('click', openCompany);

function openCompany(){
  companyItems.classList.toggle('inactive');
}


// Features and company dropdowns in Desktop

desktopFeaturesButton.addEventListener('click', toggleDeskTopFeatures);

function toggleDeskTopFeatures(){
  desktopFeaturesDropdown.classList.toggle('inactive');
}

desktopCompanyButton.addEventListener('click', toggleDeskTopCompany);

function toggleDeskTopCompany(){
  desktopCompanyDropdown.classList.toggle('inactive');
}
