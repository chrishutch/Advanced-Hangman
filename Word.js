var randomLetter = require("./Letter.js");

function word(value){
	this.letters = [];
	this.value = value;
	this.guesses = "";

	for (var i = 0; i < this.value.length; i++) {
		this.letters.push(new randomLetter.letter(this.value[i]));
	}
};

word.prototype.isComplete = function(){
	for (var i = 0; i < this.letters.length; i++) {
		if (!this.letters[i].show){
			return false;
		}
	}
		return true;
};

word.prototype.findLetter = function(letter) {
	var lowerLetter = letter.toLowerCase();
	if (this.guesses.indexOf(lowerLetter) != -1) {
		return "Duplicate";
	} 
	this.guesses += lowerLetter;

	for (var i = 0; i < this.letters.length; i++) {
		if (this.letters[i].value.toLowerCase() == lowerLetter) {
			this.letters[i].show = true;
		}
	}
};

word.prototype.toString = function() {
  var wordPrint = "";
  
  for (var i = 0; i < this.letters.length; i++) {
	wordPrint += this.letters[i].printInfo();
  }
  	return wordPrint;
};

exports.wordCons = word;