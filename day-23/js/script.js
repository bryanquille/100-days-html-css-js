const root = document.querySelector("#root");
const openBtns = document.querySelectorAll(".btn");

const toggleClasses = (element) => {
  element.classList.toggle("hidden");
  element.classList.toggle("visible");
};

openBtns.forEach((openBtn) => {
  openBtn.addEventListener("click", (e) => {
    const currentOpenBtn = e.target;
    const hr = e.target.parentElement.parentElement.childNodes[3];
    const answer = e.target.parentElement.parentElement.childNodes[5];

    if (currentOpenBtn.innerHTML === "remove_circle") {
      currentOpenBtn.innerHTML = "add_circle";
    } else {
      currentOpenBtn.innerHTML = "remove_circle";
    }
    toggleClasses(hr);
    toggleClasses(answer);
  });
});
