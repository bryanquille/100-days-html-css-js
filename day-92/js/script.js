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

const rdGeometry = (d, t, l) => {
    if (d === '' || t === '' || l === '') {
        alert('Please insert all required values');
        return;
    }
    const calcArea = Math.PI * d * t;
    const calcVol = calcArea * l;
    const calcMass = (calcVol / (1000 ** 3)) * 7850;

    return [calcArea, calcVol, calcMass];
}

const iGeometry = (w, h, t, l) => {
    if (w === '' || h === '' || t === '' || l === '') {
        alert('Please insert all required values');
        return;
    }
    const calcArea = ((w * 2) + h) * t;
    const calcVol = calcArea * l;
    const calcMass = (calcVol / (1000 ** 3)) * 7850;

    return [calcArea, calcVol, calcMass];
}

select.addEventListener('change', (e) => {
    const selectValue = select.value;

    const optionsList = [...e.currentTarget.children];
    optionsList.forEach(option => {
        option.selected = false;
    });

    area.textContent = '00';
    volume.textContent = '00';
    mass.textContent = '00';
    form.reset();

    switch (selectValue) {
        case 'square-bar':
            profileImage.src = `assets/images/square-bar.webp`;
            thickness.disabled = true;
            diameter.disabled = true;
            width.disabled = false;
            height.disabled = false;
            optionsList[0].selected = true;
            break;
        case 'round-bar':
            profileImage.src = `assets/images/round-bar.webp`;
            diameter.disabled = false;
            thickness.disabled = true;
            width.disabled = true;
            height.disabled = true;
            optionsList[1].selected = true;
            break;
        case 'square-tube':
            profileImage.src = `assets/images/square-tube.webp`;
            thickness.disabled = false;
            diameter.disabled = true;
            width.disabled = false;
            height.disabled = false;
            optionsList[2].selected = true;
            break;
        case 'round-tube':
            profileImage.src = `assets/images/round-tube.webp`;
            thickness.disabled = false;
            diameter.disabled = false;
            width.disabled = true;
            height.disabled = true;
            optionsList[3].selected = true;
            break;
        case 'rect-tube':
            profileImage.src = `assets/images/rect-tube.webp`;
            thickness.disabled = false;
            diameter.disabled = true;
            width.disabled = false;
            height.disabled = false;
            optionsList[4].selected = true;
            break;
        case 'i-profile':
            profileImage.src = `assets/images/i-profile.webp`;
            thickness.disabled = false;
            diameter.disabled = true;
            width.disabled = false;
            height.disabled = false;
            optionsList[5].selected = true;
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
    const diameterValue = Number(diameter.value);
    const thicknessValue = Number(thickness.value);
    const lengthValue = Number(length.value);

    let response = null;
    
    switch (selectValue) {
        case 'square-bar':
            response = solidSqGeometry(widthValue, heightValue, lengthValue);
            break;
        case 'round-bar':
            response = solidRdGeometry(diameterValue, lengthValue);
            break;
        case 'square-tube':
            response = sqRecGeometry(widthValue, heightValue, thicknessValue, lengthValue);
            break;
        case 'round-tube':
            response = rdGeometry(diameterValue, thicknessValue, lengthValue);
            break;
        case 'rect-tube':
            response = sqRecGeometry(widthValue, heightValue, thicknessValue, lengthValue);
            break;
        case 'i-profile':
            response = iGeometry(widthValue, heightValue, thicknessValue, lengthValue);
            break;
        default:
            break;
    }

    area.textContent = response[0].toFixed(2);
    volume.textContent = response[1].toFixed(2);
    mass.textContent = response[2].toFixed(2);
});