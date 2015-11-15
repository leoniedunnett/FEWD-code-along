var humanScore = 0;
var computerScore = 0;

$('#rock').on('click', playRock);
$('#paper').on('click', playPaper);
$('#scissors').on('click', playScissors);

function playRock() {
  play("rock");
}
function playPaper() {
  play("paper");
}
function playScissors() {
  play("scissors");
}

function play(humanPlay) {

  computerPlay = getComputerPlay();

  $('#status').html("<p>You played <strong>" + humanPlay + "</strong>. The bot played <strong>" + computerPlay + "</strong>.</p>");

  if(humanPlay == 'rock') {
    if(computerPlay == 'rock') {
      $('#status').append("<p>You tied. :|</p>");
    } else if (computerPlay == 'paper') {
      $('#status').append("<p>You lose. :(</p>");
      computerScore++;
    } else if (computerPlay == 'scissors') {
      $('#status').append("<p>You win! :)</p>");
      humanScore++;
    }
  } else if (humanPlay == 'paper') {
    if(computerPlay == 'rock') {
      $('#status').append("<p>You win! :)</p>");
      humanScore++;
    } else if (computerPlay == 'paper') {
      $('#status').append("<p>You tied. :|</p>");
    } else if (computerPlay == 'scissors') {
      $('#status').append("<p>You lose. :(</p>");
      computerScore++;
    }
  } else if (humanPlay == 'scissors') {
    if(computerPlay == 'rock') {
      $('#status').append("<p>You lose. :(</p>");
      computerScore++;
    } else if (computerPlay == 'paper') {
      $('#status').append("<p>You win! :)</p>");
      humanScore++;
    } else if (computerPlay == 'scissors') {
      $('#status').append("<p>You tied. :|</p>");
    }
  }

  $('#humanScore').text(humanScore);
  $('#computerScore').text(computerScore);

}

function getComputerPlay() {
  var plays = ['rock', 'paper', 'scissors'];
  //Math.random gives a random (floating point) number between 0-3(plays.length)
  //Math.floor rounds the number to a whole number, ie. 1, 2, or 3
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}