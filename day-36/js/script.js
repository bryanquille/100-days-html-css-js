const darkModeBtn = document.querySelector("#dark-mode-btn");
const circle = document.querySelector("#circle");
const modeText = document.querySelector("#mode-text");
let initialPosition = "light";

const prefersDarkMode = window.matchMedia(
  "(prefers-color-scheme:dark)"
).matches;

if (prefersDarkMode) {
  initialPosition = "dark";
  modeText.textContent = "Light";
  circle.style = "margin-left: auto;";
  document.documentElement.classList.toggle("dark");
} else {
  initialPosition = "light";
  modeText.textContent = "Dark";
  circle.style = "margin-right: auto;";
}

darkModeBtn.addEventListener("click", (e) => {
  if (initialPosition === "light") {
    initialPosition = "dark";
    modeText.textContent = "Light";
    circle.style = "margin-left: auto;";
  } else {
    initialPosition = "light";
    modeText.textContent = "Dark";
    circle.style = "margin-right: auto;";
  }

  document.documentElement.classList.toggle("dark");
});
