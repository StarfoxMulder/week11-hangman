// This file will control whether or not a letter appears as a '_' or as itself on the console
// This is a constructor file
var inquirer = require('inquirer');
var randWord = require("./game.js");
var letterCheck = require("./letter.js");
var updateWord = require("./word.js");
var fs = require('fs');

// randWord.randomWord[0].rand_word;
var currentWord = randWord.randomWord.rand_word;
var currentDefault = randWord.randomWord.rand_default;
var currLetArray = [];
//currLetArray = array of indecies for where the location of the user's
//  letter within the current wor

module.exports = function(userInput) {
	console.log("letter.js module.exports is connected.");
	return {
		checked: function() {
			for(var i = 0; i < currentWord.length; i++){
				if(userInput == currentWord.charAt[i]) {
					currLetArray.push(i);
				}
			}
			return currLetArray;
		}
	};
};


exports.checkedLetter = new checkedLetter ({
	Curr_let_array: currLetArray,
});