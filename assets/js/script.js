// 1. initiate game
// 2. load all images
// 3. set variables
// 4. generate random number with a forloop
// 5. generate random value for crystals 
// 6. your score board should add up values of the crystals
// 7. if the sum of your crystal values match the random number you win and get 10 points
// 8. if you get 100 points you win and the game is over.
// 9. if your sum is > the random number you lose and lose a life
// 10. if you lose 5 times the game is over.


// variables 

var game = {};
var newGame = [];

var crystal1Num = "";
var crystal2Num = "";
var crystal3Num = "";
var crystal4Num = "";

var numberRand = 0;

var sumOfCrystals = "";

var score = "";
var lives = "";

//functions

// StartGame
$(document).ready(function() {


// random number generator
$('#generatebtn').click(function() {
	minNumber = 1;
	maxNumber = 100;
	numberRand = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
	console.log()
	$('#numberRand').html(numberRand);
})

// crystals

values = function() {

	$('#crystal1').click(function() {
		minNumber = 1;
		maxNumber = 25;
		crystal1Num = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
		console.log()
		$('#crystalValues').html(crystal1Num);
	})

	$('#crystal2').click(function() {
		minNumber = 26;
		maxNumber = 50;
		crystal2Num = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
		console.log()
		$('#crystalValues').html(crystal2Num);
	})

	$('#crystal3').click(function() {
		minNumber = 51;
		maxNumber = 75;
		crystal3Num = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
		console.log()
		$('#crystalValues').html(crystal3Num);
	})

	$('#crystal4').click(function() {
		minNumber = 76;
		maxNumber = 100;
		crystal4Num = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
		console.log()
		$('#crystalValues').html(crystal4Num);
	})


    // here, you have your sum
    crystal1Num = parseInt(crystal1Num);
    crystal2Num = parseInt(crystal2Num);
    crystal3Num = parseInt(crystal3Num);
    crystal4Num = parseInt(crystal4Num);

    result = Math.pow(crystal1Num, crystal2Num, crystal3Num, crystal4Num);
	$("#crystalValues").html(result);
	console.log()

}

crystalValues();


})
