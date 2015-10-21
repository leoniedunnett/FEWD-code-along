// Step 1: show #answer1 on user click

function showAnswer1() {
    $('#answer1').show();
}
$('#answer1').hide();
$('#question1').click(showAnswer1);



// Step 2: toggle #answer1 on user click

function toggleAnswer1() {
    $('#answer1').toggle();
}
$('#question1').click(toggleAnswer1);



// Step 3: slideToggle #answer1 on user click

function toggleAnswer1() {
  $('#answer1').slideToggle();
}
$('#question1').click(toggleAnswer1);



// Step 4: slideToggle #answer1 and #answer2 on user click

function toggleAnswer1() {
  $('#answer1').slideToggle();
}
function toggleAnswer2() {
  $('#answer2').slideToggle();
}
$('#question1').click(toggleAnswer1);
$('#question2').click(toggleAnswer2);



//Step 5: slideToggle #answer1, #answer2 and #answer3 on user click

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