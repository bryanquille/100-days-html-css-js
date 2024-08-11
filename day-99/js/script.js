const cookiesInfo = document.querySelector('#cookies-info');
const blurBg = document.querySelector('#blur-bg');
const cookiesDlgBox = document.querySelector('#cookies-dlg-box');
const customizeBtn = document.querySelector('#customize-btn');
const acceptBtn = document.querySelector('#accept-btn');
const customizableDlgBox = document.querySelector('#customizable-dlg-box');
const backBtn = document.querySelector('#back-btn');
const neccessary = document.querySelector('#neccessary');
const anaPref = document.querySelector('#ana-pref');
const marketing = document.querySelector('#marketing');
const changeables = document.querySelectorAll('.changeable');
const savePrefBtn = document.querySelector('#save-pref-btn');

setTimeout(() => {
    blurBg.classList.remove('hid-blur-bg');
    blurBg.classList.add('show-blur-bg');
    cookiesDlgBox.classList.remove('hid-modal');
    cookiesDlgBox.classList.add('show-modal');
}, 1000);

acceptBtn.addEventListener('click', () =>{
    cookiesInfo.innerHTML = `
    <p class="info-text"><span>Neccessary:</span> <span>✅</span></p>
    <p class="info-text"><span>Analytics & performance:</span> <span>✅</span></p>
    <p class="info-text"><span>Marketing:</span> <span>✅</span></p>`;
    blurBg.classList.add('hid-blur-bg');
    blurBg.classList.remove('show-blur-bg');
    cookiesDlgBox.classList.add('hid-modal');
    cookiesDlgBox.classList.remove('show-modal');
});

customizeBtn.addEventListener('click', () => {
    cookiesDlgBox.classList.add('hid-modal');
    cookiesDlgBox.classList.remove('show-modal');
    customizableDlgBox.classList.remove('hid-modal');
    customizableDlgBox.classList.add('show-modal');
});

backBtn.addEventListener('click', () => {
    cookiesDlgBox.classList.remove('hid-modal');
    cookiesDlgBox.classList.add('show-modal');
    customizableDlgBox.classList.add('hid-modal');
    customizableDlgBox.classList.remove('show-modal');
});

changeables.forEach(changeable => {
    changeable.addEventListener('change', (e) => {
        const label = e.currentTarget.parentElement;
        label.classList.toggle('checked');
    });
});

savePrefBtn.addEventListener('click', () => {
    let isNeccessaryChecked = '';
    let isAnaPrefChecked = '';
    let isMarketingChecked = '';

    if (neccessary.checked) {
        isNeccessaryChecked = '✅';
    } else {
        isNeccessaryChecked = '❌';
    }

    if (anaPref.checked) {
        isAnaPrefChecked = '✅';
    } else {
        isAnaPrefChecked = '❌';
    }
    
    if (marketing.checked) {
        isMarketingChecked = '✅';
    } else {
        isMarketingChecked = '❌';
    }

    cookiesInfo.innerHTML = `
    <p class="info-text"><span>Neccessary:</span> <span>${isNeccessaryChecked}</span></p>
    <p class="info-text"><span>Analytics & performance:</span> <span>${isAnaPrefChecked}</span></p>
    <p class="info-text"><span>Marketing:</span> <span>${isMarketingChecked}</span></p>
    `;

    blurBg.classList.add('hid-blur-bg');
    blurBg.classList.remove('show-blur-bg');
    customizableDlgBox.classList.add('hid-modal');
    customizableDlgBox.classList.remove('show-modal');
});