const solutionsTab = document.getElementById('solutions');
const productsTab = document.getElementById('products');
const automationTab = document.getElementById('automation');
const educationTab = document.getElementById('education');
const resourcesTab = document.getElementById('resources');
const dropdownDesktopSolutions = document.getElementById('desktop-solutions');
const dropdownDesktopProducts = document.getElementById('desktop-products');
const solutionsList = document.querySelector('.solutions-list');
const productsList = document.querySelector('.products-list');
const dropdownDesktopAutomation = document.getElementById('desktop-automation');
const dropdownDesktopEducation = document.getElementById('desktop-education');
const dropdownDesktopResources = document.getElementById('desktop-resources');
const navBorderSolutions = document.getElementById('nav-border-solutions');
const navTextSolutions = document.getElementById('nav-text-solutions');
const navBorderProducts = document.getElementById('nav-border-products');
const navTextProducts = document.getElementById('nav-text-products');
const navBorderAutomation = document.getElementById('nav-border-automation');
const navTextAutomation = document.getElementById('nav-text-automation');
const navBorderEducation = document.getElementById('nav-border-education');
const navTextEducation = document.getElementById('nav-text-education');
const navBorderResources = document.getElementById('nav-border-resources');
const navTextResources = document.getElementById('nav-text-resources');

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

