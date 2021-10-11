var coinflip;

for (var i = 0; i < 10; i++) {
    coinflip = Math.round(Math.random());
    if(coinflip === 0)
        window.console.log("Heads");
    else
        window.console.log("Tails");
}

document.write("Check out console window");