function getGallery(){
    var gallery = $(this).parent().attr('id');

    switch(gallery){
        case "cats":
        images = ['cute-cats-cups.jpg','cute-cat.jpg','cute-cats-cups.jpg','cute-cat.jpg','cute-cats-cups.jpg'];
        break;

        case "animals":
        images = ['animal2.jpg','animal1.jpg','animal2.jpg','animal1.jpg','animal2.jpg'];
        break;
    }

    images.forEach(function(element,index){
        $('#'+gallery+' .image-container').append('<img src="images/'+images[index]+'">');
    });
    $('#'+gallery+' .image-container').css('width',(images.length*500)+'px');
}

$(document).ready(function(){

    $('.image-container').each(getGallery);

    $('.image-container').on('click', 'img', function(){
        $(this).not(':last-child').addClass('img-moved-left');
    });

});