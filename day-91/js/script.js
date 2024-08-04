const form = document.querySelector('#form');
const screenshotBtn = document.querySelector('#screenshot-btn');

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

screenshotBtn.addEventListener('click', () => {
    html2canvas(document.documentElement, {
        scale: window.devicePixelRatio,
        logging: true,
        useCORS: true,
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth
    }).then(canvas => {
        var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

        var link = document.createElement('a');
        link.download = 'screenshot.png';
        link.href = image;
        link.click();
    })
});