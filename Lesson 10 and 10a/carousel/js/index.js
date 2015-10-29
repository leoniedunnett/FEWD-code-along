var images=["images/food1.jpg","images/food2.jpg","images/food3.jpg","images/food4.jpg","images/food5.jpg","images/food6.jpg","images/food7.jpg"];
var i=0;

//Bonus
var votes=[];

function previousImage(){
    if(i>0){
        changeImage(--i);
    }
    //Shorthand
    //i>0 ? changeImage(--i):0;
}
function nextImage(){
    if(i+1<images.length){
        changeImage(++i);
    }
    //Shorthand
    //i+1<images.length ? changeImage(++i):0;

    //Bonus
    else{
        calculateVotes();
    }

    //Bonus Shorthand
    //i+1<images.length ? changeImage(++i):calculateVotes();
}

function changeImage(){
    $("#image-to-vote-on>img").attr("src",images[i]);
    //Bonus
    $("#your-vote>option").prop("selected",false);
}

//Bonus
function calculateVotes(){
    //Could just use one variable eg.avg = 0,
    //but to help with understanding, we'll use sum as well
    var sum = 0;
    var avg;
    if(votes.length!==0){
        votes.forEach(function(element){
            sum+=parseInt(element, 10);
            //sum+=~~value;
        });
        avg=(sum/votes.length).toFixed(2);
    }
    $("#image-to-vote-on+div").text("You have reached the end. Total deliciousness score was: "+avg);
    $("#your-vote").hide();
}

$(document).ready(function(){

    $("#buttons-wrapper .btn[value='Skip']").on("click",nextImage);
    $("#buttons-wrapper .btn[value='Back']").on("click",previousImage);

    // Bonus
    $("#your-vote").on("change",function(){
        if(i<images.length && votes.length<images.length){
            votes[i]=$("#your-vote").val();
            nextImage();
        }
    });
});