function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const compRandom = Math.floor(Math.random() * choices.length);
    return choices[compRandom]
};



    function updateScore() {
        const score = document.querySelector('.score');
        score.textContent = `Player: ${PlayerScore} - Computer: ${CompScore}`
    }

    function winMessage (playerSelection, computerSelection) {
        const win = document.querySelector('.win');
        win.textContent = `You win! You chose ${playerSelection} which beats the Computer's choice of ${computerSelection}`;

        setTimeout(() => {
            win.style.color ="black";
        }, 10);

        setTimeout(() => {
            win.style.color ="pink";
        }, 4000);
    };

    function loseMessage (playerSelection, computerSelection) {
        const lose = document.querySelector('.lose');
        lose.textContent = `You lose, the Computer chose ${computerSelection} which beats your choice of ${playerSelection}`;

        setTimeout(() => {
            lose.style.color ="black";
        }, 10);

        setTimeout(() => {
            lose.style.color ="pink";
        }, 4000);
    };

    function tieMessage(playerSelection) {
        const tie = document.querySelector('.tie');
        tie.textContent = `It's a tie, you both put ${playerSelection}`;

        setTimeout(() => {
            tie.style.color ="black";
        }, 10);

        setTimeout(() => {
            tie.style.color ="pink";
        }, 4000);
    };


    function WinnerMessage() {
        const winner = document.querySelector('.winner');
        winner.textContent = `You're the winner, congratulations! Hit that Retry button to play again`;
        winner.style.color = "red";
    };

    function loserMessage() {
        const loser = document.querySelector('.loser');
        loser.textContent = `You Lost, hit that Retry button to give it another shot`;
        loser.style.color = "red";
    }

    
    let CompScore = 0;
    let PlayerScore = 0;
    let winner;

    function playRound(playerSelection, computerSelection) {
if (computerSelection === playerSelection ) {
    tieMessage(playerSelection);
} else if (
    (playerSelection === 'Rock' && computerSelection === 'Paper') ||
    (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
    (playerSelection === 'Scissors' && computerSelection === 'Rock')
){
    CompScore++;
    loseMessage(playerSelection, computerSelection);
} else {
    PlayerScore++;
    winMessage(playerSelection, computerSelection);
}
    }

    
    const Rock = document.querySelector('.rock');
    const Paper = document.querySelector('.paper');
    const Scissors = document.querySelector('.scissors');
    
    Rock.addEventListener('click', ()  => {
        if (CompScore < 3 && PlayerScore < 3){
    const computerChoice = getComputerChoice();
    playRound('Rock', computerChoice);
    updateScore();
    checkForWinner();
        } 
    });
    
    Paper.addEventListener('click', ()  => {
        if (CompScore < 3 && PlayerScore < 3){
    const computerChoice = getComputerChoice();
    playRound('Paper', computerChoice);
    updateScore();
    checkForWinner();
        } 
    });
    
    Scissors.addEventListener('click', ()  => {
        if (CompScore < 3 && PlayerScore < 3){
    const computerChoice = getComputerChoice();
    playRound('Scissors', computerChoice);
    updateScore();
    checkForWinner();
        } 
    });

function checkForWinner () {
    if (PlayerScore === 3) {
        WinnerMessage();
    } else if (CompScore === 3) {
        loserMessage();
    }
}





