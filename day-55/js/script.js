const slider = document.querySelector('.slider');
const beforeBtn = document.querySelector('#before-btn');
const nextBtn = document.querySelector('#next-btn');
const numberOfImages = 6;
const degreesToRotate = 360 / numberOfImages;
let counter = 0;

setInterval(() => {
    counter++;
    slider.style.transform = `perspective(var(--perspective)) rotateX(-5deg) rotateY(${-degreesToRotate * counter}deg)`;
}, 5000);

beforeBtn.addEventListener('click', () => {
    counter--;
    slider.style.transform = `perspective(var(--perspective)) rotateX(-5deg) rotateY(${-degreesToRotate * counter}deg)`;
});

nextBtn.addEventListener('click', () => {
    counter++;
    slider.style.transform = `perspective(var(--perspective)) rotateX(-5deg) rotateY(${-degreesToRotate * counter}deg)`;
});
