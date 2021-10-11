var window;
var coinflip;
do {
    coinflip = Math.round(Math.random());
    if (coinflip === 0) {
        window.console.log("Heads");
    } 
    else {
        window.console.log("Tails...so game over");
    }
} while (!coinflip);