var body = document.body;

let h1El = document.createElement('h1');
h1El.textContent = "Welcome to Coding-Quiz-Challenge";
h1El.setAttribute('style', 'font-size:40px; color:white; margin:center; text-align:center');
body.appendChild(h1El);



let timeLeftEl = document.getElementById('timeLeft')
timeLeftEl.setAttribute('style', 'margin:center; color: var(--hue-neutral)')
let scoreEl = document.getElementById("currentScore")
scoreEl.setAttribute('style', 'margin:center; color: var(--hue-neutral)')
let questionContainerEl = document.getElementById('question-container');
let questionEl = document.getElementById('question')
let option1El = document.getElementById('option1');
let option2El = document.getElementById('option2');
let option3El = document.getElementById('option3');
let option4El = document.getElementById('option4');
let answerEl = document.getElementById('')
let containerEl = document.getElementsByClassName('container')
let correctAnswer = document.getElementById("correct");
let incorrectAnswer = document.getElementById("incorrect");
let optionsEl = document.querySelectorAll('.options')


let questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { option: "High Text Modern Language" },
            { option: "Hypertext Markup Language" },
            { option: "Hyper Text Media Language" },
            { option: "High Texture Modern Language" },
            { correct: "Hypertext Markup Language"}
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { option: "Cascading Style Sheets" },
            { option: "Cascade Styling Sheets" },
            { option: "Cascade Style Screens" },
            { option: "Concatanated Style Sheets" },
            { correct: "Cascading Style Sheets" }
        ]
    },
    {
        question: "What does JS stand for?",
        answers: [
            { option: "Java Sreen" },
            { option: "Jada Script" },
            { option: "Java Script" },
            { option: "Java Sheets" },
            { correct: "Java Script" }
        ]
    },
    {
        question: "What is an h1",
        answers: [
            { option: "An HTML element" },
            { option: "Use to declare font" },
            { option: "A type of text" },
            { option: "None of the Above" },
            { correct: "An HTML element" }
        ]
    }
]

let startButtonEl = document.createElement('button')
startButtonEl.textContent = 'Start Quiz';
startButtonEl.className = "start-btn";
startButtonEl.setAttribute ('style', 'color:white; font-size:20px; display: flex; align-self:center; justify-content: center; text-align:center; background-color:red; padding:10px');
body.appendChild(startButtonEl);
startButtonEl = document.querySelector(".start-btn")
startButtonEl.addEventListener('click', startGame)

let score = 0;
let time = 60;
let currentQuestionIndex = 0;
let currentOptionIndex = 0;


function questionShuffler() {
    shuffledQuestions = questions.sort(() => .5 - Math.random())
}
let timerId;

function startGame() {
    startButtonEl.classList.add('hide')
    h1El.classList.add('hide')
    questionContainerEl.classList.remove('hide');
    timerId = setInterval(timer, 1000)
    timeLeftEl.textContent = time
    console.log(questions)
    displayQA(questions);
    
}

function timer() {
    time--;
    timeLeftEl.textContent = time
    if (time <= 0) {
        clearInterval(timerId) //change to end of game
        alert('Time is up! Check your final score:')
    }
}
// make some kind of loop to display questions
// also checks if the questions
function questionLoop() {

    for (let i = 0; i < questions.length; i++) {
        displayQA(questions[i])
    }
}

// replace button values with questions
function displayQA() {
    
    
        questionEl.textContent = questions[currentQuestionIndex].question
        option1El.textContent = questions[currentQuestionIndex].answers[0].option
        option2El.textContent = questions[currentQuestionIndex].answers[1].option
        option3El.textContent = questions[currentQuestionIndex].answers[2].option
        option4El.textContent = questions[currentQuestionIndex].answers[3].option

    


    // question.answers.forEach(answer => {
    // let button = document.createElement('button')
    // button.innerText = answer.text
    // button.classList.add('btn')

    //     if (answer.correct) {
    //         button.dataset.correct = answer.correct
    //     }

    //     button.addEventListener('click', selectAnswer)
    //     answerButtonsEl.appendChild(button)
    // })
}

// function LoopAnswers() {

//     for (let i = 0; i < shuffledAnswers.length; i++) {
//         displayAnswers(shuffledAnswers[i])
//     }
// }

function rightAnswer () {
    score = score+20
    scoreEl.textContent = score;
            
    currentQuestionIndex++
    setTimeout(function () {
        correctAnswer.classList.remove("hide")
    }, 0);
    setTimeout(function () {
        correctAnswer.classList.add("hide")
    }, 1000);
    if (currentQuestionIndex < questions.length) {
        displayQA()
   
    }
}

function wrongAnswer () {
    time = time - 20;
            
            currentQuestionIndex++
            setTimeout(function () {
                incorrectAnswer.classList.remove("hide")
            }, 0);
            setTimeout(function () {
                incorrectAnswer.classList.add("hide")
            }, 1000);
            if (currentQuestionIndex < questions.length) {
                displayQA()
    }
}


optionsEl.forEach(function (optionsEl) {
    optionsEl.addEventListener("click", function (event) {
        event.preventDefault()
        console.log(questions[currentQuestionIndex].answers[4].correct)
        if (event.target.textContent === questions[currentQuestionIndex].answers[4].correct) {
            rightAnswer();
            
        
        } else if (event.target.textContent !== questions[currentQuestionIndex].answers[4].correct) {
            wrongAnswer();
            }

    })
})