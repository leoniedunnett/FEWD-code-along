// Refactor:

function toggleAnswer() {
  $(this).next().slideToggle();
}

$('h2').click(toggleAnswer);

// Original:

// function toggleAnswer1() {
//   $('#answer1').slideToggle();
// }
// function toggleAnswer2() {
//   $('#answer2').slideToggle();
// }
// function toggleAnswer3() {
//   $('#answer3').slideToggle();
// }

// $('#question1').click(toggleAnswer1);
// $('#question2').click(toggleAnswer2);
// $('#question3').click(toggleAnswer3);