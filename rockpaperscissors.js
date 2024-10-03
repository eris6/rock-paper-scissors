let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomNum = Math.random() * 100;
    return (randomNum >= 0  && randomNum < 34) ? "rock" : (randomNum > 67 ) ? "paper" : "scissors";
}

// function getHumanChoice(){
//     let choice = prompt("Enter rock, paper, or scissors");
//     choice = choice.toLowerCase();

//     if (choice == "rock"){
//         return "rock";
//     }
//     else if (choice == "paper"){
//         return "paper";
//     }
//     else if (choice == "scissors"){
//         return "scissors";
//     }
//     else{
//         return "invalid input!";
//     }
// }

function playRound(humanChoice, computerChoice){

    const result = document.querySelector(".result");
    const humandisplay = document.querySelector(".humanscore");
    const computerdisplay = document.querySelector(".computerscore");

    if (humanChoice == computerChoice){
        console.log("Tie game! There is no winner or loser.");
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
        console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
        console.log(humanScore);
        console.log(computerScore);
        result.innerHTML = "You win! " + humanChoice + " beats " + computerChoice.toLowerCase() + ".";
        humandisplay.innerHTML = "You " + humanScore;
        computerdisplay.innerHTML = "Computer " + computerScore;
    }
    else{
        humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
        computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

        computerScore += 1;
        console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
        console.log(humanScore);
        console.log(computerScore);
        result.innerHTML = "You lose! " + computerChoice + " beats " + humanChoice.toLowerCase()  + ".";
        humandisplay.innerHTML = "You " + humanScore;
        computerdisplay.innerHTML = "Computer " + computerScore;
    }
    }
}

function playGame(){
    let numGames = 0;

    while (numGames < 5){

        playRound(humanSelection, computerSelection);
        
        if (humanSelection == "invalid input!"){
            continue;
        }
        else{
            playRound(humanSelection, computerSelection);
            numGames++;
        }

        
    }
}




window.onload = function(){ 

    const playerbuttons = document.querySelector(".playerbuttons");
    playerbuttons.addEventListener('click', (event)=>{
        let target = event.target;
        let computerSelection = getComputerChoice();

        switch(target.id){
            case 'rock':
                playRound("rock", computerSelection);
                break;
            case 'paper':
                playRound("paper", computerSelection);
                break;
            case 'scissors':
                playRound("scissors", computerSelection);
                break;
        }

    })

};


playGame();