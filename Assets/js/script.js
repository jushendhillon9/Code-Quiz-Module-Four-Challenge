var quizBox = document.querySelector(".quizBoxCard");
var quizRulesCard = document.querySelector(".quizRulesCard");
var startButton = document.querySelector(".startButton button");
var nextButton = document.querySelector("#quizBoxNextQuestion");
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var answerFour = document.getElementById("answerFour");

var questionsArray = ["1. String values must be enclosed within _____ when being assigned to variables.", "2. What is the HTML element used to display an image?", "3. Which of the tags below must be located in the <head> section of your page?", "4. Which attribute adds space between the border and inner content of an element?", "5.  Which property do you need to change the background color?", "6. How can you add a comment in a CSS file?", "7. Inside which element do you put JavaScript?", "8. Which of the following does the pop() method do?", "9. How do you write “Hello World” in an alert box?", "10. How can you add a comment in JavaScript?" ];


quizBox.addEventListener("click", function(event){
    var clickedAnswer = event.target;

    if (clickedAnswer.matches("#answerOne") || clickedAnswer.matches("#answerTwo") || clickedAnswer.matches("#answerThree") || clickedAnswer.matches("#answerFour")) {
        nextButton.style.display = "flex";
        if (answerOne.style.backgroundColor = "#F88158") {
            answerOne.style.backgroundColor = "#F8F8FF";
            clickedAnswer.style.backgroundColor = "#F88158";
        }
        if (answerTwo.style.backgroundColor = "#F88158") {
            answerTwo.style.backgroundColor = "#F8F8FF";
            clickedAnswer.style.backgroundColor = "#F88158";
        }
        if (answerThree.style.backgroundColor = "#F88158") {
            answerThree.style.backgroundColor = "#F8F8FF";
            clickedAnswer.style.backgroundColor = "#F88158";
        }
        if (answerFour.style.backgroundColor = "#F88158") {
            answerFour.style.backgroundColor = "#F8F8FF";
            clickedAnswer.style.backgroundColor = "#F88158";
        }
    }
});

quizRulesCard.addEventListener("click", function(theEvent){
    var clicked = theEvent.target;
    if (clicked.matches("#quizRulesExitButton")) {
        startButton.style.visibility = "visible";
        quizRulesCard.style.display = "none";
    }
    if (clicked.matches("#quizRulesContinueButton")) {
        quizRulesCard.style.display = "none";
        quizBox.style.visibility = "visible";
    }
});

startButton.addEventListener("click", function(someEvent) {
    var theClicked = someEvent.target;
    if (theClicked.matches(".startButton button")) {
        startButton.style.visibility = "hidden";
        quizRulesCard.style.visibility = "visible";
    }
});
