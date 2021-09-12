
//Global variables
var timerEl = document.getElementById('countdown'); //grabs timer from index, location on page for timer
var quizEl = document.getElementById('quiz'); //grabs quz paragraph from index, location on page for quiz questions
var welcomePage = document.getElementById('welcome-page');
var quizQuestion = document.getElementById('quiz');
var answer1 = document.getElementById('li1');
var answer2 = document.getElementById('li2');
var answer3 = document.getElementById('li3');
var answer4 = document.getElementById('li4');

var startBtn = document.getElementById('begin-btn');
var submitBtn = document.getElementById('submit-btn');

// Beginning main function that contains timer and quiz questions
var beginQuiz = function countdown() {
    // Welcome Page disappears on click (click event below)
    function changeVisibility(){
        welcomePage.setAttribute("style", "display: none; ");
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
var maybeHS = function(){

}

};


//Quiz/timer starts when start quiz button is clicked
startBtn.addEventListener("click", beginQuiz);
