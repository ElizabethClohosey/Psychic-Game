alert("Hello Lizzie");

// variable for computer letter choice 
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // generates computer choice 
    var cpuChoice = alphabet[Math.floor(Math.random() * alphabet.length)]
        console.log(cpuChoice);

        // if (wins++) {
        //     cpuChoice = alphabet[Math.floor(Math.random() * alphabet.length)]
        //     console.log(cpuChoice);  
        // }

    // variables for player stats 
    var wins = 0;
    var losses = 0;
    var guessesLeft = 5;
    var lettersGuessed = "";

    // variables to log and display stats in HTML 
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeft= document.getElementById("guesses-left-text");
    var lettersGuessed = document.getElementById("letters-guessed-text");

