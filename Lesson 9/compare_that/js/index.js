function compare() {
    var comparison;
    var a = $('#a').val();
    var b = $('#b').val();

    if (isNaN(a) || isNaN(b)){
        comparison = ' ';
        alert('Please only input numbers');
    } else if (a < b) {
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