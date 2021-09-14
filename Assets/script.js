
const question = document.querySelector("#quiz-question");
const choices = document.querySelectorAll(".choice-text");
const scoreText = document.querySelector("#score");

let currentQuestion = {};
let acceptingAnswers = true;

let score =0;
let questionCounter = 0;
let availableQuestions = [];

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