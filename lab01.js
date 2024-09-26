// JavaScript source code
let playerScore = 0;
let playerName = "John";
let lives = 3;
let colour = ["red", "blue", "green", "yellow", "pink"];
let opponent = ["Mike", "Damian", "Victor", "Mourice", "Edward"];
let opponentIndex;
let enemyScore;





function opponentSelection() {
    let randomOpponent = Math.floor(Math.random() * 4);
    opponentIndex = opponent[randomOpponent];
    console.log("Your opponent is " + opponentIndex + ".");

     enemyScore = Math.floor(Math.random() * 20);
    console.log(opponentIndex + "'s score is " + enemyScore);
}
function introduction() {
   let randomValue = Math.floor(Math.random() * 4);
   let teamColour = colour[randomValue];
   console.log(playerName + "'s team colour is " + teamColour + ".");
}


function pointSystem() {
    for (i = 0; i < 10; i++) {
        playerScore = playerScore + 1;
    }
}




function scoreDisplay() {
    introduction();
    opponentSelection();
    pointSystem();
    
    console.log(playerName + "'s score is " + playerScore + ".");

    if (playerScore % 2 == 0) {
        console.log("Your score is even.")
    }
    else {
        console.log("Your score is odd.")
    }

    if (playerScore > enemyScore) {
        console.log(playerName + " Wins!")
    }
    else {
        console.log(opponentIndex + " Wins!")
    }
}


scoreDisplay();
