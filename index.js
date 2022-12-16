const equation = () => {
    var a = prompt("Enter first number");
    var b = prompt("Enter second number");
    var x = -b / a;
    alert(`The value of x is ${x}`);
}


const hypotenuse = () => {
    var opposite = prompt("Enter the length of opposite side ")
    var adjacent = prompt("Enter the length of adjacent side ")
    var hypotenuseLength = Math.round(Math.sqrt(Math.pow(opposite, 2) + Math.pow(adjacent, 2)))
    var height = Math.round(Math.sqrt(Math.pow(hypotenuseLength, 2) - Math.pow(adjacent, 2)))
    alert(`The length of hypotenuse is approximately ${hypotenuseLength} and the length of height is approximately ${height}`);
}