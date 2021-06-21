
var startButtonEL = document.getElementById("startBtn");
var ContainerEl = document.getElementById("container");
var questionEl = document.getElementById("question");
var answerButtonEl = document.getElementById("answerBtn");
var introEl = document.getElementById("intro");
var shuffledQuestions = "";
var currentQuestionIndex = 0;
var endGameEl = document.getElementById("endGame");
var score;
var finalScoreEl = document.getElementById("finalScore");
var answerPopUpEl = document.getElementById("ansPopup");
var timerEl = document.getElementById("countdown");
var timeUpEl = document.getElementById("timeUp");
var playerName = document.getElementById("nameOfPlayer");
var submitButtonEl = document.getElementById("submitBtn");
var playerStatsEl = document.getElementById("playerStats");
var scoreDataEl = document.getElementById("scoreData");
var goBackButtonEl = document.getElementById("returnBtn");
var clearScoreButtonEl = document.getElementById("clear-score");



  var questions = [
      { 
        question: 'What are variables used for in JavaScript Programs?', 
        answers: [
          { text: "Storing numbers, dates, or other values ", correct: true },
          { text: "Varying randomly", correct: false },
          { text: "Statements that make you miss the prom", correct: false },
          { text: "None of the above", correct: false },
        ],
        
      },
      { 
        question: 'String values must be enclosed within ________ when being assigned to variables.', 
        answers: [
        { text: "commas", correct: false },
        { text: "curly brackets", correct: false },
        { text: "quotes", correct: true },
        { text: "parenthesis", correct: false },
         ],
      },
      { 
        question: " Inside which HTML element do we put the JavaScript?",
        answers: [
          { text: " <js>", correct: false },
          { text: "<scripting>", correct: false },
          { text: " <javascript>", correct: false },
          { text: " <script>", correct: true },
        ],
      },
      {
        question: "Which built-in method calls a function for each element in the array?",
        answers: [
          { text: "while() ", correct: false },
          { text: "loop()", correct: false },
          { text: "forEach()", correct: true },
          { text: "None of the above", correct: false },
        ],
      },
      {
        question: "  Using _______ statement is how you test for a specific condition",
        answers: [
          { text: "Select", correct: false },
          { text: "Switch", correct: false },
          { text: "If", correct: true },
          { text: "For", correct: false },
        ],
      },
      {
        question: "  A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
          { text: "JavaScript", correct: true },
          { text: "terminal/bash", correct: false },
          { text: "for loops", correct: false },
          { text: "console.log", correct: false },
        ],
      },
      {
        question: " Commonly used data types do NOT include:",
        answers: [
          
          { text: "Alerts", correct: false },
          { text: "Strings", correct: false },
          { text: "Numbers", correct: false },
          { text: "Booleans", correct: true },
        ],
      },

      {
        question: "  The condition in an if / else statement is enclosed with ______.:",
        answers: [
          { text: "quotes", correct: true },
          { text: "curly brackets", correct: false },
          { text: "parenthesis", correct: false },
          { text: "square brackets", correct: false },
        ],
      },

    ];


//Funtion to start game
var startGame = function () {
  startButtonEL.classList.add("hide");
  introEl.classList.add("hide");
  ContainerEl.classList.remove("hide");
  questionEl.textContent = questions[currentQuestionIndex].question;
  createAnswerBtn();
  countDown();
};

//Funtion to create answer button on each new question.
var createAnswerBtn = function () {
  answerButtonEl.innerHTML = "";
  for (var i = 0; i < questions[currentQuestionIndex].answers.length; i++) {
    var thisButton = document.createElement("BUTTON");
    thisButton.classList.add("btn");
    thisButton.textContent = questions[currentQuestionIndex].answers[i].text;
    if (questions[currentQuestionIndex].answers[i].correct) {
      thisButton.setAttribute("id", "true");
    }
    thisButton.addEventListener("click", showNextQuestion);
    answerButtonEl.append(thisButton);
  }
};

//Function to show the next question
var showNextQuestion = function () {
  if (this.getAttribute("id") === "true") {
    answerPopUpEl.classList.remove("hide");
    answerPopUpEl.textContent = "Correct! ✔️";
  } else {
    answerPopUpEl.classList.remove("hide");
    answerPopUpEl.textContent = "Wrong! ❌";
    timeLeft = timeLeft - 15;
  }
  //Increment question index
  currentQuestionIndex++;
  //Statement to check if we are on the last question
  if (currentQuestionIndex < questions.length) {
    questionEl.textContent = questions[currentQuestionIndex].question;
    createAnswerBtn();
  } else {
    endGame();
  }
};

var timeLeft = questions.length * 15;
var timeInterval;

var countDown = function () {
  timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = "Time: " + timeLeft;
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = "Time: " + timeLeft;
      timeLeft--;
    } else {
      timerEl.textContent = "Time: 0";
      alert("Time is up!");
      clearInterval(timeInterval);
      endGame();
    }
  }, 1000);
};

//Code for the end of the game
var endGame = function () {
  score = timeLeft;
  clearInterval(timeInterval);
  console.log(timeLeft);
  ContainerEl.classList.add("hide");
  endGameEl.classList.remove("hide");
  finalScoreEl.innerHTML = "Your Final Score is " + score;
};

var showHighScore = function () {
  endGameEl.classList.add("hide");
  playerStatsEl.classList.remove("hide");
  var PlayerName = localStorage.getItem("playerName");
  var score = localStorage.getItem("score");
  if (PlayerName === null || score === null) {
    return;
  }
  scoreDataEl.textContent = PlayerName + ": " + " " + score + " points!";
};


var saveData = function (event) {
  event.preventDefault();
  var playerName = document.getElementById("name-of-player").value;
  var highScore= JSON.parse(localStorage.getItem("highscore")) || [];
  var newScore = {
    playerName: playerName,
    score: score
  };

  if (playerName === "") {
    alert("Name cannot be blank");
  } else {
    // Save email and password to localStorage using `setItem()`
    highScore.push(newScore);
    console.log(highScore)
    localStorage.setItem("highscore", JSON.stringify(highScore))
     localStorage.setItem("playerName", playerName);
    localStorage.setItem("score", score);
    showHighScore();
  }
};

//Function to reset the game
var reStart = function () {
  location.reload();
};

//Event Listeners
submitButtonEl.addEventListener("click", saveData);
startButtonEL.addEventListener("click", startGame);
goBackButtonEl.addEventListener("click", reStart);