let startTime, endTime;
let imageSize = '';
let image = new Image();
const bitSpeed = document.querySelector('#bits');
const kbSpeed = document.querySelector('#kbs');
const mbSpeed = document.querySelector('#mbs');
const info = document.querySelector('#info');

let totalBitSpeed = 0;
let totalKbSpeed = 0;
let totalMbSpeed = 0;
let numTests = 5;
let testCompleted = 0;

const calculateSpeed = () => {
    let timeDuration = (endTime  - startTime) / 1000;
    let loadedBits = imageSize * 8;
    let speedInBits = loadedBits / timeDuration;
    let speedInKbs = speedInBits / 1024;
    let speedInMbs = speedInKbs / 1024;

    totalBitSpeed += speedInBits;
    totalKbSpeed += speedInKbs;
    totalMbSpeed += speedInMbs;

    testCompleted++;

    if (testCompleted === numTests) {
        let averageSpeedInBps = (totalBitSpeed / numTests).toFixed(2);
        let averageSpeedInKbps = (totalKbSpeed / numTests).toFixed(2);
        let averageSpeedInMbps = (totalMbSpeed / numTests).toFixed(2);

        bitSpeed.textContent = averageSpeedInBps;
        kbSpeed.textContent = averageSpeedInKbps;
        mbSpeed.textContent = averageSpeedInMbps;
        info.textContent = 'Test Completed!';
    } else {
        startTime = new Date().getTime();
        image.src = imageApi;
    }
}

const init = () => {
    info.textContent = 'Testing...';
    startTime = new Date().getTime();
    image.src = imageApi;
}

// Get random image
let imageApi = 'https://picsum.photos/200/300';

image.onload = async () => {
    endTime = new Date().getTime();
    try {
        const response = await fetch(imageApi);
        imageSize = response.headers.get('content-length');
        calculateSpeed();
    } catch (error) {
        console.log(error);
    }
}

window.addEventListener('load', () => {
    for (let i = 0; i < numTests; i++) {
        init();        
    }
});
