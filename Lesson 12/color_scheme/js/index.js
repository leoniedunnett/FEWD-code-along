// Refactor:

function switchTheme() {
	  var theme = $(this).attr('class');
	  $('body').attr('class', theme);
	}
$(document).ready(function(){
	$('#switcher li').click(switchTheme);
});

// Original:

// $('#grayButton').click(switchGray);
// $('#whiteButton').click(switchWhite);
// $('#blueButton').click(switchBlue);
// $('#yellowButton').click(switchYellow);

// function switchGray() {
//   $('body').attr('class', 'gray');
// }

// function switchWhite() {
//   $('body').attr('class', 'white');
// }

// function switchBlue() {
//   $('body').attr('class', 'blue');
// }

// function switchYellow() {
//   $('body').attr('class', 'yellow');
// }
