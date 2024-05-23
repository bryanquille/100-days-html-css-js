const imagesContainer = document.querySelector("#images-container");
const moreImagesBtn = document.querySelector("#more-images-btn");

const createImage = (element, imageUrl) => {
    element.innerHTML += `
    <img src=${imageUrl} alt="random image" class="image" />
    `;
}

const fetchData = async () => {
    const response = await fetch("https://picsum.photos/350.webp");
    const url = response.url;
    createImage(imagesContainer, url);
}

window.addEventListener("load", () => {
    for (let i = 0; i < 8; i++) {
        fetchData();       
    }
});


moreImagesBtn.addEventListener("click", () => {
    for (let i = 0; i < 8; i++) {
        fetchData();       
    }
});