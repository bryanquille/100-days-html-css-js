const header = document.querySelector('.header');
const main = document.querySelector('.main');

document.addEventListener('DOMContentLoaded', ()=>{
    console.log(header.clientHeight);
    main.style = `margin-top: ${header.clientHeight}px;`;
});

