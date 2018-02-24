var letterCons = require("./Letter.js");
var wordCons = require("./Word.js");
var game = require("./game.js");
var inquirer = require("inquirer");

var randomWord = game.randomWord;
var letterGuessed;

exports.letter;

var myWord = new wordCons.wordCons(game.randomWord);
var totalGuesses = 15;

function userGuess(){
	console.log(myWord.toString());
	if (myWord.guesses.length >= totalGuesses) {
		console.log('No More Guesses!');
		return;
	}
	inquirer.prompt([{
		name: 'letter',
		type: 'text',
		message: 'Enter a letter:',
		validate: function(string) {
				var letterTest = new RegExp("^[a-zA-Z\s]{1,1}$");
				return letterTest.test(string);
			}
		}]).then(function(letterInput){
				var letter = letterInput.letter; 
				myWord.findLetter(letter);

				if (myWord.isComplete()) { 
					console.log('Yes! It was ' + myWord.toString() + '!');
					return;
				}
				
				console.log('-------------------\n');
				console.log('You have ' + (totalGuesses - myWord.guesses.length) + ' guesses left.');

				userGuess();
			}
  );
}

userGuess();