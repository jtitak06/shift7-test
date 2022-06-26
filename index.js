/* Solutions */
const solutionsTab = document.getElementById('solutions');
const solutionsList = document.querySelector('.solutions-list');
const dropdownDesktopSolutions = document.getElementById('desktop-solutions');
const navBorderSolutions = document.getElementById('nav-border-solutions');
const navTextSolutions = document.getElementById('nav-text-solutions');
/* Solutions - Mobile */
const mobileSolutionsTab = document.getElementById('mobile-tab-solutions');
const mobileSolutionsMenu = document.getElementById('mobile-solutions');
const backButtonSolutions = document.getElementById('go-back-solutions');
/* Products */
const productsTab = document.getElementById('products');
const productsList = document.querySelector('.products-list');
const dropdownDesktopProducts = document.getElementById('desktop-products');
const navBorderProducts = document.getElementById('nav-border-products');
const navTextProducts = document.getElementById('nav-text-products');
/* Products - Mobile */
const mobileProductsTab = document.getElementById('mobile-tab-products');
const mobileProductsMenu = document.getElementById('mobile-products');
const backButtonProducts = document.getElementById('go-back-products');
/* Automation */
const automationTab = document.getElementById('automation');
const dropdownDesktopAutomation = document.getElementById('desktop-automation');
const navBorderAutomation = document.getElementById('nav-border-automation');
const navTextAutomation = document.getElementById('nav-text-automation');
/* Education */
const educationTab = document.getElementById('education');
const dropdownDesktopEducation = document.getElementById('desktop-education');
const navBorderEducation = document.getElementById('nav-border-education');
const navTextEducation = document.getElementById('nav-text-education');
/* Resources */
const resourcesTab = document.getElementById('resources');
const dropdownDesktopResources = document.getElementById('desktop-resources');
const navBorderResources = document.getElementById('nav-border-resources');
const navTextResources = document.getElementById('nav-text-resources');
/* Hamburger Menu */
const hamburgerMenu = document.querySelector('.hamburger-menu');
/* Mobile Menu */
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMain = document.getElementById('mobile-main');
const menuBottom = document.querySelector('.menu-bottom');
/* Hero Section */
const heroSection = document.querySelector('.hero-section');
/* CLose Button */
const closeButton = document.querySelector('.close-button');


solutionsTab.addEventListener("click", () => {
    /*Activate Solutions Tab*/
    dropdownDesktopSolutions.classList.toggle('active');
    solutionsList.classList.toggle('active');
    navBorderSolutions.classList.toggle('active');
    navTextSolutions.classList.toggle('active');
    /*Remove Products Tab*/
    dropdownDesktopProducts.classList.remove('active');
    productsList.classList.remove('active');
    navBorderProducts.classList.remove('active');
    navTextProducts.classList.remove('active');
    /*Remove Automation Tab*/
    dropdownDesktopAutomation.classList.remove('active');
    navBorderAutomation.classList.remove('active');
    navTextAutomation.classList.remove('active');
    /*Remove Education Tab*/
    dropdownDesktopEducation.classList.remove('active');
    navBorderEducation.classList.remove('active');
    navTextEducation.classList.remove('active');
    /*Remove Resources Tab*/
    dropdownDesktopResources.classList.remove('active');
    navBorderResources.classList.remove('active');
    navTextResources.classList.remove('active');
});

productsTab.addEventListener("click", () => {
    /*Activate Products Tab*/
    dropdownDesktopProducts.classList.toggle('active');
    productsList.classList.toggle('active');
    navBorderProducts.classList.toggle('active');
    navTextProducts.classList.toggle('active');
    /*Remove Solutions Tab*/
    dropdownDesktopSolutions.classList.remove('active');
    solutionsList.classList.remove('active');
    navBorderSolutions.classList.remove('active');
    navTextSolutions.classList.remove('active');
    /*Remove Automation Tab*/
    dropdownDesktopAutomation.classList.remove('active');
    navBorderAutomation.classList.remove('active');
    navTextAutomation.classList.remove('active');
    /*Remove Education Tab*/
    dropdownDesktopEducation.classList.remove('active');
    navBorderEducation.classList.remove('active');
    navTextEducation.classList.remove('active');
    /*Remove Resources Tab*/
    dropdownDesktopResources.classList.remove('active');
    navBorderResources.classList.remove('active');
    navTextResources.classList.remove('active');
});

automationTab.addEventListener("click", () => {
    /*Activate Automations Tab*/
    dropdownDesktopAutomation.classList.toggle('active');
    navBorderAutomation.classList.toggle('active');
    navTextAutomation.classList.toggle('active');
    /*Remove Solutions Tab*/
    dropdownDesktopSolutions.classList.remove('active');
    solutionsList.classList.remove('active');
    navBorderSolutions.classList.remove('active');
    navTextSolutions.classList.remove('active');
    /*Remove Products Tab*/
    dropdownDesktopProducts.classList.remove('active');
    productsList.classList.remove('active');
    navBorderProducts.classList.remove('active');
    navTextProducts.classList.remove('active');
    /*Remove Education Tab*/
    dropdownDesktopEducation.classList.remove('active');
    navBorderEducation.classList.remove('active');
    navTextEducation.classList.remove('active');
    /*Remove Resources Tab*/
    dropdownDesktopResources.classList.remove('active');
    navBorderResources.classList.remove('active');
    navTextResources.classList.remove('active');
});

educationTab.addEventListener("click", () => {
    /*Activate Education Tab*/
    dropdownDesktopEducation.classList.toggle('active');
    navBorderEducation.classList.toggle('active');
    navTextEducation.classList.toggle('active');
    /*Remove Solutions Tab*/
    dropdownDesktopSolutions.classList.remove('active');
    solutionsList.classList.remove('active');
    navBorderSolutions.classList.remove('active');
    navTextSolutions.classList.remove('active');
    /*Remove Products Tab*/
    dropdownDesktopProducts.classList.remove('active');
    productsList.classList.remove('active');
    navBorderProducts.classList.remove('active');
    navTextProducts.classList.remove('active');
    /*Remove Automation Tab*/
    dropdownDesktopAutomation.classList.remove('active');
    navBorderAutomation.classList.remove('active');
    navTextAutomation.classList.remove('active');
    /*Remove Resources Tab*/
    dropdownDesktopResources.classList.remove('active');
    navBorderResources.classList.remove('active');
    navTextResources.classList.remove('active');
});

resourcesTab.addEventListener("click", () => {
    /*Activate Resources Tab*/
    dropdownDesktopResources.classList.toggle('active');
    navBorderResources.classList.toggle('active');
    navTextResources.classList.toggle('active');
    /*Remove Solutions Tab*/
    dropdownDesktopSolutions.classList.remove('active');
    solutionsList.classList.remove('active');
    navBorderSolutions.classList.remove('active');
    navTextSolutions.classList.remove('active');
    /*Remove Products Tab*/
    dropdownDesktopProducts.classList.remove('active');
    productsList.classList.remove('active');
    navBorderProducts.classList.remove('active');
    navTextProducts.classList.remove('active');
    /*Remove Automation Tab*/
    dropdownDesktopAutomation.classList.remove('active');
    navBorderAutomation.classList.remove('active');
    navTextAutomation.classList.remove('active');
    /*Remove Education Tab*/
    dropdownDesktopEducation.classList.remove('active');
    navBorderEducation.classList.remove('active');
    navTextEducation.classList.remove('active');
});

/*Display Menu on Mobile*/
hamburgerMenu.addEventListener("click", () => {
    mobileMenu.classList.add('active');
    heroSection.classList.add('hide');
    mobileMain.classList.remove('hide');
    menuBottom.classList.remove('hide');
})

/*Close Mobile Menu*/
closeButton.addEventListener("click", () => {
    mobileMenu.classList.remove('active');
    heroSection.classList.remove('hide');
    mobileSolutionsMenu.classList.remove('active');
    mobileProductsMenu.classList.remove('active');
})

/* Mobile Solutions Tab*/
mobileSolutionsTab.addEventListener("click", () => {
    mobileMain.classList.add('hide');
    menuBottom.classList.add('hide');
    mobileSolutionsMenu.classList.add('active');
})

/* Go Back Tab - Solutions */
backButtonSolutions.addEventListener("click", () => {
    mobileMenu.classList.add('active');
    mobileMain.classList.remove('hide');
    menuBottom.classList.remove('hide');
    mobileSolutionsMenu.classList.remove('active');
})

/* Mobile Products Tab */
mobileProductsTab.addEventListener("click", () => {
    mobileMain.classList.add('hide');
    menuBottom.classList.add('hide');
    mobileProductsMenu.classList.add('active');
})

/* Go Back Tab - Products */
backButtonProducts.addEventListener("click", () => {
    mobileMenu.classList.add('active');
    mobileMain.classList.remove('hide');
    menuBottom.classList.remove('hide');
    mobileProductsMenu.classList.remove('active');
})
