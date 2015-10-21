$('#grayButton').click(function(){
    switchOne();
    // switchColor('gray');
});

$('#whiteButton').click(function(){
    switchTwo();
    // switchColor('white');
});

// // Example 1
// function switchOne() {
//     $("body").css({"background-color":"gray","color":"white"});
// }

// Example 2
function switchOne() {
    $('body').attr('class', 'gray');
}

function switchTwo() {
    $('body').attr('class', 'white');
}

// Advanced Example 3
// function switchColor(colorName){
//     $('body').attr('class', colorName);
// }