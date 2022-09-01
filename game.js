function getComputerChoice() {
    const array = ["rock", "paper", "scissors"];
    const randomElement = array[Math.floor(Math.random() * array.length)];

    return randomElement;
}

function playRound(playerSelection, computerSelection) {
    let result = 0; // 0 = player lose, 1 = draw, 2 = player wins

    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection.toLowerCase() == "rock") {
            result = 1;
        }
        else if (computerSelection.toLowerCase() == "paper") {
            result = 0;
        }
        else if (computerSelection.toLowerCase() == "scissors") {
            result = 2;
        }
    }
    else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection.toLowerCase() == "rock") {
            result = 2;
        }
        else if (computerSelection.toLowerCase() == "paper") {
            result = 1;
        }
        else if (computerSelection.toLowerCase() == "scissors") {
            result = 0;
        }
    }
    else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection.toLowerCase() == "rock") {
            result = 0;
        }
        else if (computerSelection.toLowerCase() == "paper") {
            result = 2;
        }
        else if (computerSelection.toLowerCase() == "scissors") {
            result = 1;
        }
    }

    if (result == 0) {
        console.log("You Lose! " + computerSelection + " beats " + playerSelection);
    }
    else if (result == 1) {
        console.log("Draw! " + computerSelection + " same as " + playerSelection);
    }
    else if (result == 2) {
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
    }
    return result;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt("Rock, paper, scissors");
        const computerChoice = getComputerChoice();
        const result = playRound(playerChoice, computerChoice)
        switch (result) {
            case 0: {
                console.log("add 1 to computer")
                computerScore++;
                break;
            }
            case 2: {
                console.log("add 1 to player")
                playerScore++;
                break;
            }
            default: {
                console.log("dont do anything")
            }
        }
    }
    console.log(playerScore + " " + computerScore);
}

game();