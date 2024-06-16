const androidSection = document.querySelector('#android');
const appleSection = document.querySelector('#apple');

window.addEventListener('mouseout', () => {
    androidSection.style = 'flex-grow: 1;';
    appleSection.style = 'flex-grow: 1;';
});

androidSection.addEventListener('mouseover', () => {
    androidSection.style = 'flex-grow: 0.85;';
    appleSection.style = 'flex-grow: 0.15;';
});

appleSection.addEventListener('mouseover', () => {
    androidSection.style = 'flex-grow: 0.15;';
    appleSection.style = 'flex-grow: 0.85;';
});