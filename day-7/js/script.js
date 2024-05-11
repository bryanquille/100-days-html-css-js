const body = document.querySelector("body");
const whoBeatsBtn = document.querySelector("#who-beats");
const closeRulesBtn = document.querySelector("#close-rules");
const rulesModal = document.querySelector("#rules");
const playBtn = document.querySelector("#play-btn");
const resetBtn = document.querySelector("#reset-btn");
const options = document.querySelectorAll(".options");
const playedGames = document.querySelector("#played-games");
const computerScores = document.querySelector("#computer-scores");
const userScores = document.querySelector("#user-scores");
const ties = document.querySelector("#ties");
const winner = document.querySelector("#winner");

let isThereAUserSelection = false;
let userSelection = null;
let computerSelection = null;
let computerGameTime = 0;
const optionValues = {
    0: "rock",
    1: "paper",
    2: "scissors",
    3: "lizard",
    4: "spock",
}
let counterGames = 0;
let scores = {
    computer: 0,
    user: 0,
    ties: 0,
    playedGames: counterGames,
}

// Functions
const changeBorderColor = (element, property, color) => {
    element.style = `${property}-color: ${color}`;
}

const computerGame = () => {
    const randomValue = Math.floor(Math.random() * 5);
    computerSelection = randomValue;
    let optionIndex = 0;
    let counter = 0;
    const iterNumber = 10 + randomValue;
    computerGameTime = iterNumber * 250;
    const animation = setInterval(() => {
        if (optionIndex > 4) optionIndex = 0;
        if (counter >= iterNumber) clearInterval(animation);
        options.forEach(option => changeBorderColor(option, "outline", "transparent"));
        changeBorderColor(options[optionIndex], "outline", "var(--color6)")
        optionIndex++;
        counter++;
    }, 200);
}

const compare = (computer, user) => {
    if (computer === 0 && (user === 3 || user === 2)) {
        return "Computer";
    } else if (computer === 1 && (user === 0 || user === 4)) {
        return "Computer";
    } else if (computer === 2 && (user === 1 || user === 3)) {
        return "Computer";
    } else if (computer === 3 && (user === 4 || user === 1)) {
        return "Computer";
    } else if (computer === 4 && (user === 2 || user === 0)) {
        return "Computer";
    } else if (computer === user) {
        return "Tie";
    }else {
        return "User";
    }
}

const showScores = (result) => {
    if (result === "Computer") {
        scores.computer++;
        computerScores.textContent = scores.computer;
    } else if (result === "User") {
        scores.user++;
        userScores.textContent = scores.user;
    } else if (result === "Tie") {
        scores.ties++;
        ties.textContent = scores.ties;
    }
}

const showWinner = (userScores, computerScores) => {
    if (userScores > computerScores) {
        winner.textContent = "User";
    } else if (userScores < computerScores) {
        winner.textContent = "Computer";
    } else {
        winner.textContent = "Nobody";
    }
}

// Modal window -> who beats?
whoBeatsBtn.addEventListener("click", () => {
    rulesModal.classList.add("show-rules");
    body.style = "overflow: hidden";
});

closeRulesBtn.addEventListener("click", () => {
    rulesModal.classList.remove("show-rules");
    body.removeAttribute("style");
});

// Game
options.forEach((option, index, arr) => {
    option.addEventListener("click", () => {
        isThereAUserSelection = true;
        userSelection = index;
        arr.forEach(item => item.classList.remove("user-selected"));
        option.classList.add("user-selected");
    });
});

playBtn.addEventListener("click", () => {
    if (!isThereAUserSelection) {
        alert("Please choose an option before 'Play'");
        return;
    };
    computerGame();
    counterGames++;
    playedGames.textContent = counterGames;
    if (counterGames <= 5) {
        setTimeout(() => {
            const result = compare(computerSelection, userSelection);
            showScores(result);
            if (counterGames === 5) showWinner(scores.user, scores.computer);
        }, computerGameTime);
    }
    if (counterGames === 5) {
        playBtn.disabled = true;
        options.forEach(option => {
            option.classList.add("cursor");
        });
    }
});

resetBtn.addEventListener("click", () => {
    playBtn.disabled = false;

    options.forEach(option => {
        option.classList.remove("user-selected");
        changeBorderColor(option, "outline", "transparent");
    });

    userSelection = null;
    computerSelection = null;
    isThereAUserSelection = false;
    counterGames = 0;
    scores = {
        computer: 0,
        user: 0,
        ties: 0,
        playedGames: counterGames,
    }

    playedGames.textContent = 0;
    computerScores.textContent = 0;
    userScores.textContent = 0;
    ties.textContent = 0;
    winner.textContent = "----";
});