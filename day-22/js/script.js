const main = document.querySelector("#main");

const showColor = (hexColor) => {
    main.innerHTML += `
    <div class="color-box" id="${hexColor}">
        <span class="color-text">${hexColor}</span>
    </div>
    `;
    document.getElementById(`${hexColor}`).style = `background-color: ${hexColor};`;
}

const copyToClipboard = (nodelist) => {
    nodelist.forEach(node => {
        node.addEventListener("click", (e) => {
            const hexColorText = e.target.id;
            navigator.clipboard.writeText(hexColorText);
            e.target.classList.add("active");
            setTimeout(() => {
                e.target.classList.remove("active");
            }, 800);
        });
    });
}

const getColors = async () => {
    const response = await fetch("https://x-colors.yurace.pro/api/random?number=25");
    const data = await response.json();
    data.forEach(color => showColor(color.hex));
    const colorBoxes = document.querySelectorAll(".color-box");
    copyToClipboard(colorBoxes);
}

getColors();
