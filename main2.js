// This file will contain the logic of the app; running it in the terminal will start the game
var inquirer = require('inquirer');
var randWord = require("./game2.js");
var letterCheck = require("./letter2.js");
var updateWord = require("./word2.js");
var fs = require('fs');
var playerName = "";

initializeGame();




function initializeGame() {
	var userGuess = process.argv[0].toUpperCase();

	inquirer.prompt([{
		name: "name",
		message: "Enter your name to play Hangman!"
	}]).then(function(answers){
		var playerName = answers.name;
		playGame();
	})
}

function playGame() {
	fullWord = randWord.randomWord;
	placeholder = randWord.randomWord[1];



	console.log("Welcome "+playerName+"!\n");
	console.log("\nThe word you are guessing has "+fullWord.length+" letters.");

	prompt();

	function prompt() {
		var userGuess = process.argv[0].toUpperCase();

		inquirer.prompt([
			{
				type: "input",
				message: "\nTo enter a guess, type a singler letter and hit 'Enter'.",
				name: "userGuess"
			}
		]).then(function(userInput) {
			//Check where the letter appears in the word
			// return an array with index of all letters which should be revealed
			var resultLetterCheck = letterCheck(userInput);
			var dispLetGuessMsg = updateWord.disp_Let_Guess_Msg;
			var resultWordUpdate = updateWord(resultLetterCheck);
			var DisCurWordProg = updateWord.dCWP;

			// var letterForWord = letterCheck.checkedLetter[0];
			console.log("You have uncovered "+dispLetGuessMsg+" new letters in this word \n"+
				"\n Your current progress:   "+DisCurWordProg);

			prompt();
			});

		};
	};
