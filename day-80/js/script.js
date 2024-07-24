const width = document.querySelector('#width');
const height = document.querySelector('#height');
const dpr = document.querySelector('#dpr');

window.addEventListener('load', () => {
    const widthValue = window.innerWidth;
    const heightValue = window.innerHeight;
    const dprValue = window.devicePixelRatio;
    width.textContent = widthValue;
    height.textContent = heightValue;
    dpr.textContent = dprValue.toFixed(2);
});

window.addEventListener('resize', () => {
    const widthValue = window.innerWidth;
    const heightValue = window.innerHeight;
    const dprValue = window.devicePixelRatio;
    width.textContent = widthValue;
    height.textContent = heightValue;
    dpr.textContent = dprValue.toFixed(2);
});