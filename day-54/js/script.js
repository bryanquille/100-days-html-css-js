const generateBtn = document.querySelector("#generate-btn");
const imageContainer = document.querySelector(".image-container");
const nameElement = document.querySelector("#name");
const categories = [
  "waifu",
  "neko",
  "shinobu",
  "megumin",
  "bully",
  "cuddle",
  "cry",
  "hug",
  "awoo",
  "kiss",
  "lick",
  "pat",
  "smug",
  "bonk",
  "yeet",
  "blush",
  "smile",
  "wave",
  "highfive",
  "handhold",
  "nom",
  "bite",
  "glomp",
  "slap",
  "kill",
  "kick",
  "happy",
  "wink",
  "poke",
  "dance",
  "cringe",
];

const randomCategory = () => {
  const len = categories.length;
  const randomIndex = Math.floor(Math.random() * len);
  return categories[randomIndex];
};

const getAnimeImage = async () => {
  generateBtn.disabled = true;
  generateBtn.textContent = "Loading...";
  imageContainer.innerHTML =
    '<img src="assets/gifs/loader.gif" alt="loader" class="loader-image">';

  const category = randomCategory();
  const response = await fetch(`https://api.waifu.pics/sfw/${category}`);
  const data = await response.json();

  imageContainer.innerHTML = `
    <img src="${data.url}" alt="${category} image" class="image">
    `;
  nameElement.textContent = `${category}`;

  generateBtn.disabled = false;
  generateBtn.textContent = "Get Anime";
};

getAnimeImage();

generateBtn.addEventListener("click", () => {
  getAnimeImage();
});
