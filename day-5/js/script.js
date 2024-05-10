const dice = document.querySelector("#dice");
const value = document.querySelector("#value");

dice.addEventListener("click", () => {
    const number = Math.floor(Math.random() * (7 - 1) + 1);
    dice.classList.add("rotate-anim");
    setTimeout(() => {
        dice.classList.remove("rotate-anim");

        switch (number) {
            case 1:
                dice.style = "transform: rotateY(20deg)";
                break;
            case 2:
                dice.style = "transform: rotateY(20deg) rotateX(-90deg)";
                break;
            case 3:
                dice.style = "transform: rotateY(110deg)";
                break;
            case 4:
                dice.style = "transform: rotateY(-65deg)";
                break;
            case 5:
                dice.style = "transform: rotateY(20deg) rotateX(90deg)";
                break;
            case 6:
                dice.style = "transform: rotateY(20deg) rotateX(180deg)";
                break;
        }
        value.innerHTML = `You got the number: <span class="bold">${number}</span>`;
    }, 3000);
});