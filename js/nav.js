// nav.js

document.addEventListener('DOMContentLoaded', function () {
    // Select the project navigation menu item
    var projectNavItem = document.querySelector('.project-nav-item');

    // Select the target element (the container of the project cards)
    var projectCardsContainer = document.querySelector('.project-cards');

    // Add a click event listener to the project navigation menu item
    projectNavItem.addEventListener('click', function () {
        // Use scrollIntoView to scroll to the project cards container with smooth behavior
        projectCardsContainer.scrollIntoView({ behavior: 'smooth' });
    });
});
