var quizQuestions = [
  {
    question: "What is the hottest planet in our Solar System?",
    choices: ["Earth", "Venus", "Mars", "Mercury"],
    correctAnswer: "Venus"
  },

  {
    question: "What year will Halleys Comet pass Earth next?",
    choices: ["2041", "2051", "2061", "2071"],
    correctAnswer: "2061"
  },

  {
    question: "How much does a full NASA space suit cost?",
    choices: ["$1 Million", "$4 Million", "$8 Million", "$12 Million"],
    correctAnswer: "$12 Million"
  },

  {
    question: "How long is one day on Venus compared to Earth?",
    choices: ["78 Days", "144 Days", "198 Days", "243 Days"],
    correctAnswer: "243 Days"
  },

  {
    question: "How fast do Neutron Stars spin per second?",
    choices: ["600", "700", "800", "900"],
    correctAnswer: "600"
  },

  {
    question: "Which two planets in our solar system have no moons?",
    choices: ["Jupiter & Saturn", "Mars & Mercury", "Mercury & Venus", "Pluto & Uranus"],
    correctAnswer: "Mercury & Venus"
  },

  {
    question: "How many years will it take for the Sun to expand and engulf Earth?",
    choices: ["7 Billion Years", "7.5 Billion Years", "8 Billion Years", "8.5 Billion Years"],
    correctAnswer: "7.5 Billion Years"
  },

  {
    question: "Why will footprints on the moon never disappear?",
    choices: ["No Wind", "No Water", "No Movement", "No Air"],
    correctAnswer: "No Wind"
  },

  {
    question: "How many known moons are there orbiting Jupiter?",
    choices: ["7", "28", "54", "79"],
    correctAnswer: "79"
  },

  {
    question: "What percent of the universe is visible from Earth?",
    choices: ["1%", "5%", "10%", "15%"],
    correctAnswer: "5%"
  }
]

var correctImages = [
  './assets/images/correct.gif',
  './assets/images/win2.gif',
  './assets/images/win3.gif',
  './assets/images/win4.gif',
  './assets/images/win5.gif',
  './assets/images/win6.gif'
]

var wrongImages = [
  './assets/images/wrong.gif',
  './assets/images/alien2.gif',
  './assets/images/predator.gif',
  './assets/images/alien.gif',
  './assets/images/predator2.gif',
  './assets/images/predator3.gif'
]

// Global Variables
var counter = 15;
var currentQuestion = 0;
var correct = 0;
var incorrect = 0;
var timer;

// Next Question Function
function nextQuestion() {

  var isQuestionOver = (quizQuestions.length - 1) === currentQuestion;
  if (isQuestionOver) {
    displayResult();

  } else {
    currentQuestion++;
    loadQuestion();
  }
}

// Create a 15 second timer
function timeUp() {
  clearInterval(timer);

  incorrect++;

  loadImage('incorrect');
  setTimeout(nextQuestion, 3 * 1000);
}

function countDown() {
  counter--;

  $('#time').html("Timer: " + counter + " seconds");

  if (counter === 0) {
    timeUp();

  }
}

// Display Questions and Answer Choices
function loadQuestion() {
  counter = 15;
  timer = setInterval(countDown, 1000);

  var question = quizQuestions[currentQuestion].question;
  var choices = quizQuestions[currentQuestion].choices;

  $('#time').html("Timer: " + counter + " seconds");
  $('#game').html(`
    <h4>${question}</h4>
    ${loadChoices(choices)}
    ${loadRemainingQuestion()}
  `);
}

function loadChoices(choices) {
  var result = '';

  for (var i = 0; i < choices.length; i++) {
    result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
  }

  return result;
}

// Go to next question regardless of answer selection

$(document).on('click', '.choice', function() {
  clearInterval(timer);
  var selectedAnswer = $(this).attr('data-answer');
  var correctAnswer = quizQuestions[currentQuestion].correctAnswer;

  if (correctAnswer === selectedAnswer) {  
      correct++;
      loadImage('correct');
      setTimeout(nextQuestion, 3 * 1000);
  } 
  else {
      incorrect++;
      loadImage('incorrect');
      setTimeout(nextQuestion, 3 * 1000);
    }  
});

// Display Results of the Trivia Game
function displayResult() {
  var result = `
    <p>Total answered correct = ${correct}</p>
    <p>Total answered incorrect = ${incorrect}</p>
    <p>Total questions = ${quizQuestions.length}</p>
    <button class="btn btn-primary" id="reset">Start Over</button>
  `;

    $('#game').html(result);
}

// Reset Game

$(document).on('click', '#reset', function() {
  counter = 15;
  currentQuestion = 0;
  correct = 0;
  incorrect = 0;
  timer = null;

  loadQuestion();
});

function loadRemainingQuestion() {
  var remainingQuestion = quizQuestions.length - (currentQuestion + 1);
  var totalQuestion = quizQuestions.length;

  return `Remaining Question: ${remainingQuestion}/${totalQuestion}`;
}

// Images for every right and wrong answer

function randomImage(images) {
  var random = Math.floor(Math.random() * images.length);
  var randomImage = images[random];
  return randomImage;
}


function loadImage(status) {
  var correctAnswer = quizQuestions[currentQuestion].correctAnswer;

  if (status === 'correct') {
    $('#game').html(`
      <p class="preload-image">Good job, you picked the right answer!</p>
      <p class="preload-image">The correct answer is <b>${correctAnswer}</b>.</p>
      <img src="${randomImage(correctImages)}"/>
    `)
  } else {
    $('#game').html(`
      <p class="preload-image">Sorry, you picked the wrong answer!</p>
      <p class="preload-image">The correct answer is <b>${correctAnswer}</b>.</p>
      <img src="${randomImage(wrongImages)}"/>
    `)
  }
}

// Start Game and load questions

$('#start').click(function() {
    $('#start').remove();
    $('#time').html(counter);
    loadQuestion();
});;