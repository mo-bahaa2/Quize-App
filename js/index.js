import {Quiz} from "./quiz.js"
import {Question} from "./question.js"
const categoryMenu = document.getElementById("categoryMenu");
const difficultyOptions = document.getElementById("difficultyOptions");
const questionsNumber = document.getElementById("questionsNumber");
const startQuiz = document.getElementById("startQuiz");
const quizOptionsForm = document.getElementById("quizOptions");

export let questions;
export let quiz;

startQuiz.addEventListener("click", async function() {



  quiz = new Quiz(categoryMenu.value , difficultyOptions.value , questionsNumber.value);

  questions = await quiz.gatAllQuestions()

  quizOptionsForm.classList.add("d-none")
  
  let question = new Question(0)

  question.displayQuestion()
}
)

