const preloader = document.querySelector('#preloader');
const bgVideo = document.querySelector('.bg-video');
const playPauseBtn = document.querySelector('#play-pause-btn');
const bgOpacity = document.querySelector('.bg-opacity');
let isPlaying = true;

window.addEventListener('load', () => {
    preloader.style = 'z-index: 1;';
    bgOpacity.style = 'background: linear-gradient(rgba(7, 7, 7, 0.5), rgba(7, 7, 7, 0.5));';
});

const checkPlay = () => {
    if (isPlaying) {
        isPlaying = false;
        playPauseBtn.innerHTML = '<span class="material-icons">smart_display</span>';
        bgVideo.pause();
        return;
    } else {
        isPlaying = true;
        playPauseBtn.innerHTML = '<span class="material-icons">pause</span>';
        bgVideo.play();
        return;
    }
}

playPauseBtn.addEventListener('click', () => {
    checkPlay();
});

