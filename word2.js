// This file will contain all of the methods which will check the letters guessed versus the random word selected
// This is a constructor file
var inquirer = require('inquirer');
var randWord = require("./game2.js");
var letterCheck = require("./letter2.js");
var updateWord = require("./word2.js");
var fs = require('fs');


// randWord.randomWord[0].rand_word;

// var currentWord = randWord.randomWord[0];
// var currentDefault = randWord.randomWord[1];
// var displayWordProg = currentDefault;

//Array of letter indeces to reveal in updated word
// var displayLetArray = letterCheck.checkedLetter;

module.exports = {
	updated: function(resultLetterCheck) {
		console.log("word.js module.exports is connected.");
		var currentWord = randWord.randomWord[0];
		var currentDefault = randWord.randomWord[1];
		var displayWordProg = currentDefault;
		this.currLetArray = currLetArray;

		for(var i = 0; i < displayLetArray.length; i++){
//for each number in the array, I want to replace the
// number at that index in the default string with the
// corresponding letter at that index in the word string
			var letIndex =  displayLetArray[i];
			var letFromWord = currentWord.charAt(letIndex);
			var displayWordProg = setCharAt(displayWordProg, letIndex, letFromWord);
		}
		return displayWordProg;
	}
};
// function setCharAt(str, index, char) {
// 	if(index > str.length-1) {
// 		return str;
// 	} else {
// 		return str.substr(0, index) + char + str.substr(index+1);
// 	}
// };