const form = document.querySelector("#form");
const inputWord = document.querySelector("#input-word");
const instructions = document.querySelector("#instructions");
const wordTitleContainer = document.querySelector("#word-title-container");
const wordTitle = document.querySelector("#world-title");
const meaningContainer = document.querySelector("#meaning-container");
const meaning = document.querySelector("#meaning");
const audioElement = document.querySelector('#audio-element');

const showText = (element) => {
  element.classList.remove('hidden');
  element.classList.add('visible');
}

const hidElement = (element) => {
    element.classList.remove('visible');
    element.classList.add('hidden');
}

const getWordValue = () => {
  const word = inputWord.value.toLowerCase().trim();
  const someWordLength = word.split(' ').length;
  if (someWordLength > 1) {
    alert('Please type a single word without spaces, or with a dash like "pick-up"');
    inputWord.value = '';

    wordTitle.textContent = '';
    hidElement(wordTitleContainer);

    meaning.textContent = '';
    hidElement(meaningContainer);
    return '';
  }
  if (word === "") {
    alert("Please enter a word to find the meaning");
    return;
  }
  return word;
};

const getMeaning = async (word) => {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const response = await fetch(url);
  if (response.status === 404) {
    alert('Please check the spelling or if the word exists');
  } else {
    const data = await response.json();

    hidElement(instructions);
    
    // Showing the word to find the meaning
    wordTitle.textContent = data[0].word;
    showText(wordTitleContainer);
    
    // Showing the meaning of the word
    meaning.textContent = data[0].meanings[0].definitions[0].definition;
    showText(meaningContainer);

    // Showing the audio
    const audioSrc = data[0].phonetics[0].audio;
    if (audioSrc !== '') {
        audioElement.setAttribute('src', audioSrc);
        showText(audioElement);
    } else {
        hidElement(audioElement);
    }
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const word = getWordValue();
  getMeaning(word);
});
