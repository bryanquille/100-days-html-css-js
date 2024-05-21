const textInput = document.querySelector("#text");
const chars = document.querySelector("#chars");
const remaining = document.querySelector("#remaining");

textInput.addEventListener("input", () => {
    const text = textInput.value;
    const textLength = text.length;

    chars.textContent = textLength;
    remaining.textContent = 50 - textLength;
});