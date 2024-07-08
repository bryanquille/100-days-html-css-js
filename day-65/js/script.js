const contactForm = document.querySelector('#contact-form');
const modalBg = document.querySelector('#modal-bg');
const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('#close-btn');

const showModalBox = () => {
    modal.classList.remove('hidden-modal');
    modal.classList.add('show-modal');
    modalBg.classList.remove('hidden.modal');
    modalBg.classList.add('show-modal');
}

const hiddenModalBox = () => {
    modal.classList.add('hidden-modal');
    modal.classList.remove('show-modal');
    modalBg.classList.add('hidden.modal');
    modalBg.classList.remove('show-modal');
}

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showModalBox();
});

closeBtn.addEventListener('click', () => {
    hiddenModalBox();
});