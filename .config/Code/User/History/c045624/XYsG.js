function getComputerChoice() {
    // create array 'choices' and assign the three rock, paper, scissor choices
    const choices = ["rock","paper","scissor"];

    // use javascript math function with floor function to return an integer between 0 and 2
    // this integer will be used to select a random choice from the choices array
    let choice = Math.floor(Math.random() * 3);

    // return the random choice
    return choices[choice];
}

function getPlayerChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    
}

function playRound() {

}

console.log(getComputerChoice());
getPlayerChoice();