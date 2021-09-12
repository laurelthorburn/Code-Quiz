var timerEl = document.getElementById('countdown'); //grabs countdown from index



// Creating timer and function that follows
function countdown() {
  var timeLeft = 30;

  var timeInterval = (function () {
    
    timerEl.textContent = timeLeft + " seconds remaining."; // shows this first so starts at 5
    
    timeLeft--; //then begins the countdown
    
    // Creating quiz sequence as long as there is time left
    while (timeLeft != 0){

    }

    if(timeLeft === 0) { 
      // Stops execution of action at set interval
      clearInterval(timeInterval);
      timerEl.textContent = "Time is up!  Please enter your initials below to store your score.";
      // Calls function to display words
    }

  }, 1000);
};

 countdown();

