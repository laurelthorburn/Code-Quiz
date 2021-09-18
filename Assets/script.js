//Global variables
var timerEl = document.getElementById('countdown'); //grabs timer from index, location on page for timer
var welcomePage = document.getElementById('welcome-page'); //Welcome Page
var quizDiv1 = document.getElementById('quiz1'); //Question 1 Container
var quizDiv2 = document.getElementById('quiz2'); //Question 2 Container
var quizDiv3 = document.getElementById('quiz3'); //Question 3 Container
var quizDiv4 = document.getElementById('quiz4'); //Question 4 Container
var userVerdict = document.getElementById('verdict');
var finalPage = document.getElementById('final-page');

// grabbing buttons
var startBtn = document.getElementById('begin-btn');
var saveBtn = document.getElementById('save-btn');

var btnA = document.getElementById('btn-a');
var btnB = document.getElementById('btn-b');
var btnC = document.getElementById('btn-c');
var btnD = document.getElementById('btn-d');

var btnA2 = document.getElementById('btn-a2');
var btnB2 = document.getElementById('btn-b2');
var btnC2 = document.getElementById('btn-c2');
var btnD2 = document.getElementById('btn-d2');

var btnA3 = document.getElementById('btn-a3');
var btnB3 = document.getElementById('btn-b3');
var btnC3 = document.getElementById('btn-c3');
var btnD3 = document.getElementById('btn-d3');

var btnA4 = document.getElementById('btn-a4');
var btnB4 = document.getElementById('btn-b4');
var btnC4 = document.getElementById('btn-c4');
var btnD4 = document.getElementById('btn-d4');


var c = 40; //previously was timeLeft, changed to c to match w3 schools example (bless you, w3 schools ppl)
var t;
var timer_is_on = 0;

function timedCount(){
  timerEl.textContent = "Time: " + c;
  c=c-1;
  t = setTimeout(timedCount, 1000);
};

function pauseTimer(){
  clearTimeout(t);
  timer_is_on = 0;
};

function wrongAnswer(){
  c = c-10;
  pauseTimer(c);
  timerEl.textContent = "Time: " + c; //changing display to reflect new counter after Q4 deducts point value
  window.setTimeout(closeResult, 5000 );
}

// make result text disappear
function closeResult(){
  userVerdict.style.display=" none";
  }
  

// Beginning main function that contains timer and quiz questions
var beginQuiz = function countdown() {
//Begin Timer on click event
if(!timer_is_on){
  timer_is_on = 1;
  timedCount();
}

  // Welcome Page disappears on click (click event below)
  function changeVisibility1(){
    welcomePage.setAttribute("style", "display: none; ");
    quizDiv1.setAttribute("style", "visibility: visible;");
};

changeVisibility1(); // hiding welcome page and shifting to questions
// now can i pull data answer so that if they click the button and it's true then x else if not y
};

//Setting all question containers to display none on main page, only display as click is initiated
quizDiv1.setAttribute("style", "display: none;");
quizDiv2.setAttribute("style", "display: none;");
quizDiv3.setAttribute("style", "display: none;");
quizDiv4.setAttribute("style", "display: none;");

//Q1
var choiceA = function(){
  if(btnA.dataset.answer === "true"){
  console.log("YAY");
  userVerdict.innerText = "Correct!";
  quizDiv2.setAttribute("style", "visibility: visible;");
  quizDiv1.setAttribute("style", "display: none;");
  } else {
  console.log("BOO");
  userVerdict.innerText = "Incorrect!";
  quizDiv2.setAttribute("style", "visibility: visible;");
  quizDiv1.setAttribute("style", "display: none;");
  c=c-10;
  }
};
var choiceB = function(){
  if(btnB.dataset.answer === "true"){
    console.log("YAY");
    userVerdict.innerText = "Correct!";
    quizDiv2.setAttribute("style", "visibility: visible;");
    quizDiv1.setAttribute("style", "display: none;");
  } else {
    console.log("BOO");
    userVerdict.innerText = "Incorrect!";
    quizDiv2.setAttribute("style", "visibility: visible;");
    quizDiv1.setAttribute("style", "display: none;");
    c=c-10;
  }
};
var choiceC = function(){
  if(btnC.dataset.answer === "true"){
    console.log("YAY");
    userVerdict.innerText = "Correct!";
    quizDiv2.setAttribute("style", "visibility: visible;");
    quizDiv1.setAttribute("style", "display: none;");
  } else {
    console.log("BOO");
    userVerdict.innerText = "Incorrect!";
    quizDiv2.setAttribute("style", "visibility: visible;");
    quizDiv1.setAttribute("style", "display: none;");
    c=c-10;
  }
};
var choiceD = function(){
  if(btnD.dataset.answer === "true"){
    console.log("YAY");
    userVerdict.innerText = "Correct!";
    quizDiv2.setAttribute("style", "visibility: visible;");
    quizDiv1.setAttribute("style", "display: none;");
  } else {
    console.log("BOO");
    userVerdict.innerText = "Incorrect!";
    quizDiv2.setAttribute("style", "visibility: visible;");
    quizDiv1.setAttribute("style", "display: none;");
    c=c-10;
  }
};

  
//Q2
var choiceA2 = function(){
  if(btnA2.dataset.answer === "true"){
    console.log("YAY");
    userVerdict.innerText = "Correct!";
    quizDiv3.setAttribute("style", "visibility: visible;");
    quizDiv2.setAttribute("style", "display: none;");
  } else {
    console.log("BOO");
    userVerdict.innerText = "Incorrect!";
    quizDiv3.setAttribute("style", "visibility: visible;");
    quizDiv2.setAttribute("style", "display: none;");
    c=c-10;
  }
};
var choiceB2 = function(){
  if(btnB2.dataset.answer === "true"){
    console.log("YAY");
    userVerdict.innerText = "Correct!";
    quizDiv3.setAttribute("style", "visibility: visible;");
    quizDiv2.setAttribute("style", "display: none;");
  } else {
    console.log("BOO");
    userVerdict.innerText = "Incorrect!";
    quizDiv3.setAttribute("style", "visibility: visible;");
    quizDiv2.setAttribute("style", "display: none;");
    c=c-10;
  }
};
var choiceC2 = function(){
  if(btnC2.dataset.answer === "true"){
    console.log("YAY");
    userVerdict.innerText = "Correct!";
    quizDiv3.setAttribute("style", "visibility: visible;");
    quizDiv2.setAttribute("style", "display: none;");
  } else {
    console.log("BOO");
    userVerdict.innerText = "Incorrect!";
    quizDiv3.setAttribute("style", "visibility: visible;");
    quizDiv2.setAttribute("style", "display: none;");
    c=c-10;
  }
};
var choiceD2 = function(){
  if(btnD2.dataset.answer === "true"){
    console.log("YAY");
    userVerdict.innerText = "Correct!";
    quizDiv3.setAttribute("style", "visibility: visible;");
    quizDiv2.setAttribute("style", "display: none;");
  } else {
    console.log("BOO");
    userVerdict.innerText = "Incorrect!";
    quizDiv3.setAttribute("style", "visibility: visible;");
    quizDiv2.setAttribute("style", "display: none;");
    c=c-10;
  }
};
//Q3
var choiceA3 = function(){
  if(btnA3.dataset.answer === "true"){
    console.log("YAY");
    userVerdict.innerText = "Correct!";
    quizDiv4.setAttribute("style", "visibility: visible;");
    quizDiv3.setAttribute("style", "display: none;");
  } else {
    console.log("BOO");
    userVerdict.innerText = "Incorrect!";
    quizDiv4.setAttribute("style", "visibility: visible;");
    quizDiv3.setAttribute("style", "display: none;");
    c=c-10;
  }
};
var choiceB3 = function(){
  if(btnB3.dataset.answer === "true"){
    console.log("YAY");
    userVerdict.innerText = "Correct!";
    quizDiv4.setAttribute("style", "visibility: visible;");
    quizDiv3.setAttribute("style", "display: none;");
  } else {
    console.log("BOO");
    userVerdict.innerText = "Incorrect!";
    quizDiv4.setAttribute("style", "visibility: visible;");
    quizDiv3.setAttribute("style", "display: none;");
    c=c-10;
  }
};
var choiceC3 = function(){
  if(btnC3.dataset.answer === "true"){
    console.log("YAY");
    userVerdict.innerText = "Correct!";
    quizDiv4.setAttribute("style", "visibility: visible;");
    quizDiv3.setAttribute("style", "display: none;");
  } else {
    console.log("BOO");
    userVerdict.innerText = "Incorrect!";
    quizDiv4.setAttribute("style", "visibility: visible;");
    quizDiv3.setAttribute("style", "display: none;");
    c=c-10;
  }
};
var choiceD3 = function(){
  if(btnD3.dataset.answer === "true"){
    console.log("YAY");
    userVerdict.innerText = "Correct!";
    quizDiv4.setAttribute("style", "visibility: visible;");
    quizDiv3.setAttribute("style", "display: none;");
  } else {
    console.log("BOO");
    userVerdict.innerText = "Incorrect!";
    quizDiv4.setAttribute("style", "visibility: visible;");
    quizDiv3.setAttribute("style", "display: none;");
    c=c-10;
  }
};

//Q4
var choiceA4 = function(){
  if(btnA4.dataset.answer === "true"){
    console.log("YAY");
    userVerdict.innerText = "Correct!";
    finalPage.setAttribute("style", "display: inline;");
    quizDiv4.setAttribute("style", "display: none;");
    pauseTimer();
  } else {
    console.log("BOO");
    userVerdict.innerText = "Incorrect!";
    wrongAnswer();
    finalPage.setAttribute("style", "visibility: visible;");
    quizDiv4.setAttribute("style", "display: none;");
  }
};
var choiceB4 = function(){
  if(btnB4.dataset.answer === "true"){
    console.log("YAY");
    userVerdict.innerText = "Correct!";
    finalPage.setAttribute("style", "visibility: visible;");
    quizDiv4.setAttribute("style", "display: none;");
    pauseTimer();
  } else {
    console.log("BOO");
    userVerdict.innerText = "Incorrect!";
    wrongAnswer();
    finalPage.setAttribute("style", "visibility: visible;");
    quizDiv4.setAttribute("style", "display: none;");
  }
};
var choiceC4 = function(){
  if(btnC4.dataset.answer === "true"){
    console.log("YAY");
    userVerdict.innerText = "Correct!";
    finalPage.setAttribute("style", "visibility: visible;");
    quizDiv4.setAttribute("style", "display: none;");
    pauseTimer();
  } else {
    console.log("BOO");
    userVerdict.innerText = "Incorrect!";
    wrongAnswer();
    finalPage.setAttribute("style", "visibility: visible;");
    quizDiv4.setAttribute("style", "display: none;");
  }
};
var choiceD4 = function(){
  if(btnD4.dataset.answer === "true"){
    console.log("YAY");
    userVerdict.innerText = "Correct!";
    finalPage.setAttribute("style", "visibility: visible;");
    quizDiv4.setAttribute("style", "display: none;");
    pauseTimer();
  } else {
    console.log("BOO");
    userVerdict.innerText = "Incorrect!";
    wrongAnswer();
    finalPage.setAttribute("style", "visibility: visible;");
    quizDiv4.setAttribute("style", "display: none;");
  }
};


//Final Page

//Quiz/timer starts when start quiz button is clicked
startBtn.addEventListener("click", beginQuiz);

btnA.addEventListener("click", choiceA);
btnB.addEventListener("click", choiceB);
btnC.addEventListener("click", choiceC);
btnD.addEventListener("click", choiceD);

btnA2.addEventListener("click", choiceA2);
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
