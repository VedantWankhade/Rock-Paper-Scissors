const main = document.querySelector("main");
main.classList.add("hidden");

const startButton = document.querySelector(".start-button");
startButton.addEventListener("click", function(event) {
    if (event.target !== startButton) {
    startButton.classList.add("hidden");
    main.classList.remove("hidden");
    }
})

function computerPlay() {
    
    const choice = Math.floor(Math.random() * 3);   // gnerate random number between 0 to 2
    
    if (choice === 0) return 'rock';
    else if (choice === 1) return 'paper';
    else return 'scissor';
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {

        return 0;

    } else if ((playerSelection === 'rock' && computerSelection === 'scissor') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissor' && computerSelection === 'paper')) {
        
        return 1;

    } else {

        return -1;
    }
}

function displayResult() {

    if (playerTotalScore > computerTotalScore) result.innerText = "You win!!";

    else if (playerTotalScore < computerTotalScore) result.innerText ="You lose!!";
    alert("Thanks for playing!");
}

let playerTotalScore = 0;
let computerTotalScore = 0;

function play() {

    let res = playRound(playerSelection.innerText, computerSelection.innerText);
    if (res === 1) {
        result.innerText = `${playerSelection.innerText} beats ${computerSelection.innerText}`;
       playerTotalScore++; 
       playerScore.innerText = playerTotalScore;
    } else if (res === -1) {
        result.innerText = `${computerSelection.innerText} beats ${playerSelection.innerText}`;
        computerTotalScore++;
        computerScore.innerText = computerTotalScore;
    } else {
        result.innerText = "It's a tie";  
    }
}

const computerScore = document.querySelector(".computerScore");

const computerSelection = document.querySelector(".computerSelection");

const result = document.querySelector(".result");
result.innerText = "NO cheating";

const playerSelection = document.querySelector(".playerSelection");

const playerScore = document.querySelector('.playerScore');

let n = 0;

const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", function(event) {
    if (event.target !== buttons) {
        playerSelection.innerText = event.target.innerText.toLowerCase();      

        computerSelection.innerText = computerPlay();

        if (n >= 5) {
            displayResult();
            result.innerText = "The game will reset"
            reset();
        } else {
            play();
        }
        n++;
    }
});

function reset() {
    computerScore.innerText = 0;
    playerScore.innerText = 0;
    result.innerText = "No cheating";
    playerTotalScore = 0;
    computerTotalScore = 0;
    playerSelection.innerText = "";
    computerSelection.innerText = "";
    n = 0;
    main.classList.add("hidden");
    startButton.classList.remove("hidden");
}