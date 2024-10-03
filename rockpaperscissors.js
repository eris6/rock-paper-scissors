let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomNum = Math.random() * 100;
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

// function playGame(){
//     let numGames = 0;
    

//     while (numGames < 5){
        
//         let computerSelection = getComputerChoice();
//         let humanSelection = getHumanChoice();

//         if (humanSelection == "invalid input!"){
//             continue;
//         }
//         else{
//             playRound(humanSelection, computerSelection);
//             numGames++;
//         }

        
//     }
// }


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

    //good functions!
    // const rock = document.querySelector("#rock");
    // rock.addEventListener("click", () => {
    // let computerSelection = getComputerChoice();
    // playRound("rock", computerSelection);
    // });

    // const paper = document.querySelector("#paper");
    // paper.addEventListener("click", ()=>{
    //     let computerSelection = getComputerChoice();
    //     playRound("paper", computerSelection);
    // })

    // const scissors = document.querySelector("#scissors");
    // scissors.addEventListener("click", ()=>{
    //     let computerSelection = getComputerChoice();
    //     playRound("scissors", computerSelection);
    // })

};
