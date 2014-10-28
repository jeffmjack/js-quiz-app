var question1 = "how do you feel about ‘live music’?<br>"  +
"<form> " +
"    <input type='radio' name='radio' value='10'> " +
"    AMMMMAAAAAAAZZZZZZZZIIINNGGGGGG (I’m from Beaumont) " +
"    <br> " +
"    <input type='radio' name='radio' value='3'> " +
"    it’s loud and I don’t like standing still for that long " +
"    <br> " +
"    <input type='radio' name='radio' value='2'> " +
"    I went to an Eagles concert when I was 11, does that count? " +
"    <br> " +
"    <input type='radio' name='radio' value='5'> " +
"    shows are okay but I’d rather be quietly reading " +
"    <br> " +
"    <input type='submit'> " +
"</form> ";


var question2 = 'do you have a car?<br>' +
'<form action="/Users/jeffmjack/code/thinkful/js-quiz-app/question3.html" method="get">' +
'    <input type="radio" name="radio" value="2">' +
'    yes but I hate driving' +
'    <br>' +
'    <input type="radio" name="radio" value="7">' +
'    no but I can afford to live downtown' +
'    <br>' +
'    <input type="radio" name="radio" value="8">' +
'    yes and I LOVE sitting in traffic' +
'    <br>' +
'    <input type="radio" name="radio" value="3">' +
'    no, but I was thinking about getting a bike' +
'    <br>' +
'    <input type="submit">' +
'</form>'; 

var questionNumber = 1;
var userScore = 0;

// this function records the users score into the global variable userScore
function recordScore() {}

// this function clears the question div and loads the new question
function nextQuestion(){
    var currentQuestion = 'question' + questionNumber;
    $('#question').html(currentQuestion); 
}
$(document).ready(function () {
    // inject question 1 into question box
    $('#question').html(question1); 
    // clear modal instructions and show question 1 when user clicks on 'let's get started'
    $('#start-button').on('click', function(){
        $('#start-box').hide();
        $('#start-button').hide(); 
        $('#question').show(); 
    });
    // record value of answer when user clicks submit for question
    var getRadio= function () {
        $('form').on('submit', function () {
            var thisScore = $("input[name=radio]:checked").val();
            thisScore = parseInt (thisScore);
        alert (thisScore); 
        return thisScore; 
        });
    };
    userScore = userScore + getRadio();
    // show new question and increment questionNumber
    questionNumber ++;
    
}); 
