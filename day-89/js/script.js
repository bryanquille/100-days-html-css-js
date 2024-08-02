const app = document.querySelector('#app');

const statusChecker = (status) => {
    if (status === "Alive") {
        return '<span class="green"></span>';
    } else if (status === "unknown") {
        return '<span class="gray"></span>';
    } else {
        return '<span class="red"></span>';
    }
}

const showCharacters = async () => {
    const apiUrl = 'https://rickandmortyapi.com/api/character';
    const response = await fetch(apiUrl);
    const data = await response.json();

    for (let i = 0; i < data.results.length; i++) {
        app.innerHTML += `
        <article class="character-container">
            <div class="info-container">
                <h2 class="title-2">${data.results[i].name}</h2>
                <p class="status"><strong>Status:</strong> ${statusChecker(data.results[i].status)} ${data.results[i].status}</p>
                <p class="species"><strong>Specie:</strong> ${data.results[i].species}</p>
                <p class="origin"><strong>Origin:</strong> ${data.results[i].origin.name}</p>
            </div>
            <img src="${data.results[i].image}" alt="${data.results[i].name} image" class="char-image">
        </article>`;        
    }
}

showCharacters();
