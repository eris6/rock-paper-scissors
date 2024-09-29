let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomNum = Math.random() * 100;
    console.log(randomNum);

    return (randomNum >= 0  && randomNum < 34) ? "rock" : (randomNum > 67 ) ? "paper" : "scissors";
}

function getHumanChoice(){
    let choice = prompt("Enter rock, paper, or scissors");
    choice = choice.toLowerCase();

    if (choice == "rock"){
        return "rock";
    }
    else if (choice == "paper"){
        return "paper";
    }
    else if (choice == "scissors"){
        return "scissors";
    }
    else{
        return "invalid input!";
    }
}

function playRound(humanChoice, computerChoice){
    
    const choiceSet = new Set(['rock', 'paper', 'scissors']);

    if (humanChoice == computerChoice){
        console.log("Tie game! There is no winner or loser.");
    }
    else if(!choiceSet.has(humanChoice)){
        console.log("Invalid input!");
    }

    else{
        if ((humanChoice == "paper" && computerChoice == "rock") || 
        (humanChoice == "scissors" && computerChoice == "paper") || 
        (humanChoice == "rock" && computerChoice == "scissors")){
        humanScore += 1;

        humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
        computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        console.log("You win! " + humanChoice + " beats " + computerChoice + ".");   
    }
    else{
        humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
        computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

        computerScore += 1;
        console.log("You lose! " + computerChoice + " beats " + humanChoice + ".")
    }
    }

}

function playGame(){
    let numGames = 0;
    

    while (numGames < 5){
        
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();

        if (humanSelection == "invalid input!"){
            continue;
        }
        else{
            playRound(humanSelection, computerSelection);
            numGames++;
        }

        
    }
}







playGame();
