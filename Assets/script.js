
//Global variables
var timerEl = document.getElementById('countdown'); //grabs timer from index, location on page for timer
var quizEl = document.getElementById('quiz'); //grabs quz paragraph from index, location on page for quiz questions
var welcomePage = document.getElementById('welcome-page');

var startBtn = document.getElementById('begin-btn');
var submitBtn = document.getElementById('submit-btn');

// Beginning main function that contains timer and quiz questions
var beginQuiz = function countdown() {
    function changeVisibility(){
        welcomePage.setAttribute("style", "display: none; ");
    };

changeVisibility();

  var timeLeft = 31; //quiz time in msec, multiplied by 1000 below to covert to seconds

  // TO DO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    timeLeft--; //then begins the countdown

    timerEl.textContent = timeLeft + " seconds remaining."; // shows this first so starts at 5

    if (timeLeft === 1) { //WHY DO I SKIP 2
      timerEl.textContent = timeLeft + " second remaining.";
    }

    if(timeLeft === 0) { // was stopping at 2 when at 0
      // Stops execution of action at set interval
      clearInterval(timeInterval);
      timerEl.textContent = "Time is up!";

    //   displayMessage(); -- eventually this will be high score page?
    }

  }, 1000);
};


//Quiz/timer starts when start quiz button is clicked
startBtn.addEventListener("click", beginQuiz);
