const progressPercentage = document.querySelector('#progress-percentage');
const bar = document.querySelector('#bar');
const loadBtn = document.querySelector('#load-btn');

loadBtn.addEventListener('click', () => {
    loadBtn.disabled = true;
    const time = 5000;
    let progressCounter = 0;
    const progressTime = setInterval(() => {
        progressPercentage.textContent = progressCounter;
        if (progressCounter === 100) {
            bar.style = `border-radius: 0.75rem; width: ${progressCounter}%;`;
        } else {
            bar.style = `width: ${progressCounter}%;`;
        }
        progressCounter++;
        if (progressCounter === 101) {
            clearInterval(progressTime);
            loadBtn.disabled = false;
        }
    }, (time / 100));
});