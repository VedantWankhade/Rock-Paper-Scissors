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

function game(n = 5) {

    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= n; round++) {
      
        let playerSelection = '';

        playerSelection = window.prompt("Choose rock, paper or scissor");
        if (playerSelection != null)
            playerSelection = playerSelection.toLowerCase();

        while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissor") {

            playerSelection = window.prompt("Wrong input, please try again");
            if (playerSelection != null)
            playerSelection = playerSelection.toLowerCase();
        }

        let computerSelection = computerPlay();

        console.log(playerSelection, computerSelection);
        let res = playRound(playerSelection, computerSelection);
        if (res === 1) {
            
            playerScore++;
            console.log(`You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`);

        } else if (res === -1) {

            computerScore++;
            console.log(`You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`);

        } else {

            console.log("It's a tie");
        }    
    }

    if (playerScore > computerScore) {

        console.log("Congradulations you are the winner:D");

    } else if (playerScore < computerScore) {

        console.log("Sorry you lose:/");

    } else {

        console.log("Stalemate :O");
    }
}

game(3);