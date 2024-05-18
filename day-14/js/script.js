const steps = document.querySelectorAll(".step");
const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const indicator = document.querySelector(".indicator");
const stepsArray = [...steps];
let currentStep = 1;

const disabledButton = (button) => {
  button.disabled = true;
  button.classList.add("disabled");
};

const enableButton = (button) => {
  button.disabled = false;
  button.classList.remove("disabled");
};

const modifyStep = (step, addOrRemoveClass, circleHTML, stepTextContent) => {
  const circle = step.firstElementChild;
  const stepText = step.lastElementChild;
  circle.classList[addOrRemoveClass === "add" ? "add" : "remove"]("reached");
  circle.innerHTML = circleHTML;
  stepText.textContent = stepTextContent;
  stepText.classList[addOrRemoveClass === "add" ? "add" : "remove"](
    "reached-text"
  );
};

const reachProgressBar = (progressBar) => {
  const progressBarWidth = 100 / (stepsArray.length - 1);
  progressBar.style = `width: ${progressBarWidth * (currentStep - 1)}%;`;
};

const nextStep = (button, stepsArray, currentStep, progressBar) => {
  enableButton(button);
  stepsArray.forEach((step) => {
    if (step.id == currentStep) {
      reachProgressBar(progressBar);
      modifyStep(
        step,
        "add",
        "<span class='material-icons'>done</span>",
        step.id === `${stepsArray.length}` ? "End" : `Step ${step.id - 1}`
      );
    }
  });
};

const prevStep = (button, stepsArray, currentStep, progressBar) => {
  enableButton(button);
  const backs = stepsArray.filter((step) => step.id > currentStep);
  backs.forEach((step) => {
    reachProgressBar(progressBar);
    modifyStep(step, "remove", "<span class='material-icons'>clear</span>", "");
  });
};

leftBtn.addEventListener("click", () => {
  if (currentStep >= 1) {
    currentStep--;
    prevStep(rightBtn, stepsArray, currentStep, indicator);
  }

  if (currentStep === 1) {
    disabledButton(leftBtn);
    currentStep = 1;
  }
});

rightBtn.addEventListener("click", () => {
  if (currentStep < stepsArray.length) {
    currentStep++;
    nextStep(leftBtn, stepsArray, currentStep, indicator);
  }

  if (currentStep === stepsArray.length) {
    disabledButton(rightBtn);
  }
});
