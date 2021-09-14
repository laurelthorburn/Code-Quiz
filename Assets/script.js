
const question = document.querySelector("#quiz-question");
const choices = document.querySelectorAll(".choice-text");
const scoreText = document.querySelector("#score");
const progressText = document.querySelector("#");

var timerEl = document.getElementById('countdown'); //grabs timer from index, location on page for timer
var welcomePage = document.getElementById('welcome-page'); //Welcome Page
var quizDiv = document.getElementById('quiz-container'); //Main Quiz Container


let currentQuestion = {};
let acceptingAnswers = true;

let score = 0;
let questionCounter = 0;
let availableQuestions = [];

var startBtn = document.getElementById('begin-btn');

//Quiz Questions Set in an Array
var questions = [
    {
    question: "Sample Question 1",
    choice1: "aSample Answer 1",
    choice2: "Sample Answer 2",
    choice3: "Sample Answer 3", 
    choice4: "Sample Answer 4",
    choice5: "Sample Answer 4",
    answer: "a",
},
{
    question: "Sample Question 2",
    choice1: "bSample Answer 1",
    choice2: "Sample Answer 2",
    choice3: "Sample Answer 3", 
    choice4: "Sample Answer 4",
    choice5: "Sample Answer 4",
    answer: "a",
},
{
    question: "Sample Question 3",
    choice1: "cSample Answer 1",
    choice2: "Sample Answer 2",
    choice3: "Sample Answer 3", 
    choice4: "Sample Answer 4",
    choice5: "Sample Answer 4",
    answer: "a",
},
{
    question: "Sample Question 4",
    choice1: "dSample Answer 1",
    choice2: "Sample Answer 2",
    choice3: "Sample Answer 3", 
    choice4: "Sample Answer 4",
    choice5: "Sample Answer 4",
    answer: "a",
},
{
    question: "Sample Question 5",
    choice1: "eSample Answer 1",
    choice2: "Sample Answer 2",
    choice3: "Sample Answer 3", 
    choice4: "Sample Answer 4",
    choice5: "Sample Answer 4",
    answer: "a",
}
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 5;


// Beginning main function that contains timer and quiz questions

var beginQuiz = function countdown() {
    // Welcome Page disappears on click (click event below)
    function changeVisibility(){
        welcomePage.setAttribute("style", "display: none; ");
        quizDiv.setAttribute("style", "visibility: visible;");
    };


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


startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();

// Welcome Page disappears on click (click event below)
    function changeVisibility(){
        welcomePage.setAttribute("style", "display: none; ");
        quizDiv.setAttribute("style", "visibility: visible;");
    };
    
    changeVisibility();
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html');
    }
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;
        acceptingAnswers = false;

        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct'){
            incrementScore (SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
    }, 1000)
})

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}
}

startBtn.addEventListener("click", beginQuiz);