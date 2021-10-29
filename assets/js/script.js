
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

/**
 * Picks random number between 0 and 2 and changes the robot icon into either rock, paper or scissors icon
 */
function robotChoice() {
    let robotNumber = Math.floor(Math.random()*3);

    if (robotNumber === 0) {
        document.getElementById("robot-choice").setAttribute("class", "fas fa-hand-rock");
    } else if (robotNumber === 1) {
        document.getElementById("robot-choice").setAttribute("class", "fas fa-hand-paper");
    } else {
        document.getElementById("robot-choice").setAttribute("class", "fas fa-hand-scissors");
    } 
    choiceResult();
}

/**
 * Compares the player choice and the computer choice
 */
function choiceResult() {
    let playerResult = choiceResultData;
    let robotResult = document.getElementById("robot-choice").getAttribute("class");
   
    if (playerResult !== robotResult) {
        if (playerResult === "fas fa-hand-rock") {
            if (robotResult === "fas fa-hand-scissors") {
                win();
            } else {
                defeat();
            }
        } else if (playerResult === "fas fa-hand-paper") {
            if (robotResult === "fas fa-hand-rock") {
                win();
            } else {
                defeat();
            }
        } else if (playerResult === "fas fa-hand-scissors") {
            if (robotResult === "fas fa-hand-paper") {
                win();
            } else {
                defeat();
            }
        } 
    } else {
        draw();
    }
}

/**
 * Resets the score and changes the computers icon back into the robot icon
 */
function resetGame() {
    document.getElementById("robot-choice").setAttribute("class", "fas fa-robot");
    document.getElementsByClassName("player-score").innerText = 0;
    document.getElementsByClassName("computer-score").innerText = 0;
}