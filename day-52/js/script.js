const textMachine = document.querySelector('.machine');

const textLoad = () => {
    setTimeout(() => {
        textMachine.textContent = 'Programmer';
    }, 0);

    setTimeout(() => {
        textMachine.textContent = 'Developer';
    }, 4000);
    
    setTimeout(() => {
        textMachine.textContent = 'Gamer';
    }, 8000);

    setTimeout(() => {
        textMachine.textContent = 'YouTuber';
    }, 12000);
}

textLoad();

setInterval(() => {
    textLoad();
}, 16000);