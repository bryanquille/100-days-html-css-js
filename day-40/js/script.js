const statusEmoji = document.querySelector('.status-emoji');
const emojiImg = document.querySelector('#emoji-img');
const stars = document.querySelectorAll('.star');

statusEmoji.innerHTML = `<img src="./assets/20.svg" alt="Angry emoji" class="emoji-img" id="emoji-img" />`;
console.log(stars[0]);
stars[0].style = 'fill: #FFBF00;'

Array.from(stars).forEach((star, index, arr) => {
    const len = arr.length;
    star.addEventListener('click', () => {
        arr.forEach(star => star.style = 'fill: #B4B4B8;');
        for (let i = 0; i <= index; i++) {
            arr[i].style = 'fill: #FFBF00;'
        }

        switch (index) {
            case 0:
                statusEmoji.innerHTML = `
                    <img src="./assets/20.svg" alt="Angry emoji" class="emoji-img" id="emoji-img" />
                `;
                break;
            case 1:
                statusEmoji.innerHTML = `
                    <img src="./assets/40.svg" alt="Sad emoji" class="emoji-img" id="emoji-img" />
                `;
                break;
            case 2:
                statusEmoji.innerHTML = `
                    <img src="./assets/60.svg" alt="Neutral emoji" class="emoji-img" id="emoji-img" />
                `;
                break;
            case 3:
                statusEmoji.innerHTML = `
                    <img src="./assets/80.svg" alt="Happy emoji" class="emoji-img" id="emoji-img" />
                `;
                break;
            case 4:
                statusEmoji.innerHTML = `
                    <img src="./assets/100.svg" alt="Very happy emoji" class="emoji-img" id="emoji-img" />
                `;
                break;
        
            default:
                break;
        }
    });
    
});