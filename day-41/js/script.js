const crashAudio = new Audio('https://cdn.pixabay.com/audio/2024/09/16/audio_5823237b7f.mp3');
const kickAudio = new Audio('https://cdn.pixabay.com/audio/2024/11/02/audio_b898b625db.mp3');
const snareAudio = new Audio('https://cdn.pixabay.com/audio/2022/03/15/audio_cf8c31e615.mp3');
const tomAudio = new Audio('https://cdn.pixabay.com/audio/2022/03/25/audio_e1ca492b34.mp3');
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