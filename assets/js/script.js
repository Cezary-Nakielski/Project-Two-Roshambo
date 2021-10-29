
const buttons = document.getElementsByClassName("choice-button");

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



function rockData() {
    choiceResultData = "fas fa-hand-rock";
}

function paperData() {
    choiceResultData = "fas fa-hand-rock";
}

function scissorsData() {
    choiceResultData = "fas fa-hand-scissors";
}






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

function resetGame() {
    document.getElementById("robot-choice").setAttribute("class", "fas fa-robot");
    document.getElementsByClassName("player-score").innerText = 0;
    document.getElementsByClassName("computer-score").innerText = 0;
}

function win() {
    let playerScore = parseInt(document.getElementsByClassName("player-score").innerText);
    playerScore++;
    document.getElementsByClassName("player-score").innerText = playerScore;
    setTimeout(function(){ swal({
        title: "Win",
        icon: "success",
        button: false,
        timer: 1500,
      }); }, 100);
}


function defeat() {
    let computerScore = parseInt(document.getElementsByClassName("computer-score").innerText);
    computerScore++;
    document.getElementsByClassName("computer-score").innerText = computerScore;
    setTimeout(function(){ swal({
        title: "Defeat",
        icon: "error",
        button: false,
        timer: 1500,
      }); }, 100);
}



function draw() {
    setTimeout(function(){ swal({
        title: "Draw",
        icon: "info",
        button: false,
        timer: 1500,
      }); }, 100);
}