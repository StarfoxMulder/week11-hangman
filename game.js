//This file will randomly select a word for the player
var inquirer = require('inquirer');
var randWord = require("./game.js");
var letterCheck = require("./letter.js");
var updateWord = require("./word.js");
var fs = require('fs');

console.log("game.js is connected.");

var gameWords = [
		{
			word: "IMAGINATION",
			default: '___________'
		},
		{
			word: "CONTEST",
			default: '_______'
		},
		{
			word: "INJUSTICE",
			default: '_________'
		},
		{
			word: "SYMBOLISM",
			default: '_________'
		},
		{
			word: "ANTELOPES",
			default: '_________'
		}
	];

getWord();

function getWord() {
	var indexWord = Math.floor(Math.random()*gameWords.length)+1;
	var 
}

exports.randomWord = new RandomWord({
	rand_word: gameWords[indexWord].word,
	rand_default: gameWords[indexWord].default,
});

