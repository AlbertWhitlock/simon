// DEFINE VARIABLES
var blueButton =   document.getElementById('blue');
var greenButton =  document.getElementById('green');
var redButton =    document.getElementById('red');
var yellowButton = document.getElementById('yellow');
var playGameButton = document.getElementById('playButton');
var submitButton = document.getElementById('submitButton');
var buttonArray = [greenButton, redButton, blueButton, yellowButton];
var currentRound = 1;
var numMoves = 0;
var solutionArray = [];
var responseArray = [];

// ADD ACTION LISTENERS
blueButton.addEventListener('click', buttonClicked);
redButton.addEventListener('click', buttonClicked);
greenButton.addEventListener('click', buttonClicked);
yellowButton.addEventListener('click', buttonClicked);
playGameButton.addEventListener('click', playGame);
submitButton.addEventListener('click', submitAnswer);



function buttonClicked(evt) {
    var source = evt.srcElement;
    if (source.id == "blue") {
        console.log("Blue button pressed");
        responseArray.push(source.id);
    }
    else if (source.id == "red") {
        console.log("Red button pressed");
        responseArray.push(source.id);
    }
    else if (source.id == "green") {
        console.log("Green button pressed");
        responseArray.push(source.id);
    }
    else if (source.id == "yellow") {
        console.log("Yellow button pressed");
        responseArray.push(source.id);
    }
}


function playGame(evt) {
    resetArrays();
    startGame(currentRound);
    printResults();
}

function resetArrays() {
    responseArray = [];
    solutionArray = [];
}

function submitAnswer(evt) {
    var numCorrectAnswers = 0;
    var numIncorrectAnswers = 0;
    for (index = 0; index < solutionArray.length; index++) {
        if (solutionArray[index] == responseArray[index]) {
            numCorrectAnswers++;
        }
        else {
            numIncorrectAnswers ++;
        }
    }

    if (numIncorrectAnswers > 0) {
        alert("LOSER!!!");
        currentRound = 1;
    }
    else {
        alert("WINNER!!!!!");
        currentRound++;
    }
}



function startGame(round) {
    console.log("Current round is: " + round);
    document.getElementById("roundNumber").innerHTML = round;
    numMoves = checkNumMoves(round);

    for (let i = 1; i <= numMoves; i++) {
        var arrayIndex = i - 1;
        var randomButton = buttonArray[Math.floor(Math.random()*buttonArray.length)];
        if (randomButton === redButton) {
            //blueButton.backgroundColor = 'white';
            solutionArray[arrayIndex] = 'red';
        }
        else if (randomButton == blueButton) {
            solutionArray[arrayIndex] = 'blue';
        }
        else if (randomButton == yellowButton) {
            solutionArray[arrayIndex] = 'yellow';
        }
        else if (randomButton == greenButton) {
            solutionArray[arrayIndex] = 'green';
        }
    }
}





function checkNumMoves(currentRound) {
    if (currentRound == 1)
        return 3;
    else if (currentRound == 2)
        return 4;
    else if (currentRound == 3)
        return 5;
    else if (currentRound == 4)
        return 6;
    else if (currentRound == 5)
        return 7;
    else if (currentRound == 6)
        youWin();
    
}

function youWin() {
    alert("YOU WIN!!!!!");
}


function printResults() {
    console.log("Solution array is " + solutionArray);
    console.log("Response array has " + responseArray.length + " elements");
    for (let j = 0; j < responseArray.length; j++) {
        console.log("Element " + j + " is " + responseArray[j]);
    }
}