const crashAudio = new Audio('../assets/sounds/crash.mp3');
const kickAudio = new Audio('../assets/sounds/kick.mp3');
const snareAudio = new Audio('../assets/sounds/snare.mp3');
const tomAudio = new Audio('../assets/sounds/tom.mp3');
const crashBtn = document.querySelector('#crash-btn');
const kickBtn = document.querySelector('#kick-btn');
const snareBtn = document.querySelector('#snare-btn');
const tomBtn = document.querySelector('#tom-btn');

crashBtn.addEventListener('click', () => {
    crashAudio.play();
});

kickBtn.addEventListener('click', () => {
    kickAudio.play();
});

snareBtn.addEventListener('click', () => {
    snareAudio.play();
});

tomBtn.addEventListener('click', () => {
    tomAudio.play();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'c' || e.key === 'C') {
        crashAudio.play();
        return;
    }
    if (e.key === 'k' || e.key === 'K') {
        kickAudio.play();
        return;
    }
    if (e.key === 's' || e.key === 'S') {
        snareAudio.play();
        return;
    }
    if (e.key === 't' || e.key === 'T') {
        tomAudio.play();
        return;
    }
});