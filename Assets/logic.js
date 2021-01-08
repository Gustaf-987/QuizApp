// const highScoreButton = document.getElementById("#highScoreButton")
// var countDownTimer = document.querySelector("#countDownTimer")

// var secondsLeft = 10;

// timer =60s;
// if timer ===0 game over
// else time left -penalty

// var questions = [
//     {
//         title: "question",
//         choices: ["", ""],
//         answer: ""
//     }
// ]



// function setTime() {
//     var timerInterval = setInterval(function() {
//       secondsLeft--;
//       countDownTimer.textContent = secondsLeft + " Seconds Remaining" ;
  
//       if(secondsLeft === 0) {
//         clearInterval(timerInterval);
//         sendMessage();
//       }
  
//     }, 1000);
//   }

// function sendMessage() {
//     countDownTimer.textContent = " ";
//     var FAILURE = document.createElement("FAILURE");
//     FAILURE.setAttribute("src","Failure");
//     countDownTimer.appendChild(FAILURE);
  
// }
  
// setTime();

const startButton = document.getElementById("startbtn");
const nextButton =document.getElementById("nextbtn")
const questionContainerElement = document.getElementById("questionContainer");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answerbtn");

let shuffledQuestions, currentQuesitonIndex

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () =>{
  currentQuesitonIndex++
  setNextQuestion()
})

function startGame(){
  startButton.classList.add("hide")
  shuffledQuestions = questions.sort(() => Math.random() -.5)
  currentQuesitonIndex = 0
  questionContainerElement.classList.remove("hide")
  setNextQuestion()
}

function setNextQuestion(){
  resetState()
  showQuestion(shuffledQuestions[currentQuesitonIndex])
}

function showQuestion(question){
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement("button")
    button.innerText = answer.text
    button.classList.add("btn")
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    answerButtonsElement.appendChild(button)
  })

}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add("hide")
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
  }
}

function selectAnswer(e){
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuesitonIndex +1 ){
    nextButton.classList.remove("hide")
  } else {
    startButton.innerText = "Restart"
    startButton.classList.remove("hide")
  }
}

function setStatusClass(element, correct){
  clearStatusClass(element)
  if (correct){
    element.classList.add("correct")
  } else {
    element.classList.add("wrong")
  }
}

function clearStatusClass(element){
  element.classList.remove("correct")
  element.classList.remove("wrong")
}

const questions =[
  {
    question: "testing",
    answers: [
      {text: "test", correct: false},
      {text: "test", correct: true},
      {text: "test", correct: false},
      {text: "test", correct: false}
    ]
  },
  {
    question: "testing",
    answers: [
      {text: "test", correct: false},
      {text: "test", correct: true},
      {text: "test", correct: false},
      {text: "test", correct: false}
    ]
  },
  {
    question: "testing",
    answers: [
      {text: "test", correct: false},
      {text: "test", correct: true},
      {text: "test", correct: false},
      {text: "test", correct: false}
    ]
  },
  {
    question: "testing",
    answers: [
      {text: "test", correct: false},
      {text: "test", correct: true},
      {text: "test", correct: false},
      {text: "test", correct: false}
    ]
  }
]