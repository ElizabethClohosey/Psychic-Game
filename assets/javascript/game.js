alert('Hello!  Guess what letter I am thinking of.  Press "OK" to get started');

    // variable for computer letter choice 
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

     // variables for player stats 
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var lettersGuessed = [];    //Array to capture user letters

     // variables to log and display stats in HTML 
    var gameStartText = document.getElementById("game-start");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeftText = document.getElementById("guesses-left-text");
    var lettersGuessedText = document.getElementById("letters-guessed-text");

    // variable to generate new computer choice
    var cpuChoice =  alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(cpuChoice);

    function resetGameBoard() {
        lettersGuessed = [];
        guessesLeft = 10;
        cpuChoice =  alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log("resetGameBoard " + cpuChoice);
    }

    function userWinOrLose() {
        lettersGuessed = [];
        guessesLeft = 10;
        cpuChoice =  alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log("userWinOrLose reset " + cpuChoice);
        wins = 0;
        losses = 0;
    }
    
    // event function to start and run game.  // If player guesses correctly Guesses Left will reset
    document.onkeyup = function(event) {
        userGuess = event.key.toLowerCase();
        lettersGuessed.push(userGuess);  
        gameStartText.innerHTML = "";      // Hides the directions

        // the following conditionals determine what happens when user guesses a letter
        if (userGuess === cpuChoice) {
            wins++;
            resetGameBoard();
        
        } else {
            guessesLeft--;
        }

        // determines a loss and resets stats other than wins --- does not generate new number  
        if (guessesLeft === 0) {
            losses++;
            resetGameBoard();
        }     

        // determines how user losses and rests game 
        if (losses > 4) {
            alert("YOU LOST");
            userWinOrLose();
        } 

        // determines how a user wins and rests game 
        if (wins > 4) {
            alert("YOU WON");
            userWinOrLose();
        }

        // logs stats in HTML 
        winsText.innerHTML = "Wins: " + wins;
        lossesText.innerHTML = "Losses: " + losses;
        guessesLeftText.innerHTML = "Guesses Left: " + guessesLeft;
        lettersGuessedText.textContent = "Letters Guessed: " + lettersGuessed;
    }

        
    

   