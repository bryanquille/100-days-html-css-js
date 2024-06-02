const xPosition = document.querySelector('#x-position');
const yPosition = document.querySelector('#y-position');

document.addEventListener('mousemove', (e) => {
    xPosition.innerText = e.clientX;
    yPosition.innerText = e.clientY;
});
