//Implement the red light using jQuery. Don't forget to add the script tags.
$('#stopButton').click(illuminateRed);
$('#slowButton').click(illuminateYellow);
$('#goButton').click(illuminateGreen);

function illuminateRed() {
    clearLights();
    $('#stopLight').addClass('on');
}

function illuminateYellow() {
    clearLights();
    $('#slowLight').addClass('on');
}

function illuminateGreen() {
    clearLights();
    $('#goLight').addClass('on');
}

function clearLights() {
    $('.bulb').removeClass('on');
}