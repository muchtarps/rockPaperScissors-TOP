/*
Step 2: Write the logic to get the computer choice
- Create a new function named getComputerChoice.
- Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
- Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.
*/

function getComputerChoice(){
	let comp = Math.floor(Math.random()*3) + 1;
	console.log(comp); // 1,2,3

	if (comp === 1){
		//1
		console.log("Rock")
	} else if (comp === 2) {
		//2
		console.log("Paper")
	} else {
		//3
		console.log("Scissor")
	}
}




/*
Step 3: Write the logic to get the human choice
- Create a new function named getHumanChoice.
- Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
- Hint: Use the prompt method to get the user’s input. Test what your function returns by using console.log.

user masukan angka 1,2,3. prompt
jika 1 Rock, 2 Paper, 3 Scissors. return


*/

//1 Rock
//2 Paper
//3 Scissors
function getHumanChoice() {
    const hChoice = prompt("Choose 1, 2 or 3");

    if (hChoice === 1){
		//1
		console.log("Rock")
	} else if (hChoice === 2) {
		//2
		console.log("Paper")
	} else {
		//3
		console.log("Scissor")
	}
}




/*
Step 4: Declare the players score variables
- Create two new variables named humanScore and computerScore in the global scope.
- Initialize those variables with the value of 0.
*/

let humanScore = 0;
let computerScore = 0;




/*
Step 5: Write the logic to play a single round
Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.
- Create a new function named playRound.
- Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
- Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
- Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
- Increment the humanScore or computerScore variable based on the round winner.

Example code:
function playRound(humanChoice, computerChoice) {
  // your code here!
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
*/




/*
Step 6: Write the logic to play the entire game
Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.
- Create a new function named playGame.
- Move your playRound function and score variables so that they’re declared inside of the new playGame function
- Play 5 rounds by calling playRound 5 times.
- Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
- Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
- If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.
*/
getComputerChoice();
getHumanChoice();