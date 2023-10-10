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
        win.textContent = `You win! ${playerSelection} beats ${computerSelection}`;

        setTimeout(() => {
            win.style.color ="black";
        }, 10);

        setTimeout(() => {
            win.style.color ="white";
        }, 1000);
    };

    function loseMessage (playerSelection, computerSelection) {
        const lose = document.querySelector('.lose');
        lose.textContent = `You lose, ${computerSelection} beats ${playerSelection}`;

        setTimeout(() => {
            lose.style.color ="black";
        }, 10);

        setTimeout(() => {
            lose.style.color ="white";
        }, 1000);
    };

    function tieMessage(playerSelection) {
        const tie = document.querySelector('.tie');
        tie.textContent = `It's a tie, you both put ${playerSelection}`;

        setTimeout(() => {
            tie.style.color ="black";
        }, 10);

        setTimeout(() => {
            tie.style.color ="white";
        }, 1000);
    };


    function WinnerMessage(playerSelection) {
        const winner = document.querySelector('.winner');
        tie.textContent = `You're the winner congratulations! Reload the page to play again`;

        setTimeout(() => {
            tie.style.color ="black";
        }, 10);

    };

    
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
    const result = playRound('Rock', computerChoice);
    console.log(result);
    updateScore();
        }
    });
    
    Paper.addEventListener('click', ()  => {
        if (CompScore < 3 && PlayerScore < 3){
    const computerChoice = getComputerChoice();
    const result = playRound('Paper', computerChoice);
    console.log(result);
    updateScore();
        }
    });
    
    Scissors.addEventListener('click', ()  => {
        if (CompScore < 3 && PlayerScore < 3){
    const computerChoice = getComputerChoice();
    const result = playRound('Scissors', computerChoice);
    console.log(result);
    updateScore();
        } else if  (CompScore > PlayerScore) {

        }
    });







