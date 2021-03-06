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
	var randWord = gameWords[indexWord].word;
	var randDefault = gameWords[indexWord].default;
}

exports.randomWord = new RandomWord({
	rand_word: randWord,
	rand_default: randDefault,
});

