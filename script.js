// Used tags variables
var css = document.querySelector("H3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var buttonGenerator = document.querySelector("button");

// Function to set the gradient based on de inputs
function setGradient() {
    document.body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = document.body.style.background + ";"
}

// Check if the RGB converted to hexadecimal has two digits to attend to the html standards
function hex2Digits(hex) {
    if (hex.length < 2) {
        return "0" + hex
    } else {
        return hex
    }
}

// Make a random gradient
function randomGradient() {
    var hex1 = "#" + hex2Digits((Math.floor(Math.random() * 255)).toString(16)) + hex2Digits((Math.floor(Math.random() * 255)).toString(16)) + hex2Digits((Math.floor(Math.random() * 255)).toString(16));
    var hex2 = "#" + hex2Digits((Math.floor(Math.random() * 255)).toString(16)) + hex2Digits((Math.floor(Math.random() * 255)).toString(16)) + hex2Digits((Math.floor(Math.random() * 255)).toString(16));
    document.body.style.background = "linear-gradient(to right, " + hex1 + ", " + hex2 + ")";
    css.textContent = document.body.style.background + ";"
    color1.value = hex1;
    color2.value = hex2;
}

// Set the gradient when the page loads
setGradient();

// addding click listener to the button
buttonGenerator.addEventListener("click", randomGradient);

// adding a listener that calls the function whenever the input value changes
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);