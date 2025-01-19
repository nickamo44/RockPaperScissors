function getComputerChoice() {
    let x = Math.floor(Math.random() * 100);
    if (x <= 33) {
        return choice = "rock";
    }
    else if (x > 33 && x <=66) {
        return choice = "paper";
    }
    else {
        return choice = "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

let rockBtn = document.querySelector('#rockBtn');
let paperBtn = document.querySelector('#paperBtn');
let scissorsBtn = document.querySelector('#scissorsBtn');
let playerSelection = "";

rockBtn.addEventListener('click', () =>{
    playerSelection = "rock";
    playRound(playerSelection);
});
paperBtn.addEventListener('click', () =>{
    playerSelection = "paper";
    playRound(playerSelection);
});
scissorsBtn.addEventListener('click', () =>{
    playerSelection = "scissors";
    playRound(playerSelection);
});

function checkScore(){
    if (humanScore == 5){
        container.appendChild(document.createElement('div')).innerText = "YOU WIN THE GAME";
    }
    else if (computerScore == 5){
        container.appendChild(document.createElement('div')).innerText = "COMPUTER WINS THE GAME";
    }
}

const newDiv = document.createElement('div');

function playRound(playerSelection) {
    let computerChoice = getComputerChoice();
    if (playerSelection === "rock" && computerChoice === "paper") {
        computerScore++;
        result = "Computer wins: paper beats rock. ";
        newDiv.innerHTML = result + "<br> Computer score = " + computerScore + " Human Score = " + humanScore;
        container.appendChild(newDiv);
        checkScore();
    }
    else if (playerSelection === "scissors" && computerChoice === "paper") {
        humanScore++;
        result = "You win: scissors beats paper.";
        newDiv.innerHTML = result + "<br> Computer score = " + computerScore + " Human Score = " + humanScore;
        container.appendChild(newDiv);
        checkScore();
    }
    else if (playerSelection === "paper" && computerChoice === "rock") {
        humanScore++;
        result = "You win: paper beats rock.";
        newDiv.innerHTML = result + "<br> Computer score = " + computerScore + " Human Score = " + humanScore;
        container.appendChild(newDiv);
        checkScore();
    }
    else if (playerSelection === "scissors" && computerChoice === "rock") {
        computerScore++;
        result = "Computer wins: rock beats scissors.";
        newDiv.innerHTML = result + "<br> Computer score = " + computerScore + " Human Score = " + humanScore;
        container.appendChild(newDiv);
        checkScore();
    }
    else if (playerSelection === "paper" && computerChoice === "scissors") {
        computerScore++;
        result = "Computer wins: scissors beats rock.";
        newDiv.innerHTML = result + "<br> Computer score = " + computerScore + " Human Score = " + humanScore;
        container.appendChild(newDiv);
        checkScore();
    }
    else if (playerSelection === "rock" && computerChoice === "scissors") {
        humanScore++;
        result = "You win: rock beats scissors.";
        newDiv.innerHTML = result + "<br> Computer score = " + computerScore + " Human Score = " + humanScore;
        container.appendChild(newDiv);
        checkScore();
    }
    else {
        result = "No one wins: you and the computer chose the same item.";
        newDiv.innerHTML = result + "<br> Computer score = " + computerScore + " Human Score = " + humanScore;
        container.appendChild(newDiv);
        checkScore();
    }
}

const container = document.createElement("div");
document.body.appendChild(container);
container.appendChild(document.createElement('div')).innerText ="";