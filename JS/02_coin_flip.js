var window;

var choice = window.prompt("Heads or Tails?");
var coinFlip = Math.floor(Math.random() * 10);
var result = (coinFlip >= 5) ? "H" : "T";

if (result === "H" && choice === "Heads") {
    window.alert("The flip was heads and you chose heads...you win!");
} 
else if (result === "H" && choice === "Tails") {
    window.alert("The flip was heads but you chose tails...you lose!");
} 
else if (result === "T" && choice === "Tails") {
    window.alert("The flip was tails and you chose tails...you win!");
} 
else if (result === "T" && choice === "Heads") {
    window.alert("The flip was tails but you chose heads...you lose!");
} 
else {
    window.alert("Please enter a valid choice!");
}