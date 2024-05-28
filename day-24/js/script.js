const experienceEl = document.querySelector("#experience-number");
const websitesEl = document.querySelector("#websites-number");
const appsEl = document.querySelector("#apps-number");

const data = {
  experience: 12,
  websites: 247,
  apps: 32,
};

const calculateTime = (number) => {
  const time = 2000 / number;
  return time;
};

const chargeStatistic = (element, number) => {
  let counter = 0;
  const timeInter = setInterval(() => {
    counter++;
    element.innerHTML = counter;
    if (counter === number) clearInterval(timeInter);
  }, calculateTime(number));
};

window.addEventListener("load", () => {
  chargeStatistic(experienceEl, data.experience);
  chargeStatistic(websitesEl, data.websites);
  chargeStatistic(appsEl, data.apps);
});
