const profileImage = document.querySelector('#profile-image');
const form = document.querySelector('#form');
const select = document.querySelector('#profile');
const width = document.querySelector('#width');
const height = document.querySelector('#height');
const diameter = document.querySelector('#diameter');
const thickness = document.querySelector('#thickness');
const length = document.querySelector('#length');
const area = document.querySelector('#transversal-area');
const volume = document.querySelector('#volume');
const mass = document.querySelector('#mass');

const solidSqGeometry = (w, h, l) => {
    if (w === '' || h === '' || l === '') {
        alert('Please insert all required values');
        return;
    }
    const calcArea = w*h;
    const calcVol = calcArea * l;
    const calcMass = (calcVol / (1000 ** 3)) * 7850;

    return [calcArea, calcVol, calcMass];
}

const solidRdGeometry = (d, l) => {
    if (d === '' || l === '') {
        alert('Please insert all required values');
        return;
    }
    const calcArea = (Math.PI * (d ** 2)) / 4;
    const calcVol = calcArea * l;
    const calcMass = (calcVol / (1000 ** 3)) * 7850;

    return [calcArea, calcVol, calcMass];
}

const sqRecGeometry = (w, h, t, l) => {
    if (w === '' || h === '' || t === '' || l === '') {
        alert('Please insert all required values');
        return;
    }
    const calcArea = ((w * 2) + (h * 2)) * t;
    const calcVol = calcArea * l;
    const calcMass = (calcVol / (1000 ** 3)) * 7850;

    return [calcArea, calcVol, calcMass];
}

const RdGeometry = (d, t, l) => {
    if (d === '' || t === '' || l === '') {
        alert('Please insert all required values');
        return;
    }
    const calcArea = Math.PI * d * t;
    const calcVol = calcArea * l;
    const calcMass = (calcVol / (1000 ** 3)) * 7850;

    return [calcArea, calcVol, calcMass];
}

select.addEventListener('change', () => {
    const selectValue = select.value;
    switch (selectValue) {
        case 'square-bar':
            profileImage.src = `assets/images/square-bar.webp`;
            thickness.disabled = true;
            diameter.disabled = true;
            width.disabled = false;
            height.disabled = false;
            break;
        case 'round-bar':
            profileImage.src = `assets/images/round-bar.webp`;
            diameter.disabled = false;
            thickness.disabled = true;
            width.disabled = true;
            height.disabled = true;
            break;
        case 'square-tube':
            profileImage.src = `assets/images/square-tube.webp`;
            thickness.disabled = false;
            diameter.disabled = true;
            width.disabled = false;
            height.disabled = false;
            break;
        case 'round-tube':
            profileImage.src = `assets/images/round-tube.webp`;
            thickness.disabled = false;
            diameter.disabled = false;
            width.disabled = true;
            height.disabled = true;
            break;
        case 'rect-tube':
            profileImage.src = `assets/images/rect-tube.webp`;
            thickness.disabled = false;
            diameter.disabled = true;
            width.disabled = false;
            height.disabled = false;
            break;
        case 'i-profile':
            profileImage.src = `assets/images/i-profile.webp`;
            thickness.disabled = false;
            diameter.disabled = true;
            width.disabled = false;
            height.disabled = false;
            break;
        default:
            break;
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const selectValue = select.value;

    const widthValue = Number(width.value);
    const heightValue = Number(height.value);
    const lengthValue = Number(length.value);
    const diameterValue = Number(diameter.value);
    
    switch (selectValue) {
        case 'square-bar':
            solidSqGeometry(widthValue, heightValue, lengthValue);
            break;
        case 'round-bar':
            
            break;
        case 'square-tube':
            
            break;
        case 'round-tube':

            break;
        case 'rect-tube':
            
            break;
        case 'i-profile':
            
            break;
        default:
            break;
    }
});