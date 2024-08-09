const mainImg = document.querySelector('#main-img');
const thumb1 = document.querySelector('#thumb-1');
const thumb2 = document.querySelector('#thumb-2');
const thumb3 = document.querySelector('#thumb-3');
const thumb4 = document.querySelector('#thumb-4');

const grayBg = () => {
    thumb1.firstElementChild.classList.remove('selected-item');
    thumb2.firstElementChild.classList.remove('selected-item');
    thumb3.firstElementChild.classList.remove('selected-item');
    thumb4.firstElementChild.classList.remove('selected-item');
}

thumb1.addEventListener('click', (e) => {
    mainImg.src = 'assets/images/dog-1.jpg';
    grayBg();
    thumb1.firstElementChild.classList.add('selected-item');
});

thumb2.addEventListener('click', (e) => {
    mainImg.src = 'assets/images/dog-2.jpg';
    grayBg();
    thumb2.firstElementChild.classList.add('selected-item');
});

thumb3.addEventListener('click', (e) => {
    mainImg.src = 'assets/images/dog-3.jpg';
    grayBg();
    thumb3.firstElementChild.classList.add('selected-item');
});

thumb4.addEventListener('click', (e) => {
    mainImg.src = 'assets/images/dog-4.jpg';
    grayBg();
    thumb4.firstElementChild.classList.add('selected-item');
});