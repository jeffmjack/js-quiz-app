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
    var getRadio= function () {
        $('form').on('submit', function () {
            event.preventDefault();
            var thisScore = $("input[name=radio]:checked").val();
            thisScore = parseInt (thisScore);
            userScore = thisScore;
            questionNumber++;
            alert ("User's score for this question: " + thisScore + "\n User's total score: " + userScore);
            return thisScore; 
        });
    };
    userScore = userScore + getRadio();
    // show new question and increment questionNumber
    questionNumber ++;
    
}); 
