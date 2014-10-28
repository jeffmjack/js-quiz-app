var questionNumber = 1;
var userScore = 0;

// this function records the users score into the global variable userScore
function recordScore() {}

/* this function clears the question div and loads the new question
function nextQuestion(){
    var currentQuestion = 'question' + questionNumber;
}

*/
$(document).ready(function () {

   // clear modal instructions and show question 1 when user clicks on 'let's get started'
    $('#start-button').on('click', function(){
        $('#start-box').hide();
        $('#start-button').hide(); 
        $('#question').show(); 
        $('#question1').show(); 
        
    });
    // record value of answer when user clicks submit for question

    $('form').on('submit', function (event) {
        event.preventDefault();
        var thisScore = $("input[type=radio]:checked").val();
        thisScore = parseInt (thisScore);
        userScore += thisScore;
        var questionNumber = $('input').prop('name');
        alert ("User's score for this question: " + thisScore + "\n User's total score: " + userScore + "\nand the input name was: " + questionNumber);
    });
});
    // show new question and increment questionNumber
    
 

