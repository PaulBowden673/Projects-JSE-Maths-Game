// The main game "loop", called when the script is first loaded
// and after the user's answer has been processed

//Wait until the Dom has finished loading to run the game
//Get button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit")
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

function runGame() {

    //Generate teo random numbers between 1 and 25

   let num1 =  Math.floor(Math.random() * 25) + 1;
   let num2 =  Math.floor(Math.random() * 25) + 1;

}

// Called when the user clicks the Submit button or presses Enter

function checkAnswer() {

}

function calculateRightAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

// Displays the questions.

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}