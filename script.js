// DEFINE VARIABLES
var blueButton = document.getElementById('blue');
var greenButton = document.getElementById('green');
var redButton = document.getElementById('red');
var yellowButton = document.getElementById('yellow');
var playGameButton = document.getElementById('playButton');
var submitButton = document.getElementById('submitButton');
var buttonArray = [greenButton, redButton, blueButton, yellowButton];
var currentRound = 1;
var numMoves = 0;
var solutionArray = [];
var responseArray = [];


// ADD ACTION LISTENERS
blueButton.addEventListener('click', colorButtonClicked);
redButton.addEventListener('click', colorButtonClicked);
greenButton.addEventListener('click', colorButtonClicked);
yellowButton.addEventListener('click', colorButtonClicked);
playGameButton.addEventListener('click', playGame);
submitButton.addEventListener('click', submitAnswer);



function colorButtonClicked(evt) {
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

    if (solutionArray.length > 0) { // Ensure user hits "Play Game" button before submitting answer
        for (index = 0; index < solutionArray.length; index++) {
            if (solutionArray[index] == responseArray[index])
                numCorrectAnswers++;
            else
                numIncorrectAnswers ++;
        }
        // See if all answers were correct and notify the player
        if (numIncorrectAnswers > 0) {
            alert("Sorry. That was incorrect. You missed on round " + currentRound + ". We will start from round 1 again.");
            currentRound = 1;
        }
        else {
            if (currentRound == 5) {
                alert("5 wins in a row!! You are a MASTER!!!!!");
                currentRound = 1;
            }
            else {
                alert("WINNER in round " + currentRound);
                currentRound++;
            }
        }
    }
    else //NO answers available
        alert("You must first play a game");
}



function startGame(round) {
    console.log("***********************Current round is: " + round);
    document.getElementById('roundNumber').innerHTML = round;
    numMoves = checkNumMoves(round);

    for (let i = 1; i <= numMoves; i++) {
        var arrayIndex = i - 1;
        var randomButton = buttonArray[Math.floor(Math.random()*buttonArray.length)];
        if (randomButton === redButton) {
            blueButton.backgroundColor = 'white';
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
}


function printResults() {
    console.log("Solution array is " + solutionArray);
}