const jokeText = document.querySelector('#joke-text');
const generateBtn = document.querySelector('#generate-btn');

const getJokes = async () => {
    const response = await fetch('https://v2.jokeapi.dev/joke/programming?type=single');
    const data = await response.json();
    jokeText.textContent = data.joke;
}

getJokes();

generateBtn.addEventListener('click', () => {
    getJokes();
});