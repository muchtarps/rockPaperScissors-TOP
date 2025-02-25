function getComputerChoice(){
	let comp = Math.floor(Math.random()*3) + 1;

	if (comp === 1){
		return "rock";
	} else if (comp === 2) {
		return "paper";
	} else {
		return "scissor";
	}
}

function getHumanChoice() {
    const hChoice = prompt("Insert your choice (rock, paper or scissor)");
	const lowerChoice = hChoice.toLowerCase();
	return lowerChoice;
}


function playGame() {	
	let humanScore = 0;
	let computerScore = 0;

	function playRound(humanSelection, computerSelection) {
		if (humanSelection==="paper") {
			if (computerSelection==="paper"){
				return console.log("Match draw! Both choose paper");
			} else if (computerSelection==="rock") {
				console.log("You win! Paper beats Rock");
				return humanScore++;
			} else if (computerSelection==="scissor") {
				console.log("You lose! Scissor beats Paper");
				return computerScore++;
			} else {
				return "Input salah";
			}
		} else if (humanSelection==="rock") {
			if (computerSelection==="paper"){
				console.log("You lose! Paper beats Rock");
				return computerScore++;
			} else if (computerSelection==="rock") {
				return console.log("Match draw! Both choose Rock");
			} else if (computerSelection==="scissor") {
				console.log("You win! Rock beats Scissor");
				return humanScore++;
			} else {
				return "Input salah";
			}
		} else if (humanSelection==="scissor") {
			if (computerSelection==="paper"){
				console.log("You win! Scissor beats Paper");
				return humanScore++;
			} else if (computerSelection==="rock") {
				console.log("You lose! Rock beats Scissor");
				return computerScore++;
			} else if (computerSelection==="scissor") {
				return console.log("Match draw! Both choose Scissor");
			} else {
				return "Input salah";
			}
		}
	}

	for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(`Computer chose: ${computerChoice}`);
        (playRound(humanChoice, computerChoice));
		console.log(`Human: ${humanScore} Comp: ${computerScore}`);
    }
}

playGame();