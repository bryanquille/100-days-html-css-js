const backBtn = document.querySelector("#back-btn");
const forwardBtn = document.querySelector("#forward-btn");
const imageContainer = document.querySelector(".image-container");
const images = document.querySelectorAll('.image');
const maxDisplacement = ((images.length - 1) * 100);
let translateXValue = 0;

const goForward = () => {
  if (translateXValue === -maxDisplacement) {
    translateXValue = 0;
    imageContainer.style = `transform: translateX(${translateXValue}%);`;
  } else {
    translateXValue -= 100;
    imageContainer.style = `transform: translateX(${translateXValue}%);`;
  }
}

const goBack = () => {
  if (translateXValue === 0) {
    translateXValue = -600;
    imageContainer.style = `transform: translateX(${translateXValue}%);`;
  } else {
    translateXValue += 100;
    imageContainer.style = `transform: translateX(${translateXValue}%);`;
  }
}

setInterval(() => {
  goForward();
}, 5000);

forwardBtn.addEventListener('click', goForward);
backBtn.addEventListener('click', goBack);
