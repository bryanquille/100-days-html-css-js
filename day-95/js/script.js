// Creation Form
const creationForm = document.querySelector('#creation-form');
const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const ageInput = document.querySelector('#age');
const emailInput = document.querySelector('#email');
const locationInput = document.querySelector('#location');
const profilePhotoInput = document.querySelector('#profile-photo');
const profileImageIcon = document.querySelector('#profile-image-icon');

// Profile Card
const profileCard = document.querySelector('#profile-card');
const nameData = document.querySelector('#name-data');
const profileImage = document.querySelector('#profile-image');
const ageData = document.querySelector('#age-data');
const emailData = document.querySelector('#email-data');
const locationData = document.querySelector('#location-data');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInputValue = nameInput.value;
    const ageInputValue = ageInput.value;
    const emailInputValue = emailInput.value;
    const locationInputValue = locationInput.value;

    nameData.textContent = nameInputValue;
    ageData.textContent = ageInputValue;
    emailData.textContent = emailInputValue;
    locationData.textContent = locationInputValue;

    creationForm.classList.add('hid-form');
    profileCard.classList.remove('hid-card')
    profileCard.classList.add('show-card')
});

profilePhotoInput.addEventListener('change', (e) => {
    if (e.target.files[0]) {
        const reader = new FileReader();
        reader.addEventListener('load', event => {
            profileImageIcon.src = event.target.result;
            profileImage.src = event.target.result;
        });
        reader.readAsDataURL(e.target.files[0]);
    } else {
        profileImageIcon.src = 'assets/images/profile-image.svg';
        profileImage.src = 'assets/images/profile-image.svg';
    }
});