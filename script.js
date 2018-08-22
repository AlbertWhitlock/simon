// DEFINE VARIABLES
var blueButton = document.getElementById("blue");
var greenButton = document.getElementById("green");
var redButton = document.getElementById("red");
var yellowButton = document.getElementById("yellow");
var playGameButton = document.getElementById("playButton");
var submitButton = document.getElementById("submitButton");
var buttonArray = [greenButton, redButton, blueButton, yellowButton];
var currentRound = 1;
var numMoves = 0;
var solutionArray = [];
var responseArray = [];

// ADD ACTION LISTENERS
blueButton.addEventListener("click", colorButtonClicked);
redButton.addEventListener("click", colorButtonClicked);
greenButton.addEventListener("click", colorButtonClicked);
yellowButton.addEventListener("click", colorButtonClicked);
playGameButton.addEventListener("click", playGame);
submitButton.addEventListener("click", submitAnswer);

//Captures user clicks, adds them to an array and prints to console for debugging
function colorButtonClicked(evt) {
  var source = evt.srcElement;
  if (source.id == "blue") {
    console.log("Blue button pressed");
    responseArray.push(source.id);
  } else if (source.id == "red") {
    console.log("Red button pressed");
    responseArray.push(source.id);
  } else if (source.id == "green") {
    console.log("Green button pressed");
    responseArray.push(source.id);
  } else if (source.id == "yellow") {
    console.log("Yellow button pressed");
    responseArray.push(source.id);
  }
}

//Will start the game, get random buttons, and call the method to make them blink
function startGame(round) {
  console.log("***********************Current round is: " + round);
  document.getElementById("roundNumber").innerHTML = round;
  numMoves = checkNumMoves(round);
  var timeoutTime = 0;
  var timeoutTimeDim = 0;

  for (let i = 1; i <= numMoves; i++) {
    var arrayIndex = i - 1;
    timeoutTime = timeoutTime + 700;
    timeoutTimeDim = timeoutTime + 300;
    var randomButton =
      buttonArray[Math.floor(Math.random() * buttonArray.length)];

    if (randomButton == redButton) {
      solutionArray[arrayIndex] = "red";
      lightUpButton("red", timeoutTime);
      dimDownButton("red", timeoutTimeDim);
    } else if (randomButton == blueButton) {
      solutionArray[arrayIndex] = "blue";
      lightUpButton("blue", timeoutTime);
      dimDownButton("blue", timeoutTimeDim);
    } else if (randomButton == yellowButton) {
      solutionArray[arrayIndex] = "yellow";
      lightUpButton("yellow", timeoutTime);
      dimDownButton("yellow", timeoutTimeDim);
    } else if (randomButton == greenButton) {
      solutionArray[arrayIndex] = "green";
      lightUpButton("green", timeoutTime);
      dimDownButton("green", timeoutTimeDim);
    }
  }
}

function lightUpButton(button, time) {
  if (button == "red") {
    setTimeout(() => {
      document.getElementById(button).style.background = "rgba(255,0,0,.7)";
    }, time);
  } else if (button == "blue") {
    setTimeout(() => {
      document.getElementById(button).style.background = "rgba(0,0,255,.7)";
    }, time);
  } else if (button == "yellow") {
    setTimeout(() => {
      document.getElementById(button).style.background = "rgba(255,255,0,.7)";
    }, time);
  } else if (button == "green") {
    setTimeout(() => {
      document.getElementById(button).style.background = "rgba(0,255,0,.7)";
    }, time);
  }
}

function dimDownButton(button, time) {
  if (button == "red") {
    setTimeout(() => {
      document.getElementById(button).style.background = "rgba(255,0,0,.2)";
    }, time);
  } else if (button == "blue") {
    setTimeout(() => {
      document.getElementById(button).style.background = "rgba(0,0,255,.2)";
    }, time);
  } else if (button == "yellow") {
    setTimeout(() => {
      document.getElementById(button).style.background = "rgba(255,255,0,.2)";
    }, time);
  } else if (button == "green") {
    setTimeout(() => {
      document.getElementById(button).style.background = "rgba(0,255,0,.2)";
    }, time);
  }
}

//When user submits their answer this will see if they are correct and alert them the result
function submitAnswer(evt) {
  var numCorrectAnswers = 0;
  var numIncorrectAnswers = 0;

  if (solutionArray.length > 0) {
    // Ensure user hits "Play Game" button before submitting answer
    for (index = 0; index < solutionArray.length; index++) {
      if (solutionArray[index] == responseArray[index]) numCorrectAnswers++;
      else numIncorrectAnswers++;
    }
    // See if all answers were correct and notify the player
    if (numIncorrectAnswers > 0) {
      alert(
        "Sorry. That was incorrect.\n You missed on round " +
          currentRound +
          '. \nWe will start from round 1 again.\nPlease press "Play Game" button to play again.'
      );
      currentRound = 1;
    } else {
      if (currentRound == 5) {
        alert("5 wins in a row!! You are a MASTER!!!!!");
        currentRound = 1;
      } else {
        alert(
          "WINNER in round " +
            currentRound +
            '.\nPlease press "Play Game" button to play again.'
        );
        currentRound++;
      }
    }
  } //NO answers available
  else alert("You must first play a game");
}

//Takes what round we are in and returns number of moves
function checkNumMoves(currentRound) {
  if (currentRound == 1) return 3;
  else if (currentRound == 2) return 4;
  else if (currentRound == 3) return 5;
  else if (currentRound == 4) return 6;
  else if (currentRound == 5) return 7;
}

// Debug to the console
function printResults() {
  console.log("Solution array is " + solutionArray);
}

//Clear the arrays between games
function resetArrays() {
  responseArray = [];
  solutionArray = [];
}

//'Main' function. Will call other functions to get things going
function playGame(evt) {
  resetArrays();
  startGame(currentRound);
  printResults();
}
