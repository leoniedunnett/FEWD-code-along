// SET total to 0
var total = 0;

//---anonymous function---//

//WHEN user clicks submit ADD entry to receipt AND total

//ON #entry submit
$('#entry').submit(function(){

    // GET #newEntry value
    var entry = $('#newEntry').val();

    // CONVERT to floated number
    entry = parseFloat(entry);

    // CONVERT to currency format (INVOKE currencyFormat function below)
    currency = currencyFormat(entry);

    // APPEND currency value to receipt table list
    $('#entries').append('<tr><td></td><td>' + currency + '</td></tr>');

    // SET running total = existing total + user entry;
    total += entry;

    // DISPLAY running total as currency at bottom of receipt (in #total)
    $('#total').html (currencyFormat(total));

    // RESET user input to empty
    $('#newEntry').val('');

    //CANCEL form submit
    return false;
});


function currencyFormat(number) {

    // CONVERT value to floated number
    var currency = parseFloat(number);

    // SET value to a fixed decimal place of 2
    currency = currency.toFixed(2);

    // ADD $ to currency value
    currency = '$' + currency;

    // RETURN currency
    return currency;
}

//---named function example---//

// $('#entry').submit(enter);

// function enter() {
//     var entry = $('#newEntry').val();
//     var entry = parseFloat(entry);
//     currency = currencyFormat(entry);
//     $('#entries').append('<tr><td></td><td>' + currency + '</td></tr>');
//     total += entry;
//     $('#total').html (currencyFormat(total));
//     $('#newEntry').val('');
//     return false;
// }



