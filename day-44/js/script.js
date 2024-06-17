const body = document.querySelector('body');
const themeBtn = document.querySelector('#btn');
const circle = document.querySelector('.circle');
let initialPosition = "light";

const prefersDarkMode = window.matchMedia("(prefers-color-scheme:dark)").matches;

if (prefersDarkMode) {
  initialPosition = "dark";
  circle.style = "margin-left: auto;";
  body.style = 'background-color: #383838;';
} else {
  initialPosition = "light";
  circle.style = "margin-right: auto;";
}

themeBtn.addEventListener('click', () => {
  if (initialPosition === "dark") {
    initialPosition = 'light';
    circle.style = "margin-right: auto;";
    body.style = '';
    return;
  }
    
  if (initialPosition === 'light') {
    initialPosition = 'dark';
    circle.style = "margin-left: auto;";
    body.style = 'background-color: #383838;';
    return;
  }
});