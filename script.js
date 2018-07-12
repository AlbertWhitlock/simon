
var greenButton = document.getElementsByClassName('green');
var redButton = document.getElementsByClassName('red');
// var blueButton = document.getElementsByClassName('blue');
var blueButton = document.getElementById('blue');
var yellowButton = document.getElementsByClassName('yellow');
var playGameButton = document.getElementById('#playButton');
var currentRound = 1;
var numMoves = 0;
var buttonArray = [greenButton, redButton, blueButton, yellowButton];
var answerArray = [];


blueButton.addEventListener('click', blueButtonClicked);

function blueButtonClicked() {
    console.log("Blue button pressed");
}
// TODO:  playGameButton.addEventListener('click', handlePlayGameEvent);

function handlePlayGameEvent(evt) {
    console.log("Button was pressed!!");
}

function go(round) {
    numMoves = checkNumMoves(round);

    for (let i = 1; i <= numMoves; i++) {
        var arrayIndex = i - 1;
        var randomButton = buttonArray[Math.floor(Math.random()*buttonArray.length)];
        if (randomButton === redButton) {
            console.log("Button chosen was red");
            //blueButton.backgroundColor = 'white';
            answerArray[arrayIndex] = 'red';
        }
        else if (randomButton == blueButton) {
            console.log("Button chosen was blue");
            answerArray[arrayIndex] = 'blue';
        }
        else if (randomButton == yellowButton) {
            console.log("Button chosen was yellow");
            answerArray[arrayIndex] = 'yellow';
        }
        else if (randomButton == greenButton) {
            console.log("Button chosen was green");
            answerArray[arrayIndex] = 'green';
        }

        //console.log('Random color ' + i + ' is: ' + randomButton);
   //     answerArray.push(randomButton);
        //console.log('answerArray length is: ' + answerArray.length);
    }
    // PROMPT USER TO PLAY
    // RECORD THEIR ANSWER
    // COMPARE TO answerArray
    // PROMPT USER IF THEY WON OR NOT (update roundNumber)

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


go(5);
console.log("Answer array is " + answerArray);
console.log("Answer array has " + answerArray.length + " elements");
for (let j = 0; j < answerArray.length; j++) {
    console.log("Elelment " + j + " is " + answerArray[j]);
}