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

var crystalValues = "";

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

$("#crystalValues").html(function() {

	function getRandomArbitrary(min, max) {
 	min = Math.ceil(min);
 	max = Math.floor(max);
 	return Math.floor(Math.random() * (max - min)) + min; 
 	console.log()
	}

	$('#crystal1').click(function() {
       crystal1Num = getRandomArbitrary(1,25);
       $("#crystalValues").html(crystal1Num);
       console.log()
    })

	$('#crystal2').click(function() {
       crystal2Num = getRandomArbitrary(26,50);
       $("#crystalValues").html(crystal2Num);
       console.log()
    })

	$('#crystal3').click(function() {
       crystal3Num = getRandomArbitrary(51,75);
       $("#crystalValues").html(crystal3Num);
       console.log()
    })

	$('#crystal4').click(function() {
       crystal4Num = getRandomArbitrary(76,100);
       $("#crystalValues").html(crystal4Num);
       console.log()
    })

    $('#crystalVaues').add(crystal1Num, crystal2Num, crystal3Num, crystal4Num);
    console.log()

})


    // here, you have your sum

 //    var newResult = crystal1Num, crystal2Num, crystal3Num, crystal4Num;
 //    var result = crystal1Num, crystal2Num, crystal3Num, crystal4Num;
	// $("#crystalValues").html(result + newResult);
	// console.log()

	//if the sum of the crystals matches the numberRand then you get a point

	// if (result === numberRand);
	// 	alert("You Win");
	// else if(result > numberRand);
	// 	alert("You Lose!");



})
