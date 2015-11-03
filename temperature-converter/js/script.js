// When user clicks #convert button, convert input
//document.getElementById('convert').onclick = convert; //js
$('#convert').click(convert); //jQuery

function convert() {
  var total = 0;
  // var input = document.getElementById('input').value; //js
  var input = $('#input').val(); //jQuery

  // If input is empty
  if (input == ''){
    total = "Please enter a number";
  // Else if input is not a number
  } else if (isNaN(input)){
    total = "Please enter numbers only";
  // Else perform Celcius to Fahrenheit Conversion
  } else{
    total = (input * 9/5) + 32; // 9/5 or 1.8
  }
  // Display total in #result

  //js
  // document.getElementById('result').innerHTML = total;
  // document.body.style.backgroundColor = getBackgroundColor(total);

  //jQuery
  $('#result').html(total);
  $('body').css('background-color', getBackgroundColor(total));


}

// A function to get a backgroundColor
function getBackgroundColor(temp){
  var color =  'rgba(152,128,149,0.6)'; //purple
  if(isNaN(temp)){
    color = color; //purple
  } else if(temp < 30){
    color = 'rgb(93,220,255)'; //teal
  } else if(temp >= 30 && temp < 50){
    color = 'rgb(34,138,244)'; //blue
  } else if(temp >= 50 && temp < 75){
    color = 'rgb(247,178,127)';//pale orange
  } else if(temp >= 75 && temp < 90){
    color = 'rgb(255,147,39)'; //orange
  } else {
    // Fallthrough (which means >= 90 in this case b/c of what's tested above)
    color = 'rgb(242,66,63)'; //red
  }
  return color;

}