//Global variables
var timerEl = document.getElementById('countdown'); //grabs timer from index, location on page for timer
var welcomePage = document.getElementById('welcome-page'); //Welcome Page
var quizDiv = document.getElementById('quiz'); //Main Quiz Container
var megaBtn = document.getElementsByTagName('ol');

// grabbing quiz content
var quizQuestion = document.getElementById('quiz-question');
var choiceOneLi = document.getElementById('li1');
var choiceTwoLi = document.getElementById('li2');
var choiceThreeLi = document.getElementById('li3');
var choiceFourLi = document.getElementById('li4');

// grabbing buttons
var startBtn = document.getElementById('begin-btn');
var submitBtn = document.getElementById('submit-btn');
var btnA = document.getElementById('btn-a');
var btnB = document.getElementById('btn-b');
var btnC = document.getElementById('btn-c');
var btnD = document.getElementById('btn-d');

var quizContent = [
  {
  question: "Sample Question 1", //quizContent[0].question 
  choices: ["aSample Answer 1", "aSample Answer 2","aSample Answer 3", "aSample Answer 4"], //quizContent[0].choices[0-4444] 
  answer: "aSample Answer 1",  //  //quizContent[0].answer
},
{
  question: "Sample Question 2", //quizContent[1].question 
  choices: ["aSample Answer 1", "aSample Answer 2","aSample Answer 3", "aSample Answer 4"],
  answer: "aSample Answer 3",
},
{
  question: "Sample Question 3",
  choices: ["aSample Answer 1", "aSample Answer 2","aSample Answer 3", "aSample Answer 4"],
  answer: "aSample Answer 3",
},
{
  question: "Sample Question 4",
  choices: ["aSample Answer 1", "aSample Answer 2","aSample Answer 3", "aSample Answer 4"],
  answer: "aSample Answer 2",
}
];

// empty array to be added/removed from later
// var quizContent = [];
var index = 0; //referencing starting of array at 0 to add onto later
var currentQuiz = quizContent[index]; // accessing same if [0]

// Global functions - incrementor
function nextQuestion(){
  index ++;
  userClick();
}

function userClick(){
  if(choiceOneLi.innerText === quizContent[index].answer){
    console.log("YAY!!!");
  } else {
    console.log("Ugh...javascript...am i right?");
  }
}



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


}

// ============================== THE END OF MEGA FUNCTION ==============================


//Quiz/timer starts when start quiz button is clicked
startBtn.addEventListener("click", beginQuiz);

// btnA.addEventListener("click", function(){
//   mainQuiz();
// })