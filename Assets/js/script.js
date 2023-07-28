var quizBox = document.querySelector(".quizBoxCard");
var recordScorePage = document.querySelector("#finalScorePage")
var highScoresPage = document.querySelector("#highScoresPage")
var quizRulesCard = document.querySelector(".quizRulesCard");
var startButton = document.querySelector(".startButton button");
var nextButton = document.querySelector("#quizBoxNextQuestion");
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var answerFour = document.getElementById("answerFour");
var quizBoxCard = document.querySelector(".quizBoxCard");
var quizTimer = document.querySelector("#quizTimer");
var buttonsArray = [answerOne, answerTwo, answerThree, answerFour];
var submissionsArray = [];
var quizQuestion = quizBoxCard.children[1].children[0];
var finalScore = document.querySelector("#finalScore");
var submissonForm = document.getElementById("submissionForm");
var unorderedList = document.getElementById("list");
var correctOrNot = false;
var totalSubmission = 0;
var questionCount = 0;
var answerCount = 0;
var quizScore = 0;
var totalTime = 300;
var userInput;


submissonForm.addEventListener("submit", function (newEvent) {
    newEvent.preventDefault();
    totalSubmission++;
    localStorage.setItem("count", totalSubmission.toString());
    userInput = document.getElementById("inputBox").value;
    var quizTake = {
        score: totalTime,
        name: userInput
    };
    var storedArray = localStorage.getItem("submissionsArray");
    //if statement checks if the stored array has any stored data (quiztake objects) present
    //if it does then the new array to overwrite it will take on the stored data
    if (storedArray) {
        submissionsArray = JSON.parse(storedArray);
    }
    //array to overtake stored array takes on new quiztake object
    submissionsArray.push(quizTake);
    localStorage.setItem("submissionsArray", JSON.stringify(submissionsArray));
    console.log(submissionsArray);
    recordScorePage.style.visibility = "hidden";
    highScoresPage.style.visibility = "visible";
    var storedNumber = localStorage.getItem("count");
    var index = parseInt(storedNumber);
    for (var i = 0; i < 9; i++) {
        var listItem = document.createElement("li")
        listItem.textContent = submissionsArray[i].name;
        unorderedList.innerHTML = "";
        unorderedList.appendChild(listItem);
        console.log(unorderedList);
    }
});



var questionsArray = ["1. String values must be enclosed within _____ when being assigned to variables.", "2. What is the HTML element used to display an image?", "3. Which of the tags below must be located in the <head> section of your page?", "4. Which attribute adds space between the border and inner content of an element?", "5.  Which property do you need to change the background color?", "6. How can you add a comment in a CSS file?", "7. Inside which element do you put JavaScript?", "8. Which of the following does the pop() method do?", "9. How do you write “Hello World” in an alert box?", "10. How can you add a comment in JavaScript?" ];
var questionsArrayAnswers = ["Commas", "Curly Brackets", "Quotes", "Parantheses", "<image>", "<picture>", "<img>", "<pic>", "<title>", "<meta>", "<form>", "<link>", "Margin", "Padding", "Border", "Spacing", "bgcolor", "color", "background-color", "colorbg", "/* this is a comment */ ", "//this is a comment", "//this is a comment//", "<!—this is a comment —>", "<var>", "<script>", "<section>", "<code>", "It increments the total length by 1", "It decrements the total length by 1", "It prints the first element but no effect on the length", "None of the above options", "alert(“Hello World”); ", "alertBox(“Hello Worlld”);", "msg(“Hello World”);", "msgBox(“Hello World”);", "/* this is a comment */ ", "//this is a comment", "/ this is a comment//", "<-—this is a comment —>"];
var correctAnswersArray = ["Quotes", "<img>", "<meta>", "Margin", "background-color", "/* this is a comment */", "<script>", "It decrements the total length by 1","alert(“Hello World”);","// this is a comment// ",];

//makes sure that the selected choice has a background color of orange
quizBox.addEventListener("click", function(event){
    var clickedAnswer = event.target;
    if (clickedAnswer.matches("#answerOne") || clickedAnswer.matches("#answerTwo") || clickedAnswer.matches("#answerThree") || clickedAnswer.matches("#answerFour")) {
        nextButton.style.display = "flex";
        answerOne.style.backgroundColor = "#F8F8FF"
        answerTwo.style.backgroundColor = "#F8F8FF"
        answerThree.style.backgroundColor = "#F8F8FF"
        answerFour.style.backgroundColor = "#F8F8FF"
        clickedAnswer.style.backgroundColor = "#F88158";
    }
});

//transitions between quizrules page to start button and beginning of quiz
quizRulesCard.addEventListener("click", function(theEvent){
    var clicked = theEvent.target;
    if (clicked.matches("#quizRulesExitButton")) {
        startButton.style.visibility = "visible";
        quizRulesCard.style.display = "none";
    }
    if (clicked.matches("#quizRulesContinueButton")) {
        quizRulesCard.style.display = "none";
        quizBox.style.visibility = "visible";
        var timeInterval = setInterval(function () {
            if (totalTime <= 0) {
                quizBox.style.visibility = "hidden";
                recordScorePage.style.visibility = "visible";
                quizTake.score = 0;
            }
            if(questionCount == 10) {
                clearInterval(timeInterval);
                finalScore.textContent = "Your Final Score is: " + totalTime;
            }
            totalTime--;
            quizTimer.textContent = "Timer: " + totalTime;
            console.log(totalTime)}, 1000);
    }
});


        

//moves fram startbutton to quizrules
startButton.addEventListener("click", function(someEvent) {
    var theClicked = someEvent.target;
    if (theClicked.matches(".startButton button")) {
        startButton.style.visibility = "hidden";
        quizRulesCard.style.visibility = "visible";
    }
});


//moves between the quiz questions
quizBoxCard.addEventListener("click", function answerVerification (thisEvent) {
    var clickedEl = thisEvent.target;
    var text = clickedEl.textContent;
    function isCorrect (clickedEl) {
        if (correctAnswersArray.includes(text)) {
            correctOrNot = true;
        }
        else {
            correctOrNot = false;
        }
    };
    if (clickedEl == answerOne) {
        isCorrect();
    }
    if (clickedEl == answerTwo) {
        isCorrect();
    }
    if (clickedEl == answerThree) {
        isCorrect();
    }
    if (clickedEl == answerFour) {
        isCorrect();
    }
});

nextButton.addEventListener("click", function toNextQuestion (newEvent) {
    if (correctOrNot == true) {
        quizScore++;
    }

    if (correctOrNot == false) {
        totalTime -= 15;
    }
    
    questionCount++;

    if (questionCount == 10) {
        quizBox.style.visibility = "hidden";
        recordScorePage.style.visibility = "visible";
    }
    else {
        nextButton.style.display = "none";
        answerOne.style.backgroundColor = "#F8F8FF";
        answerTwo.style.backgroundColor = "#F8F8FF";
        answerThree.style.backgroundColor = "#F8F8FF";
        answerFour.style.backgroundColor = "#F8F8FF";

        quizQuestion.textContent = questionsArray[questionCount];
        answerCount+= 4;
        answerOne.textContent = questionsArrayAnswers[answerCount];
        answerTwo.textContent = questionsArrayAnswers[answerCount + 1];
        answerThree.textContent = questionsArrayAnswers[answerCount + 2];
        answerFour.textContent = questionsArrayAnswers[answerCount + 3];
    }
})