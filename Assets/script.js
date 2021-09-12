
//Global variables
var timerEl = document.getElementById('countdown'); //grabs timer from index, location on page for timer
var quizEl = document.getElementById('quiz'); //grabs quz paragraph from index, location on page for quiz questions

// Beginning main function that contains timer and quiz questions
function countdown() {
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

      displayMessage();
    }

  }, 1000);
}

// Displays the message one word at a time
// function displayMessage() {
//   var wordCount = 0;

//   // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
//   var msgInterval = setInterval(function () {
//     // If there are no more words left in the message
//     if (words[wordCount] === undefined) {
//       // Use `clearInterval()` to stop the timer
//       clearInterval(msgInterval);
//     } else {
//       // Display one word of the message
//       mainEl.textContent = words[wordCount];
//       wordCount++;
//     }
//   }, 1000);
// }

countdown(); //calling countdown function to start when a button is clicked