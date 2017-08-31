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
var crystal1Num = 0;
var crystal2Num = 0;
var crystal3Num = 0;
var crystal4Num = 0;

var numberRand = 0;

var crystalValue = 0;

var score = 0;
var lives = 10;

//functions

// StartGame
$(document).ready(function() {



// random number generator
$('#generatebtn').click(function() {
	minNumber = 1;
	maxNumber = 20;
	numberRand = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
	console.log()
	$('#numberRand').html(numberRand);
})

// crystals
	function getRandomArbitrary(min, max) {
 		min = Math.ceil(min);
 		max = Math.floor(max);
 		return Math.floor(Math.random() * (max - min)) + min; 
 		console.log()
	}

	$('#crystal1').click(function() {
       crystal1Num = crystal1Num + getRandomArbitrary(1,5);
       $("#crystalValues").text(crystal1Num);
       updateCrystalResult();
       console.log(crystalValues)
    })

	$('#crystal2').click(function() {
       crystal2Num = crystal2Num + getRandomArbitrary(6,10);
       $("#crystalValues").html(crystal2Num);
       updateCrystalResult();
       console.log(crystalValue)
    })

	$('#crystal3').click(function() {
       crystal3Num = crystal3Num + getRandomArbitrary(11,15);
       $("#crystalValues").html(crystal3Num);
       updateCrystalResult();
       console.log(crystalValue)
    })

	$('#crystal4').click(function() {
       crystal4Num = crystal4Num + getRandomArbitrary(16,20);
       $("#crystalValues").html(crystal4Num);
       updateCrystalResult();
       console.log(crystalValue)
    })


    // here, you have your sum

    function updateCrystalResult() {
    	crystalValue = crystal1Num + crystal2Num + crystal3Num + crystal4Num;
    	$('#crystalValues').html(crystalValue);
    	console.log()
    }

	//if the sum of the crystals matches the numberRand then you get a point

	function winLoss() {
		var lives = 10;
		$('.crystalBtn').click(function() {
			if(crystalValue === numberRand) {
				alert("You Win!");
				$('#generatebtn').html("Play Again?!")
				score += 10;
				$('#score').html(score);
				if(score === 100) {
					alert("Congratulations!! New High Score!!");
				}
			}

			if(crystalValue > numberRand) {
				alert("You Lose!");
				$('#generatebtn').html("Play Again?!")
				lives -= 1;
				$('#lives').html(lives);
				if(lives === 0) {
					alert("Game Over!!!");
					console.log("Game Over!!!");
				}
			}
		})
	}

winLoss();

// Reset the Game
	$('#generatebtn').click(function() {
        function reset() {
            crystal1Num = 0;
            crystal2Num = 0;
            crystal3Num = 0;
            crystal4Num = 0;
            crystalValue = 0;
            $('#crystalValues').empty(crystalValue);
            $('#crystalValues').html(crystalValue)
            console.log(crystalValue)
        }
        $('#generatebtn').html("Generate Random Number");
        reset();
    })

})
