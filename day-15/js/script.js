const selectedContainer = document.querySelector("#selected-container");
const selected = document.querySelector("#selected");
const arrow = document.querySelector("#arrow");
const socialMedia = document.querySelector("#social-media");
const socialMediaItems = document.querySelectorAll(".sm-item");

const smObject = {
    facebook: "<img src='assets/social-media/facebook.svg' alt='Facebook logo' class='facebook'> Facebook",
    youtube: "<img src='assets/social-media/youtube.svg' alt='YouTube logo' class='youtube'> YouTube",
    x: "<img src='assets/social-media/x.svg' alt='X logo' class='x'> X",
    linkedin: "<img src='assets/social-media/linkedin.svg' alt='LinkedIn logo' class='linkedin'> LinkedIn",
}

selectedContainer.addEventListener("click", () => {
    arrow.classList.toggle("up-arrow");
    socialMedia.classList.toggle("visible");
});

socialMediaItems.forEach(sm => {
    sm.addEventListener("click", (e) => {
        selected.innerHTML = smObject[e.target.id];
        arrow.classList.remove("up-arrow");
        socialMedia.classList.remove("visible");
    });
});