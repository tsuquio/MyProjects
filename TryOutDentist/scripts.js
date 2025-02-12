
const openPopupBtn = document.getElementById('open-popup-btn');
const closePopupBtn = document.getElementById('close-popup-btn');
const popupContainer = document.getElementById('appointment-popup');


openPopupBtn.addEventListener('click', () => {
    popupContainer.style.display = 'flex'; 
});


closePopupBtn.addEventListener('click', () => {
    popupContainer.style.display = 'none'; 
});


window.addEventListener('click', (e) => {
    if (e.target === popupContainer) {
        popupContainer.style.display = 'none'; 
    }
});

openPopupBtn.addEventListener('click', () => {
    popupContainer.classList.add('show'); 
});


closePopupBtn.addEventListener('click', () => {
    popupContainer.classList.remove('show'); 
});