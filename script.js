const quizData = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    correct: 3
  },
  {
    question: "What does CSS stand for?",
    options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
    correct: 1
  },
  {
    question: "What does HTML stand for?",
    options: ["Hypertext Markup Language", "Hypertext Markdown Language", "Hyperloop Machine Language", "Helicopters Terminals Motorboats Lamborginis"],
    correct: 0
  },
  {
    question: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "none of the above"],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option-btn");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  feedbackEl.textContent = "";
  nextBtn.style.display = "none";
  const current = quizData[currentQuestion];
  questionEl.textContent = current.question;
  optionBtns.forEach((btn, idx) => {
    btn.textContent = current.options[idx];
    btn.disabled = false;
    btn.style.backgroundColor = "#eee";
  });
}

function selectAnswer(selectedIndex) {
  const current = quizData[currentQuestion];
  optionBtns.forEach(btn => btn.disabled = true);

  if (selectedIndex === current.correct) {
    feedbackEl.textContent = "Correct!";
    feedbackEl.style.color = "green";
    score++;
    optionBtns[selectedIndex].style.backgroundColor = "#b2f2bb";
  } else {
    feedbackEl.textContent = "Wrong!";
    feedbackEl.style.color = "red";
    optionBtns[selectedIndex].style.backgroundColor = "#ffa8a8";
    optionBtns[current.correct].style.backgroundColor = "#b2f2bb";
  }

  nextBtn.style.display = "inline-block";
  scoreEl.textContent = `Score: ${score} / ${quizData.length}`;
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    quizEnd();
  }
}

function quizEnd() {
  questionEl.textContent = "Quiz Completed!";
  optionBtns.forEach(btn => btn.style.display = "none");
  feedbackEl.textContent = `Your final score is ${score} out of ${quizData.length}.`;
  nextBtn.style.display = "none";
}

loadQuestion();
