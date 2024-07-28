const previousUrl = document.querySelector('#previous-url');
const form = document.querySelector('#form');
const resetBtn = document.querySelector('#reset-btn');
const result = document.querySelector('#result');
const copyBtn = document.querySelector('#copy-btn');

const shortUrl = async () => {
    const previousUrlValue = previousUrl.value;
    const apiUrl = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(previousUrlValue)}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.text();
        result.value = data;
    } catch (error) {
        console.log(error);
        result.value = 'Error : Unable to short URL!';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    shortUrl();
});

resetBtn.addEventListener('click', () => {
    form.reset();
    result.value = 'Result here...';
});

copyBtn.addEventListener('click', () => {
    const previousUrlValue = previousUrl.value;
    if (previousUrlValue === 'Result here...' || previousUrlValue === '') {
        copyBtn.textContent = 'Nothing to copy';
        setTimeout(() => {
            copyBtn.textContent = 'Copy Shortened URL';
        }, 2000);
    } else {
        navigator.clipboard.writeText(result.value);
        copyBtn.textContent = 'URL copied';
        setTimeout(() => {
            copyBtn.textContent = 'Copy Shortened URL';
        }, 2000);
    }
});