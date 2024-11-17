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

const getRandomHex = () => {
    const letters = '0123456789ABCDEF';
    let hex = '';
    for (let i = 0; i < 6; i++) {
        hex += letters[Math.floor(Math.random() * 16)];
    }
    return hex;
}

const getColors = async () => {
    try {
        const totalColors = 24;
        const colorPromises = [];
        
        for (let i = 0; i < totalColors; i++) {
            const randomHex = getRandomHex();
            const promise = fetch(`https://www.thecolorapi.com/scheme?hex=${randomHex}&mode=monochrome`)
                .then(response => response.json())
                .then(data => data.colors.map(color => color.hex.value)[0]); // Only get the first color for the scheme
            colorPromises.push(promise);
        }

        const colors = await Promise.all(colorPromises);
        colors.forEach(color => showColor(color));
        const colorBoxes = document.querySelectorAll(".color-box");
        copyToClipboard(colorBoxes);
    } catch (error) {
        console.error("Error fetching colors:", error);
    }
}

getColors();
