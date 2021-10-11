var window, document;

var number1 = parseInt(window.prompt("Enter the first number"), 10);
var number2 = parseInt(window.prompt("Enter the second number"), 10);

if (isNaN(number1) || isNaN(number2)) {
    document.write("Invalid inputs");
} 
else if (number1 === number2) {
    document.write("Both numbers are equal");
} 
else {
    var largerNumber = number1 > number2 ? number1 : number2;
    document.write("The larger number is " + largerNumber);
}