const myButton=document.querySelectorAll("buttonCalc")
let storedValue = "";

    // Event listener for button click
    myButton.addEventListener("click", function () {
        // Get the value of the button
        const buttonValue = myButton.textContent;

        // Store the value
        storedValue += buttonValue; }

console.log("storedValue")