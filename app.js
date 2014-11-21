var questionNumber, userScore = 0;

// this function records the users score into the global variable userScore
function recordScore() {}

/* this function clears the question div and loads the new question
function nextQuestion(){
    var currentQuestion = 'question' + questionNumber;
}

*/
$(document).ready(function () {
  var userScore = 0;

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
        var thisScore = +$(this).find("input[type=radio]:checked").val();

        if (isNaN(thisScore)){
          alert("Choose an option before you click submit!");
          return;
        }

        userScore += thisScore;
        questionNumber = $(this).prop('name');

        alert ("User's score for this question: " + thisScore + "\n User's total score: " + userScore + "\nand the input name was: " + questionNumber);
        questionSwitcher (questionNumber);
    });
});

function questionSwitcher (question) {
  switch (question) {
    case "A1":
      $("#question1").hide();
      $("#question2").show();
      break;
    case "A2":
      $("#question2").hide();
      $("#question3").show();
      break;
    case "A3":
      $("#question3").hide();
      $("#question4").show();
      break;
    case "A4":
      $("#question").hide();
      $("#answers").show();
      $("#mediumLowAnswer").show();
      switch (true) {
        case (userScore<=10) :
          $("#lowAnswer").show();
          break;
        case (11<=userScore<20) :
          $("#mediumLowAnswer").show();
          break;
        case (21<=userScore<30) :
          $("#mediumHighAnswer").show();
          break;
        case (31<=userScore<40) :
          $("#highAnswer").show();
          break;
        default:
          alert("y'all the answerSwitch is broken");
          break;
        }
      break;
    default:
      alert("y'all the questionSwitch is broken");
      break;
  }
}
    // show new question and increment questionNumber
    
 

