const cardsContainer = document.querySelector("#cards-container");
const generateOther = document.querySelector("#generate-other");

const createRecipe = (element, recipeName, instructions, youtubeLink, imageLink) => {
    element.innerHTML += `
    <article class="card flex-column">
        <div class="card-info-container flex-column">
            <div class="card-title-instructions">
                <h3 class="title-3">${recipeName}</h3>
                <p class="instructions">${instructions}</p>
            </div>
            <a href="${youtubeLink}" target="_blank" class="yt-link">Watch it on Youtube</a>
        </div>
        <img src="${imageLink}" alt="${recipeName} Dish" class="recipe-image" loading="lazy">
    </article>
    `;
}

const fetchData = async () => {
    for (let i = 0; i < 5; i++) {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        const data = await response.json();
        const meal = data.meals["0"];
        createRecipe(
            cardsContainer, 
            meal.strMeal, 
            meal.strInstructions, 
            meal.strYoutube, 
            meal.strMealThumb
        );
    }
}

fetchData();

generateOther.addEventListener("click", () => {
    cardsContainer.innerHTML = "";
    fetchData();
});