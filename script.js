
var blueButton =   document.getElementById('blue');
var greenButton =  document.getElementById('green');
var redButton =    document.getElementById('red');
var yellowButton = document.getElementById('yellow');
var playGameButton = document.getElementById('playButton');
var buttonArray = [greenButton, redButton, blueButton, yellowButton];
var currentRound = 1;
var numMoves = 0;
var solutionArray = [];

blueButton.addEventListener('click', buttonClicked);
redButton.addEventListener('click', buttonClicked);
greenButton.addEventListener('click', buttonClicked);
yellowButton.addEventListener('click', buttonClicked);
playGameButton.addEventListener('click', handlePlayGameEvent);


function buttonClicked(evt) {
    var source = evt.srcElement;
    if (source.id == "blue") {
        console.log("Blue button pressed");
        solutionArray.push(source.id);
    }
    else if (source.id == "red") {
        console.log("Red button pressed");
        solutionArray.push(source.id);
    }
    else if (source.id == "green") {
        console.log("Green button pressed");
        solutionArray.push(source.id);
    }
    else if (source.id == "yellow") {
        console.log("Yellow button pressed");
        solutionArray.push(source.id);
    }
}


function handlePlayGameEvent(evt) {
    console.log("Button was pressed!!");
}



function go(round) {
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
console.log("Solution array is " + solutionArray);
console.log("Solution array has " + solutionArray.length + " elements");
for (let j = 0; j < solutionArray.length; j++) {
    console.log("Elelment " + j + " is " + solutionArray[j]);
}