// popup.js

function openPopup(imageUrl) {
    var popup = document.querySelector('.popup');
    var popupContent = document.querySelector('.popup-content');

    // Set the HTML content of the pop-up, including the image
    popupContent.innerHTML = `
        <img src="${imageUrl}" alt="Project Image">
    `;

    popup.style.display = 'flex';
}

function closePopup() {
    var popup = document.querySelector('.popup');
    popup.style.display = 'none';
}