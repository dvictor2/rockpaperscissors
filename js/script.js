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
    if (computer=== "scissors" && word === "scissors") {
    $("result").text(" It's a tie")
    }
        else if(computer === "scissors" && word === "paper") {
    $("#result").text(" You Lose")
        }
        else if (computer === "scissors" && word === "rock") {
    $("#result").text(" You Win")
        }
        else if (computer === "rock" && word === "rock") {
    $("#result").text(" It's a tie")
        }
        else if (computer === "rock" && word === "paper") {
    $("#result").text(" You Win")
        }
        else if (computer === "rock" && word === "scissors") {
    $(".result").text(" You Lose")
        }
        else if (computer === "paper" && word === "paper"){
    $("#result").text(" It's a tie")
        }
        else if (computer === "paper" && word === "rock") {
    $("#result").text(" You Lose")
        }
        else if (computer === "paper" && word === "scissors"){
    $("#result").text(" You Win")
        
    }

    });













// DOCUMENT READY FUNCTION BELOW
})
