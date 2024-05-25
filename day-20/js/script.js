const passwordGenerated = document.querySelector("#generated-password");
const copyBtn = document.querySelector("#copy-btn");
const generateBtn = document.querySelector("#generate-password-btn");
const copyNotification = document.querySelector("#copy-notification");

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*.-";

const generatePassword = () => {
    let password = "";
    for (let i = 0; i < 15; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));        
    }
    return password;
}

const toggleNotification = () => {
    copyNotification.classList.toggle("hidden");
    copyNotification.classList.toggle("visible");
}

generateBtn.addEventListener("click", () => {
    passwordGenerated.classList.remove("placeholder");
    passwordGenerated.textContent = generatePassword();
});

copyBtn.addEventListener("click", () => {
    if (passwordGenerated.textContent === "Create Password") return;
    const passwordToCopy = passwordGenerated.textContent;
    navigator.clipboard.writeText(passwordToCopy);
    toggleNotification();
    setTimeout(() => {
        toggleNotification();
    }, 1500);
});