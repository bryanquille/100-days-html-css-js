const number = document.querySelector('#number');
const modalConfimation = document.querySelector('#modal-confirmation');
const declineBtns = document.querySelectorAll('.decline-btn');
const confirmBtns = document.querySelectorAll('.confirm-btn');
const requestsContainer = document.querySelector('.requests-container');
let friendRequestsNumber = 3;

const noRequests = () => {
    if (friendRequestsNumber === 0) {
        requestsContainer.innerHTML = '<p class="empty">No friend request</p>';
    }
}

declineBtns.forEach(dBtn => {
    dBtn.addEventListener('click', (e) => {
        const requestElement = e.currentTarget.parentElement.parentElement;
        requestElement.remove();
        friendRequestsNumber--;
        number.textContent = friendRequestsNumber;
        noRequests();
    });
});

confirmBtns.forEach(cBtn => {
    cBtn.addEventListener('click', (e) => {
        const requestElement = e.currentTarget.parentElement.parentElement;
        requestElement.remove();
        friendRequestsNumber--;
        number.textContent = friendRequestsNumber;
        noRequests();
        modalConfimation.classList.add('show-modal');
        setTimeout(() => {
            modalConfimation.classList.remove('show-modal');
        }, 1500);
    });
});