const joinBtn = document.querySelector('#join-btn');
const modal = document.querySelector('#modal');
const blurContainer = document.querySelector('.blur-container');
const closeBtn = document.querySelector('#close-btn');

joinBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
    blurContainer.classList.add('blur-effect');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('visible');
    modal.classList.add('hidden');
    blurContainer.classList.remove('blur-effect');
});