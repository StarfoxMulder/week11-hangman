//This file will randomly select a word for the player
var inquirer = require('inquirer');
var randWord = require("./game2.js");
var letterCheck = require("./letter2.js");
var updateWord = require("./word2.js");
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

// var indexWord = 0;

// function index() {
// 	indexWord = Math.floor(Math.random()*gameWords.length)+1;
// };

module.exports = {
	getWord: function(wordIndex) {
		// this.wordIndex = wordIndex;
		var randWord = gameWords[wordIndex].word;
	},
	getDefault: function(wordIndex) {
		// this.wordIndex = wordIndex;
		var randDefault = gameWords[wordIndex].default;
	}
};
