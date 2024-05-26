const emojiBtn = document.querySelector("#emoji-btn");
const content = document.querySelector("#content");
const emojiName = document.querySelector("#emoji-name");

const showEmojiAndName = (htmlcode, name) => {
    content.innerHTML = htmlcode;
    emojiName.textContent = name;
}

const getEmoji = async () => {
    const response = await fetch("https://emojihub.yurace.pro/api/random");
    const data = await response.json();
    const name = data.name.split(",")[0];
    const htmlcode = data.htmlCode[0];
    showEmojiAndName(htmlcode, name);
}

emojiBtn.addEventListener("click", () => {
    content.classList.remove("regular-fs");
    content.innerHTML = "";
    getEmoji();
});