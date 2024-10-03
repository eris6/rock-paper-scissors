let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomNum = Math.random() * 100;
    return (randomNum >= 0  && randomNum < 34) ? "rock" : (randomNum > 67 ) ? "paper" : "scissors";
}

function playRound(humanChoice, computerChoice){

    const result = document.querySelector(".result");
    const humandisplay = document.querySelector(".humanscore");
    const computerdisplay = document.querySelector(".computerscore");

    if (humanChoice == computerChoice){
        result.innerHTML = "Tie game! There is no winner or loser.";
        humandisplay.innerHTML = "You  " + humanScore;
        computerdisplay.innerHTML = "Computer " + computerScore;
    }
    
    else{
        if ((humanChoice == "paper" && computerChoice == "rock") || 
        (humanChoice == "scissors" && computerChoice == "paper") || 
        (humanChoice == "rock" && computerChoice == "scissors")){
        humanScore += 1;

        humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
        computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        result.innerHTML = "You win! " + humanChoice + " beats " + computerChoice.toLowerCase() + ".";
        humandisplay.innerHTML = "You " + humanScore;
        computerdisplay.innerHTML = "Computer " + computerScore;
    }
    else{
        humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
        computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

        computerScore += 1;
        result.innerHTML = "You lose! " + computerChoice + " beats " + humanChoice.toLowerCase()  + ".";
        humandisplay.innerHTML = "You " + humanScore;
        computerdisplay.innerHTML = "Computer " + computerScore;
    }
    }
}

window.onload = function(){ 

    const playerbuttons = document.querySelector(".playerbuttons");
    const result = document.querySelector(".result");
    const reload = document.querySelector(".reload");
    const humandisplay = document.querySelector(".humanscore");
    const computerdisplay = document.querySelector(".computerscore");
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");

    playerbuttons.addEventListener('click', (event)=>{
        let target = event.target;
        let computerSelection = getComputerChoice();


        reload.addEventListener('click', ()=>{
            result.innerHTML = "Choose, choose, choose";
            humanScore = 0;
            computerScore = 0;
            humandisplay.innerHTML = "You 0";
            computerdisplay.innerHTML = "Computer 0";
            removeBorder();
    
        })

        let delayInMilliseconds = 300;

        switch(target.id){
            case 'rock':
                removeBorder();
                playRound("rock", computerSelection);
                rock.style.border = "5px solid #77DD77"
                setTimeout(() => addBorder(computerSelection), delayInMilliseconds);
                break;
            case 'paper':
                removeBorder();
                playRound("paper", computerSelection);
                paper.style.border = "5px solid #77DD77"
                setTimeout(() => addBorder(computerSelection), delayInMilliseconds);
                break;
            case 'scissors':
                removeBorder();
                playRound("scissors", computerSelection);
                scissors.style.border = "5px solid #77DD77"
                setTimeout(() => addBorder(computerSelection), delayInMilliseconds);
                break;
        }

    })
};

function addBorder(computerChoice){
        const rock = document.getElementById("rock");
        const paper = document.getElementById("paper");
        const scissors = document.getElementById("scissors");
    
        if (computerChoice === "rock"){
            rock.style.border = "5px solid black";
        }
        if (computerChoice === "paper"){
            paper.style.border = "5px solid black";
        }
        if (computerChoice === "scissors"){
            scissors.style.border = "5px solid black";
        }   
}

function removeBorder(){
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");
    rock.style.border = "5px solid white";
    paper.style.border = "5px solid white";
    scissors.style.border = "5px solid white";
}



