// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

$("document").ready(function(){
    $('#shoot').click(function() {

    let word = $("#input").val();
    $("#userChoice").text(word);




 let options = ['rock','paper','scissors' ]
 let number = Math.floor(Math.random()*3);
 let computer= options[number]

    $("#computerChoice").text(computer);
    if (computer=== word){
        
    }



    });
});








// DOCUMENT READY FUNCTION BELOW

