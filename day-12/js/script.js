const image = document.querySelector("#image");
const button1 = document.querySelector("#step-1");
const button2 = document.querySelector("#step-2");
const button3 = document.querySelector("#step-3");
const heading2 = document.querySelector("#title-2");

const changeImage = (element, imgUrl, altText) => {
    element.src = imgUrl;
    element.alt = altText;
}

const changeTitle = (element) => {
    const buttonText = element.textContent;
    heading2.textContent = `${buttonText}`;
}

const showArticle = (element, text) => {
    element.textContent = text;
}

const toggleSelectedButton = (focus, noFocus1, noFocus2) => {
    focus.classList.add("selected");
    noFocus1.classList.remove("selected");
    noFocus2.classList.remove("selected");
}

button1.addEventListener("click", () => {
    toggleSelectedButton(button1, button2, button3);
    changeImage(image, "assets/coding-1.jpg", "A man coding with a rain of binary code");
    changeTitle(button1);
});

button2.addEventListener("click", () => {
    toggleSelectedButton(button2, button1, button3);
    changeImage(image, "assets/coding-2.png", "A man watching the monitor in his office.");
    changeTitle(button2);
});

button3.addEventListener("click", () => {
    toggleSelectedButton(button3, button1, button2);
    changeImage(image, "assets/coding-3.jpg", "A junior programmer girl wearing glasses and a background representing tools of programming");
    changeTitle(button3);
});