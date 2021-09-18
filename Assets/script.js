//Global variables
var timerEl = document.getElementById('countdown'); //grabs timer from index, location on page for timer
var welcomePage = document.getElementById('welcome-page'); //Welcome Page
var quizDiv1 = document.getElementById('quiz1'); //Main Quiz Container
var quizDiv2 = document.getElementById('quiz2'); //Main Quiz Container
var quizDiv3 = document.getElementById('quiz3'); //Main Quiz Container
var quizDiv4 = document.getElementById('quiz4'); //Main Quiz Container

// grabbing buttons
var startBtn = document.getElementById('begin-btn');
var submitBtn = document.getElementById('submit-btn');

var btnA = document.getElementById('btn-a');
var btnB = document.getElementById('btn-b');
var btnC = document.getElementById('btn-c');
var btnD = document.getElementById('btn-d');

var btnA2;

var btnA3 = document.getElementById('btn-a3');
var btnB3 = document.getElementById('btn-b3');
var btnC3 = document.getElementById('btn-c3');
var btnD3 = document.getElementById('btn-d3');

var btnA4 = document.getElementById('btn-a4');
var btnB4 = document.getElementById('btn-b4');
var btnC4 = document.getElementById('btn-c4');
var btnD4 = document.getElementById('btn-d4');


var timeLeft = 76; //quiz time in msec, multiplied by 1000 below to covert to seconds


// Beginning main function that contains timer and quiz questions
var beginQuiz = function countdown() {
//Begin Timer

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

  // Welcome Page disappears on click (click event below)
  function changeVisibility1(){
    welcomePage.setAttribute("style", "display: none; ");
    quizDiv1.setAttribute("style", "visibility: visible;");
};

changeVisibility1(); // hiding welcome page and shifting to questions
// now can i pull data answer so that if they click the button and it's true then x else if not y
};

//Setting all to display none on main page, only display as click is initiated
quizDiv1.setAttribute("style", "display: none;");
quizDiv2.setAttribute("style", "display: none;");
quizDiv3.setAttribute("style", "display: none;");
quizDiv4.setAttribute("style", "display: none;");

//Q1
var choiceA = function(){
  if(btnA.dataset.answer === "true"){
    console.log("YAY")
    quizDiv2.setAttribute("style", "visibility: visible;");
    quizDiv1.setAttribute("style", "display: none;");
 

    } else {
      console.log("BOO")
      quizDiv2.setAttribute("style", "visibility: visible;");
      quizDiv1.setAttribute("style", "display: none;");
     

    }
  };
var choiceB = function(){
  if(btnB.dataset.answer === "true"){
      console.log("YAY")
      quizDiv2.setAttribute("style", "visibility: visible;");
      quizDiv1.setAttribute("style", "display: none;");
    } else {
      console.log("BOO")
      quizDiv2.setAttribute("style", "visibility: visible;");
      quizDiv1.setAttribute("style", "display: none;");
    }
  };
var choiceC = function(){
  if(btnC.dataset.answer === "true"){
      console.log("YAY")
      quizDiv2.setAttribute("style", "visibility: visible;");
      quizDiv1.setAttribute("style", "display: none;");
    } else {
      console.log("BOO")
      quizDiv2.setAttribute("style", "visibility: visible;");
      quizDiv1.setAttribute("style", "display: none;");
    }
  };
var choiceD = function(){
  if(btnD.dataset.answer === "true"){
      console.log("YAY")
      quizDiv2.setAttribute("style", "visibility: visible;");
      quizDiv1.setAttribute("style", "display: none;");
    } else {
      console.log("BOO")
      quizDiv2.setAttribute("style", "visibility: visible;");
      quizDiv1.setAttribute("style", "display: none;");
    }
  };

  var btnB2 = document.getElementById('btn-b2');
  var btnC2 = document.getElementById('btn-c2');
  var btnD2 = document.getElementById('btn-d2');
  

//Q2
  var choiceA2 = function(){
    if(btnA2.dataset.answer === "true"){
      console.log("YAY")
      console.log("WOO")
      quizDiv3.setAttribute("style", "visibility: visible;");
      quizDiv2.setAttribute("style", "display: none;");
      } else {
        console.log("BOO")
        quizDiv2.setAttribute("style", "visibility: visible;");
        quizDiv1.setAttribute("style", "display: none;");
      }
    };
  var choiceB2 = function(){
    if(btnB2.dataset.answer === "true"){
        console.log("YAY")
        quizDiv3.setAttribute("style", "visibility: visible;");
        quizDiv2.setAttribute("style", "display: none;");
      } else {
        console.log("BOO")
        quizDiv3.setAttribute("style", "visibility: visible;");
        quizDiv2.setAttribute("style", "display: none;");
      }
    };
  var choiceC2 = function(){
    if(btnC2.dataset.answer === "true"){
        console.log("YAY")
        quizDiv3.setAttribute("style", "visibility: visible;");
        quizDiv2.setAttribute("style", "display: none;");
      } else {
        console.log("BOO")
        quizDiv3.setAttribute("style", "visibility: visible;");
        quizDiv2.setAttribute("style", "display: none;");
      }
    };
  var choiceD2 = function(){
    if(btnD2.dataset.answer === "true"){
        console.log("YAY")
        quizDiv3.setAttribute("style", "visibility: visible;");
        quizDiv2.setAttribute("style", "display: none;");
      } else {
        console.log("BOO")
        quizDiv3.setAttribute("style", "visibility: visible;");
        quizDiv2.setAttribute("style", "display: none;");
      }
    };
//Q3
  var choiceA3 = function(){
    if(btnA3.dataset.answer === "true"){
      console.log("YAY")
      quizDiv3.setAttribute("style", "visibility: visible;");
      quizDiv2.setAttribute("style", "display: none;");
      } else {
        console.log("BOO")
        quizDiv3.setAttribute("style", "visibility: visible;");
        quizDiv2.setAttribute("style", "display: none;");
      }
    };
  var choiceB3 = function(){
    if(btnB3.dataset.answer === "true"){
        console.log("YAY")
        quizDiv3.setAttribute("style", "visibility: visible;");
        quizDiv2.setAttribute("style", "display: none;");
      } else {
        console.log("BOO")
        quizDiv3.setAttribute("style", "visibility: visible;");
        quizDiv2.setAttribute("style", "display: none;");
      }
    };
  var choiceC3 = function(){
    if(btnC3.dataset.answer === "true"){
        console.log("YAY")
        quizDiv3.setAttribute("style", "visibility: visible;");
        quizDiv2.setAttribute("style", "display: none;");
      } else {
        console.log("BOO")
        quizDiv3.setAttribute("style", "visibility: visible;");
        quizDiv2.setAttribute("style", "display: none;");
      }
    };
  var choiceD3 = function(){
    if(btnD3.dataset.answer === "true"){
        console.log("YAY")
        quizDiv3.setAttribute("style", "visibility: visible;");
        quizDiv2.setAttribute("style", "display: none;");
      } else {
        console.log("BOO")
        quizDiv3.setAttribute("style", "visibility: visible;");
        quizDiv2.setAttribute("style", "display: none;");
      }
    };

//Q4
  var choiceA4 = function(){
    if(btnA4.dataset.answer === "true"){
      console.log("YAY")
      quizDiv3.setAttribute("style", "visibility: visible;");
      quizDiv2.setAttribute("style", "display: none;");
      } else {
        console.log("BOO")
        quizDiv3.setAttribute("style", "visibility: visible;");
        quizDiv2.setAttribute("style", "display: none;");
      }
    };
  var choiceB4 = function(){
    if(btnB4.dataset.answer === "true"){
        console.log("YAY")
        quizDiv3.setAttribute("style", "visibility: visible;");
        quizDiv2.setAttribute("style", "display: none;");
      } else {
        console.log("BOO")
        quizDiv3.setAttribute("style", "visibility: visible;");
        quizDiv2.setAttribute("style", "display: none;");
      }
    };
  var choiceC4 = function(){
    if(btnC4.dataset.answer === "true"){
        console.log("YAY")
        quizDiv3.setAttribute("style", "visibility: visible;");
        quizDiv2.setAttribute("style", "display: none;");
      } else {
        console.log("BOO")
        quizDiv3.setAttribute("style", "visibility: visible;");
        quizDiv2.setAttribute("style", "display: none;");
      }
    };
  var choiceD4 = function(){
    if(btnD4.dataset.answer === "true"){
        console.log("YAY")
        quizDiv3.setAttribute("style", "visibility: visible;");
        quizDiv2.setAttribute("style", "display: none;");
      } else {
        console.log("BOO")
        quizDiv3.setAttribute("style", "visibility: visible;");
        quizDiv2.setAttribute("style", "display: none;");
      }
    };

    
// function userClick(){
//  if ()
//   };

//Quiz/timer starts when start quiz button is clicked
startBtn.addEventListener("click", beginQuiz);

btnA.addEventListener("click", choiceA);
btnB.addEventListener("click", choiceB);
btnC.addEventListener("click", choiceC);
btnD.addEventListener("click", choiceD);


btnB2.addEventListener("click", choiceB2);
btnC2.addEventListener("click", choiceC2);
btnD2.addEventListener("click", choiceD2);

btnA3.addEventListener("click", choiceA3);
btnB3.addEventListener("click", choiceB3);
btnC3.addEventListener("click", choiceC3);
btnD3.addEventListener("click", choiceD3);

btnA4.addEventListener("click", choiceA4);
btnB4.addEventListener("click", choiceB4);
btnC4.addEventListener("click", choiceC4);
btnD4.addEventListener("click", choiceD4);