
// Variable needed for the event listener loop
const buttons = document.getElementsByClassName("choice-button");

/**
 * Event listener loop for all interactive buttons
 */
for (let button of buttons) {
    button.addEventListener("click", function() {
       let playerChoice = this.getAttribute("data-choice");
        if (playerChoice === "rock") {
            rockData();
            robotChoice();
        } else if (playerChoice === "paper") {
            paperData();
            robotChoice();
        } else if (playerChoice === "scissors") {
            scissorsData();
            robotChoice();
        } else if (playerChoice === "reset") {
            resetGame();
        }
    });
}

// Functions passing data from event listeners to the function comparing the player and computer choices
function rockData() {
    choiceResultData = "fas fa-hand-rock";
}

function paperData() {
    choiceResultData = "fas fa-hand-rock";
}

function scissorsData() {
    choiceResultData = "fas fa-hand-scissors";
}
