document.addEventListener('DOMContentLoaded', () => {
    const generateCaptchaText = (length) => {
        let result = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charsLength = chars.length;
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * charsLength));
        }
        return result;
    }

    const drawCaptcha = (text) => {
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
        ctx.fillStyle = '#f3f3f3';
        ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);
        addNoise(ctx);
        ctx.fillStyle = '#06108c';
        ctx.font = '24px Arial';

        const textWidth = ctx.measureText(text).width;
        const startX = (canvas.width - textWidth) / 3;

        for (let i = 0; i < text.length; i++) {
            ctx.save();
            ctx.translate(startX + i * 20, 30);
            ctx.rotate((Math.random() - 0.5) * 0.4);
            ctx.fillText(text[i], 0, 0);
            ctx.restore();            
        }
    }

    const addNoise = (ctx) => {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data;
        for (let i = 0; i < pixels.length; i += 19) {
            let color = (Math.random() > 0.5) ? 255 : 0;
            pixels[i] = pixels[i + 1] = pixels[i + 2] = color;
        }
        ctx.putImageData(imageData, 0, 0);
    }
    
    var canvas = document.querySelector('#captcha');
    var ctx = canvas.getContext('2d');
    var captchaText = generateCaptchaText(6);
    const captchaStatus = document.querySelector('#status');
    drawCaptcha(captchaText);

    const verifyCaptcha = () => {
        var inputText = document.querySelector('#captcha-input').value.toLowerCase();
        if (inputText === captchaText.toLowerCase()) {
            captchaStatus.textContent = 'Captcha Correct!';
            captchaStatus.style.color = 'green';
        } else if (inputText. length < 6) {
            captchaStatus.textContent = 'Enter all characters!';
            captchaStatus.style.color = 'orange';
        } else {
            captchaStatus.textContent = 'Captcha Incorrect! Please try again!';
            captchaStatus.style.color = 'red';
        }

        setTimeout(() => {
            captchaStatus.textContent = 'IDLE';
            captchaStatus.style.color = '#06283D';
        }, 3000);
        document.querySelector('#captcha-input').value = '';
        captchaText = generateCaptchaText(6);
        drawCaptcha(captchaText);
    }

    var checkBtn = document.querySelector('#check-btn');
    checkBtn.addEventListener('click', verifyCaptcha);

    var reloadBtn = document.querySelector('#reload-btn');
    reloadBtn.addEventListener('click', () => {
        captchaText = generateCaptchaText(6);
        drawCaptcha(captchaText);
        document.querySelector('#catcha-input').value = '';
        captchaStatus.textContent = 'IDLE';
        captchaStatus.style.color = '#06283D';
    });
});