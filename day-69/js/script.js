const shareBtn = document.querySelector('#share-btn');
const modal = document.querySelector('#modal');

shareBtn.addEventListener('click', () => {
    modal.classList.toggle('hidden-modal');
    modal.classList.toggle('visible-modal');
});
