alert('Hello!  Guess what letter I am thinking of.  Press "OK" to get started');

// var myScripts = function() {  When exactly should I use this?

    // variable for computer letter choice 
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    


    // variables for player stats 
    var wins = 0;
    var losses = 0;
    var guessesLeft = 5;
    var lettersGuessed = [];    //Array to capture user letters

     // variables to log and display stats in HTML 
    var gameStartText = document.getElementById("game-start");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeftText = document.getElementById("guesses-left-text");
    var lettersGuessedText = document.getElementById("letters-guessed-text");

    // generates computer choice 
    var cpuChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(cpuChoice);
    

    // event function to start and run game .  
    // If player guesses correctly Guesses Left will stay the same
    document.onkeyup = function(event) {
        userGuess = event.key;
        lettersGuessed.push(userGuess);   // reset after win or lose
        // console.log(userGuess);

        if (userGuess === cpuChoice) {
            wins++;
        } else {
            guessesLeft--;
        }

        // if wins++ or losses ++ generate new number 


        if (guessesLeft === 0) {
            losses++;
        }

        if (guessesLeft === 0) {
            guessesLeft = 5;
        }    

       
    
        // Hide the directions
        // gameStartText.innerHTML = "";      Where do I put you?

        winsText.innerHTML = "Wins: " + wins;
            // console.log(wins);
        lossesText.innerHTML = "Losses: " + losses;
            // console.log(losses);
        guessesLeftText.innerHTML = "Guesses Left: " + guessesLeft;
            // console.log(guessesLeft);
        lettersGuessedText.textContent = "Letters Guessed: " + lettersGuessed;
            // console.log(lettersGuessed);
    }

        // NEED TO DO 
        // hide instructions after first onkeyup event 
        // regenerate new letter if wins++ or loses++
        // also reset letters guessed after wins++ or loses++
        // reset the game when wins === 0 || losses === 5

    

   
// }