// This file will contain the logic of the app; running it in the terminal will start the game
var inquirer = require('inquirer');
var randWord = require("./game.js");
var letterCheck = require("./letter.js");
var updateWord = require("./word.js");
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
	fullWord = randWord.randomWord[0];
	placeholder = randWord.randomWord[1];



	console.log("Welcome "+playerName+"!\n");
	console.log("\nThe word you are guessing has "+fullWord.length+" letters.");

	prompt();

	function prompt() {
		var userGuess = process.argv[0].toUpperCase();

		inquirer.prompt([
			{
				type: "input",
				message: "\nTo begin guessing, type a singler letter and hit 'Enter'.",
				name: "userGuess"
			}
		]).then(function(userInput) {
			//Check where the letter appears in the word
			// return an array with index of all letters which should be revealed
			var resultLetterCheck = letterCheck(userInput);
			var dispLetGuessMsg = 
			var resultWordUpdate = updateWord(resultLetterCheck);
			var DisCurWordProg = updateWord.dCWP;

			// var letterForWord = letterCheck.checkedLetter[0];

		})
	}
