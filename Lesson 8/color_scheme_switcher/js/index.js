$('#grayButton').click(function(){
    // switchOne();
    switchColor('gray');
});

$('#whiteButton').click(function(){
    switchColor('white');
});

// Example 1
function switchOne() {
    $("body").css({"background-color":"gray","color":"white"});
}

// Example 2
function switchOne() {
    $('body').attr('class', 'gray');
}

// Example 3
function switchColor(colorName){
    $('body').attr('class', colorName);
}