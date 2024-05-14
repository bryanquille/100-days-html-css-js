const popup = document.querySelector('#popup')
const openPopupBtn = document.querySelector('#open-popup-btn')
const closePopupBtn = document.querySelector('#close-popup')

openPopupBtn.addEventListener('click', () => {
    popup.classList.toggle('hidden');
    popup.classList.toggle('visible');
})

closePopupBtn.addEventListener('click', () => {
    popup.classList.toggle('hidden');
    popup.classList.toggle('visible');
})