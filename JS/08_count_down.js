var window;

var number = parseInt(window.prompt("Enter a number to count down from"), 10);

if (!isNaN(number)) {
    var count = number;
    var timer = setInterval(countdown, 1000);

    function countdown() {
        if (count === 0) {
            clearInterval(timer);
        }
        window.document.write(count + "<br>");
        count--;
    }
}