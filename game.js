var wordArray = ["Apple", 
		"Macintosh", "MacBook", 
		"iPod", "iPhone", 
		"iPad", "Mac Pro", 
		"Apple Watch", "AirPod", 
		"Siri", "iMac"];

var randomSelection = Math.floor(Math.random() * wordArray.length);
var randomWord = wordArray[randomSelection];


exports.randomWord = randomWord;