//access the <body> elements
let body = document.body;
let score = 0;
let time = 40;
let currentQuestionIndex;


//Code-quiz tittle and instructions.
//let h1El = document.createElement('h1');
//h1El.textContent = 'Welcome to Code-Quiz!'
//h1El.setAttribute('style', 'margin:auto; font-size: 40px; text-align:center; color:blue');
//body.appendChild(h1El);


//Start Button

//let controlsButtonEl = document.createElement('div');
//let startButtonEl = document.createElement('button');

 //   console.log("hello");

//let nextButton = document.getElementById('next-btn')
//startButtonEl.addEventListener('click', startGame);
//nextButton.addEventListener('click', () => {
    //currentQuestionIndex++
    //setNextQuestion()
//})

const questionContainerEl = document.getElementById('question-container');
const questionEl = document.getElementById('question')
let answerButtonsEl = document.getElementById('answer-buttons')
let shuffledQuestions
//startButtonEl.textContent = 'Start Quiz';
//startButtonEl.className = "start-btn";
//startButtonEl.style.margin = "center";
//startButtonEl.setAttribute ('style', 'color:white; margin:center; text-align:center; background-color:red');
//body.appendChild(startButtonEl);
const startButtonEl = document.querySelector("#start-btn").addEventListener('click', startGame) 
let startButtonElment = document.querySelector("#start-btn")
let nextButton = document.querySelector('#next-btn')
 
    function startGame() 
    {
        
        startButtonElment.classList.add('hide')
        shuffledQuestions = questions.sort(() => .5 -  Math.random())
        questionContainerEl.classList.remove('hide');
        
        setNextQuestion()
    }

    function setNextQuestion() {
        for(currentQuestionIndex = 0;currentQuestionIndex<shuffledQuestions.length;currentQuestionIndex++)
        {
                resetState()
                showQuestion(shuffledQuestions[currentQuestionIndex]);
        }
        
    }

    function showQuestion(question) {
        console.log(question.question)
        questionEl.textContent = question.question
        question.answers.forEach(answer => {
        let button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')

        if (answer.correct) {
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click', selectAnswer)
        answerButtonsEl.appendChild(button)
    })
    }
    
    function resetState() {
       nextButton.classList.add('hide')
        while (answerButtonsEl.firstChild) {
            answerButtonsEl.removeChild
            (answerButtonsEl.firstChild)
        }        
    }

    function selectAnswer(e) {
        let selectedButton = e.target
        let correct = selectedButton.dataset.correct
        setStatusClass(document.body, correct)
        Array.from(answerButtonsEl.children).forEach(button => {
            setStatusClass(button, button.dataset.correct)
        })
        if (shuffledQuestions.length > currentQuestionIndex + 1) {
            nextButton.classList.remove('hide')
        } else {
            startButtonElment.innerText = 'Restart'
            startButtonElment.classList.remove('hide')
        }
        }
    
    function clearStatusClass(element)
    {
        element.classList.remove('correct')
        element.classList.remove('wrong')
    }

    function setStatusClass(element, correct) {
        clearStatusClass(element)
        if (correct) {
            element.classList.add('correct')
        } else {
            element.classList.add('wrong')
        }
    }
    


const questions = [
    {
        question : "What does HTML stand for?",
        answers: [
            {text: "High Text Modern Language", correct: false},
            {text: "Hypertext Markup Language", correct: true},
            {text: "Hyper Text Media Language", correct: false},
            {text: "High Texture Modern Language", correct: false}
        ]
    },
    {

        question : "What does CSS stand for?",
        answers: [
           {text: "Cascading Style Sheets", correct: true},
           {text: "Cascade Styling Sheets", correct: false},
           {text: "Cascade Style Screens", correct: false},
           {text: "Concatanated Style Sheets", correct: false}
        ]
    },
    {
        question : "What does JS stand for?",
        answers: [
            {text: "Java Sreen", correct: false},
            {text: "Jada Script", correct: false},
            {text: "Java Script", correct: true},
            {text: "Java Sheets", correct: false}
        ]
    },
    {
        question : "What is an h1",
        answers: [
            {text: "An HTML element", correct: true},
            {text: "Use to declare font", correct: false},
            {text: "A type of text", correct: false},
            {text: "None of the Above", correct: false}
        ]
    }
    ]

   
  //  counter--;
    
//});

// submit button

//let submitButtonEl = document.createElement('button');
//submitButtonEl.textContent = 'Get Score';
//submitButtonEl.className = "submit-btn", "hide";
//submitButtonEl.setAttribute ('style', 'color:white; margin:auto; text-align:center; background-color:red');
//controlsButtonEl.appendChild(submitButtonEl);
//submitButtonEl.addEventListener('click', function() {


//quiz questions
//let questionContainerEl = document.createElement('div');
 //   questionContainerEl.className = "hide";
  //  body.appendChild(questionContainerEl);

//let quizQuestionEl = document.createElement('div');
 //   quizQuestionEl.setAttribute ('style', 'margin:auto; width:50%; text-align:center;');
  //  questionContainerEl.appendChild(quizQuestionEl);

//let answerButtonEl = document.createElement('div');
  //  answerButtonEl.className = "answer-buttons", "btn-grid";
   // quizQuestionEl.appendChild(answerButtonEl);




 //  let currentQuestion = 
  //  function renderQuestion(questions) {

 //       for (let i=0; i<=questions.length; i++);
  //          if (question[0]) {
  //              ;
  //          } else {
   //             alert("Time is Up!  Game Over.")
  //          }
 //  }



//startButEl.addEventListener('click', function() {

//displaying current count on the page
//let currCount = function () {
 //   currCount++;
   // currCount();
//}
//}



//function count


// counter
// let counter = 60
// let countdown = function(){
// console.log(counter);
//counter--;
//if (counter === 0) {
//    alert("Time is up!");
  //  clearInterval(startCountdown);
   // };/
//};
//};

