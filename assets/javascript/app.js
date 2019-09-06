var quizQuestions = [
  {
  questions: "What is the hottest planet in our Solar System?",
  choices: ["Earth", "Venus", "Mars", "Mercury"],
  correctAnswer: ["Venus"]
  },

  {
    questions: "What year will Halleys Comet pass Earth next?",
    choices: ["2041", "2051", "2061", "2071"],
    correctAnswer: ["2061"]
  },

  {
    questions: "How much does a full NASA space suit cost?",
    choices: ["$1 Million", "$4 Million", "$8 Million", "$12 Million"],
    correctAnswer: ["$12 Million"]
  },

  {
    questions: "How long is one day on Venus compared to Earth?",
    choices: ["78 Days", "144 Days", "198 Days", "243 Days"],
    correctAnswer: ["243 Days"]
  },

  {
    questions: "How fast do Neutron Stars spin per second?",
    choices: ["600", "700", "800", "900"],
    correctAnswer: ["243 Days"]
  }
]

// Global Variables
var counter = 60;
var currentQuestion = 0;
var correct = 0;
var incorrect = 0;
var timer;