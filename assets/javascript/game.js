alert('Hello!  Guess what letter I am thinking of.  Press "OK" to get started');

// var myScripts = function() {  When exactly should I use this?

    // variable for computer letter choice 
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    


    // variables for player stats 
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var lettersGuessed = [];    //Array to capture user letters
    // var colors = ["pink", "purple", "yellow"];

     // variables to log and display stats in HTML 
    var gameStartText = document.getElementById("game-start");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeftText = document.getElementById("guesses-left-text");
    var lettersGuessedText = document.getElementById("letters-guessed-text");

    // variable to generate new computer choice 
    var cpuChoice =  alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(cpuChoice);


    // function to generate computer choice 
    function genLetter () {
        alphabet[Math.floor(Math.random() * alphabet.length)]; 
    }
    

   // event function to start and run game .  
    // If player guesses correctly Guesses Left will stay the same
    document.onkeyup = function(event) {
        userGuess = event.key;
        lettersGuessed.push(userGuess);   // reset after win or lose
        // console.log(userGuess);

        
        // if user guess === cpuChoice I want to call gen letter function 
        // I want to call this function again with losses 
        if (userGuess === cpuChoice) {
            wins++;
            lettersGuessed = [];
            // console.log(genLetter);
        } else {
            guessesLeft--;
        }
        genLetter(); 

        // if wins++ or losses ++ generate new number 

        
        if (guessesLeft === 0) {
            losses++;
            lettersGuessed = [];
            guessesLeft = 10;
        } 
        genLetter();    

        if (losses > 4) {
            alert("YOU LOST");
            wins = 0;
            losses = 0;
            lettersGuessed = [];
            guessesLeft = 10;
        }
        genLetter(); 

        if (wins > 4) {
            alert("YOU WON");
            wins = 0;
            losses = 0;
            lettersGuessed = [];
            guessesLeft = 10;
        }
        genLetter(); 

       
    
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
        

    

   
// }