const hamburguerIcon = document.querySelector('.hamburguer-icon');
const mobileMenu = document.querySelector('.aside-container');
const closeButton = document.querySelector('.aside__close-button');
const featuresDropdown = document.querySelector('.aside__dropdown-container--1');
const featuresItems = document.querySelector('.dropdown--3');
const companyDropdown = document.querySelector('.aside__dropdown-container--2');
const companyItems = document.querySelector('.dropdown--4');
const mainContainer = document.querySelector('.main');

/*Hamburguer Menu*/

hamburguerIcon.addEventListener('click', toggleHamburguerIcon);
closeButton.addEventListener('click', closeMobileMenu)

function toggleHamburguerIcon() {
  mobileMenu.classList.remove('inactive');
}

function closeMobileMenu(){
    mobileMenu.classList.add('inactive');
}


/* Features and company menus*/

featuresDropdown.addEventListener('click', openFeatures);

function openFeatures(){
  featuresItems.classList.toggle('inactive');
}
companyDropdown.addEventListener('click', openCompany);

function openCompany(){
  companyItems.classList.toggle('inactive');
}


// Toggle to close the dropdown menus

function closeDropDownMenus(){
  const isHambuerguerClosed = hamburguerIcon.classList.includes('inactive');
  const isfeaturesDropdownClosed = featuresDropdown.classList.includes('inactive');
  const iscompanyDropDownClosed = companyDropdown.classList.includes('inactive');
  
  if(!isHambuerguerClosed || !isfeaturesDropdownClosed || !iscompanyDropDownClosed){
    hamburguerIcon.classList.add('inactive');
    featuresDropdown.classList.add('inactive');
    companyDropdown.classList.add('inactive');
  }
}
