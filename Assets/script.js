
//Global variables
var timerEl = document.getElementById('countdown'); //grabs timer from index, location on page for timer
var quizEl = document.getElementById('quiz'); //grabs quz paragraph from index, location on page for quiz questions

var welcomePage = document.getElementById('welcome-page'); //Welcome Page

var quizDiv = document.getElementById('quiz'); //Main Quiz Container

// grabbing quiz content
var quizQuestion = document.getElementById('quiz-question');
var answer1 = document.getElementById('li1');
var answer2 = document.getElementById('li2');
var answer3 = document.getElementById('li3');
var answer4 = document.getElementById('li4');

// grabbing buttons
var startBtn = document.getElementById('begin-btn');
var submitBtn = document.getElementById('submit-btn');
var btnA = document.getElementById('btn-a');
var btnB = document.getElementById('btn-b');
var btnC = document.getElementById('btn-c');
var btnD = document.getElementById('btn-d');

// Beginning main function that contains timer and quiz questions
var beginQuiz = function countdown() {
    // Welcome Page disappears on click (click event below)
    function changeVisibility(){
        welcomePage.setAttribute("style", "display: none; ");
        quizDiv.setAttribute("style", "visibility: visible;");
    };

changeVisibility();

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

//Begin Quiz Questions
function mainQuiz(){

 let questions = [
     {
        quizQuestion: "Sample Question 1", 
        answer1: "aSample Answer 1",
        answer2: "Sample Answer 2",
        answer3: "Sample Answer 3", 
        answer4: "Sample Answer 4",
        answer: 2, 
    },
    {
        quizQuestion: "Sample Question 2", 
        answer1: "bSample Answer 1",
        answer2: "Sample Answer 2",
        answer3: "Sample Answer 3", 
        answer4: "Sample Answer 4",
        answer: 2, 
    },
    {
        quizQuestion: "Sample Question 3", 
        answer1: "cSample Answer 1",
        answer2: "Sample Answer 2",
        answer3: "Sample Answer 3", 
        answer4: "Sample Answer 4",
        answer: 2, 
    },
    {
        quizQuestion: "Sample Question 4", 
        answer1: "dSample Answer 1",
        answer2: "Sample Answer 2",
        answer3: "Sample Answer 3", 
        answer4: "Sample Answer 4",
        answer: 2, 
    },
    {
        quizQuestion: "Sample Question 5", 
        answer1: "eSample Answer 1",
        answer2: "Sample Answer 2",
        answer3: "Sample Answer 3", 
        answer4: "Sample Answer 4",
        answer: 2, 
    },
 ]

mainQuiz();

};


//Quiz/timer starts when start quiz button is clicked
startBtn.addEventListener("click", beginQuiz);
