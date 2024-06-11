const feedbackContainer = document.querySelector('#feedback-container');
const statusBtns = document.querySelectorAll('.status');
const sendBtn = document.querySelector('#send-btn');
const modalBox = document.querySelector('#modal-box');
const statusSelection = document.querySelector('#status-selection');
let selected = false;

statusBtns.forEach(statusBtn => {
    statusBtn.addEventListener('click', (e) => {
        const currentBtn = e.currentTarget;
        const statusText = e.currentTarget.lastElementChild.textContent;
        statusSelection.textContent = '';
        statusSelection.textContent = statusText;
        statusBtns.forEach(status => status.classList.remove('selected'));
        currentBtn.classList.add('selected');
        selected = true;
    });
});

sendBtn.addEventListener('click', () => {
    if (selected) {
        feedbackContainer.classList.toggle('hidden');
        feedbackContainer.classList.toggle('visible');
        modalBox.classList.toggle('hidden');
        modalBox.classList.toggle('visible');
        return;
    }
    alert('Please choose a feedback to send it!');
});