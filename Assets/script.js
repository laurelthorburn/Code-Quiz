//Global variables
var timerEl = document.getElementById('countdown'); //grabs timer from index, location on page for timer
var welcomePage = document.getElementById('welcome-page'); //Welcome Page
var quizDiv = document.getElementById('quiz'); //Main Quiz Container
var megaBtn = document.getElementsByTagName('ol');

// grabbing quiz content
var quizQuestion = document.getElementById('quiz-question');
var choiceOne = document.getElementById('li1');
var choiceTwo = document.getElementById('li2');
var choiceThree = document.getElementById('li3');
var choiceFour = document.getElementById('li4');

// grabbing buttons
var startBtn = document.getElementById('begin-btn');
var submitBtn = document.getElementById('submit-btn');
var btnA = document.getElementById('btn-a');
var btnB = document.getElementById('btn-b');
var btnC = document.getElementById('btn-c');
var btnD = document.getElementById('btn-d');

// empty array to be added/removed from later
// var quizContent = [];
 var index = 0; //referencing starting of array at 0 to add onto later

var quizContent = [
  {
  question: "Sample Question 1", //quizContent[0].question 
  choice1: "aSample Answer 1", //quizContent[0].choice1 
  choice2: "Sample Answer 2", //quizContent[0].choice2
  choice3: "Sample Answer 3",  //quizContent[0].choice3 
  choice4: "Sample Answer 4",  //quizContent[0].choice4 
  answer: "a",  //  //quizContent[0].answer
},
{
  question: "Sample Question 2", //quizContent[1].question 
  choice1: "bSample Answer 1",  //quizContent[1].choice1
  choice2: "Sample Answer 2",  //quizContent[1].choice2
  choice3: "Sample Answer 3",   //quizContent[1].choice3
  choice4: "Sample Answer 4",  //quizContent[1].choice4
  answer: "b",
},
{
  question: "Sample Question 3",
  choice1: "cSample Answer 1",
  choice2: "Sample Answer 2",
  choice3: "Sample Answer 3", 
  choice4: "Sample Answer 4",
  answer: "a",
},
{
  question: "Sample Question 4",
  choice1: "dSample Answer 1",
  choice2: "Sample Answer 2",
  choice3: "Sample Answer 3", 
  choice4: "Sample Answer 4",
  answer: "c",
}
];

// ============================== THE MEGA FUNCTION ==============================
// Beginning main function that contains timer and quiz questions
var beginQuiz = function countdown() {
    // Welcome Page disappears on click (click event below)
    function changeVisibility(){
        welcomePage.setAttribute("style", "display: none; ");
        quizDiv.setAttribute("style", "visibility: visible;");
    };

changeVisibility(); // hiding welcome page and shifting to questions

//Begin Timer
  var timeLeft = 76; //quiz time in msec, multiplied by 1000 below to covert to seconds

  var timeInterval = setInterval(function () {
    timeLeft--; //Begins the countdown

    timerEl.textContent = "Time: " + timeLeft + " seconds"; 

    if (timeLeft === 1) { 
      timerEl.textContent = "Time: " + timeLeft + " second";
    }

    if(timeLeft === 0) { 
      // Stops execution of action at set interval
      clearInterval(timeInterval);
      timerEl.textContent = "Time is up!";

    //   displayMessage(); -- eventually this will be high score page?
    }

  }, 1000);

  function mainQuiz(){
   // can i create an array with question, choices, and answer.  Pull from array using the for loop that adds one to the index each time so questions shift through but also have if user clicks answer that is equal to answer then does X if not does Y.
    var currentQuestion = quizContent[index]; // accessing same if [0]
    index++;

    //create onclick event so if correct = x else = y
  }

  mainQuiz();
}

// ============================== THE END OF MEGA FUNCTION ==============================


//Quiz/timer starts when start quiz button is clicked
startBtn.addEventListener("click", beginQuiz);

btnA.addEventListener("click", function(){
  
})