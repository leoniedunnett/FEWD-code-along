// Step 1
function showAnswer1() {
    $('#answer1').show();
}
$('#answer1').hide();
$('#question1').click(showAnswer1);

// Step 2
function toggleAnswer1() {
    $('#answer1').toggle();
}
$('#question1').click(toggleAnswer1);

// Step 3
function toggleAnswer1() {
  $('#answer1').slideToggle();
}
$('#question1').click(toggleAnswer1);

//Step 4
function toggleAnswer1() {
  $('#answer1').slideToggle();
}
function toggleAnswer2() {
  $('#answer2').slideToggle();
}
$('#question1').click(toggleAnswer1);
$('#question2').click(toggleAnswer2);

//Step 5
function toggleAnswer1() {
  $('#answer1').slideToggle();
}
function toggleAnswer2() {
  $('#answer2').slideToggle();
}
function toggleAnswer3() {
  $('#answer3').slideToggle();
}

$('#question1').click(toggleAnswer1);
$('#question2').click(toggleAnswer2);
$('#question3').click(toggleAnswer3);