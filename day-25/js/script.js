const imagesContainer = document.querySelector("#images");
const photosNumber = document.querySelector("#photos-number");
const getImagesBtn = document.querySelector("#get-images-btn");

const showImage = (element, data, number) => {
    element.innerHTML += `
    <img src=${data} alt="image generated ${number}" class="image"/>
    `;
}

const getImages = async (number) => {
    if (number < 1 || number > 100) {
        alert('The number must be greater than 0 and less than or iqual to 100.')
        return;
    }
    for (let i = 1; i <= number; i++) {
        const response = await fetch('https://picsum.photos/300');
        showImage(imagesContainer, response.url, i);
    }
}

getImagesBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const number = Number(photosNumber.value);
    imagesContainer.innerHTML = '';
    getImages(number);
});