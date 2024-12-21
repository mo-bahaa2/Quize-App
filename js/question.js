import { questions } from "./index.js";
import { quiz } from "./index.js";
const questionsContainer = document.getElementById("questionsContainer");
export class Question {

  constructor(index) {

    this.index = index;

    this.question = questions[this.index].question;

    this.category = questions[this.index].category; 

    this.correct_answer = questions[this.index].correct_answer;

    this.incorrect_answers = questions[this.index].incorrect_answers;

    this.difficulty = questions[this.index].difficulty

    this.allChoices = [ this.correct_answer , ...this.incorrect_answers ].sort()

  }


  displayQuestion() {



    let box = `
    
        <div
      class="question shadow-lg col-lg-6 offset-lg-3  p-4 rounded-3 d-flex flex-column justify-content-center align-items-center gap-3 animate__animated animate__bounceIn"
    >
      <div class="w-100 d-flex justify-content-between">
        <span class="btn btn-category">${this.category}</span>
        <span class="fs-6 btn btn-questions">${this.index + 1} of ${questions.length} Questions</span>
      </div>
      <h2 class="text-capitalize h4 text-center">${this.question}</h2>  
      <ul class="choices w-100 list-unstyled m-0 d-flex flex-wrap text-center">
            ${this.allChoices.map((Choice) => `<li>${Choice}</li>`).join(" ")}

      </ul>
      <h2 class="text-capitalize text-center score-color h3 fw-bold"><i class="bi bi-emoji-laughing"></i> Score: ${quiz.score}</h2>        
    </div>
    
    `;

questionsContainer.innerHTML = box
    const allChoicesLi = document.querySelectorAll(".question li");
    allChoicesLi.forEach((li) => {
      li.addEventListener("click" , (e)=> {
          console.log(e.target);
          
        this.checkAnswer(e.target)


      })
    })


   }




   checkAnswer(choice) {


    if (choice.innerHTML == this.correct_answer) {
      console.log("correct");
      quiz.score++
      console.log(quiz.score);
      choice.classList.add("correct");
      
      
    } else {
      console.log("wrong");
      choice.classList.add("wrong");
      
    }

this.animateQuestion(choice)


    this.index++








    
    setTimeout( ()=> {

      this.nextQuestion()
    } , 700)
    
    setTimeout( 

      this.nextQuestion
    , 700)

  }


   animateQuestion(element) {

// document.querySelector(".question").classList.remove("animate__bounceIn");
// document.querySelector(".question").classList.add("animate__backOutLeft");


// document
//   .querySelector(".question")
//   .classList.replace("animate__bounceIn", "animate__backOutLeft")

  element
    .closest(".question")
    .classList.replace("animate__bounceIn", "animate__backOutLeft");


   }


   nextQuestion() { 

      if(this.index < questions.length) {


    let newQuestion = new Question(this.index)
    newQuestion.displayQuestion()
    

      } else {

        this.showResult()
        

      }
   }


   showResult() {
    let box = `
    
     <div id="tryAgainContainer" class="text-center text-white">
              <h1>Your Score is <span>${quiz.score}</span></h1>
              <button class="btn btn-danger" id="tryAgainBtn">Try Again</button>
          </div> 
    

    `;
questionsContainer.innerHTML = box

const tryAgainBtn = document.getElementById("tryAgainBtn");
tryAgainBtn.addEventListener("click" , function() {
window.location.reload()
})

   }
}

