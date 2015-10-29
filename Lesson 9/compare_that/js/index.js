function compare() {

    var comparison;

    var a = $('#a').val();
    //alert( "typeOf a:" + typeof a ); //string
    a = parseInt(a, 10);

    var b = $('#b').val();
    //Shorthand parseInt (if we wanted a floated number we would use ~~)
    b= +b;

    // To test using + or ~~ above and see the different values it returns for b
    //alert(b);

    if (a < b) {
        comparison = '<';
    } else if (a > b) {
        comparison = '>';
    } else if (a === b) {
        comparison = '===';
    } else{
        comparison = 'N/A';
    }

    $('#comparison').html(comparison);
}

$('#submit').click(compare);