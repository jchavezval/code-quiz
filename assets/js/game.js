var body = document.body;

let h1El = document.createElement('h1');
h1El.textContent = "Welcome to Coding-Quiz-Challenge";
h1El.setAttribute ('style', 'font-size:40px; color:white; margin:center; text-align:center');
body.appendChild(h1El);

//countdown
let timeLeftEl = document.createElement('h3');
timeLeftEl.textContent = 'Time:'
timeLeftEl.className = 'countdown'
timeLeftEl.setAttribute ('style', 'margin:center; color: white')
body.appendChild(timeLeftEl)


// scores
let score = 0;
let time = 40;
let currentQuestionIndex = 0;

// tags

const questionContainerEl = document.getElementById('question-container');
const questionEl = document.getElementById('question')
let answerButtonsEl = document.getElementById('answer-buttons')

// const startButtonEl = document.querySelector("#start-btn").addEventListener('click', startGame) 



let shuffledQuestions;

function questionShuffler()
{
    shuffledQuestions = questions.sort(() => .5 -  Math.random())
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

// display intro
// fill in 
let startButtonEl = document.createElement('button')
startButtonEl.textContent = 'Start Quiz';
startButtonEl.className = "start-btn";
startButtonEl.style.margin = "center";
startButtonEl.setAttribute ('style', 'color:white; margin:center; text-align:center; background-color:red');
body.appendChild(startButtonEl);
document.querySelector(".start-btn")
startButtonEl.addEventListener('click', startGame)

function startGame()
{
    startButtonEl.classList.add('hide')
    h1El.classList.add('hide')
    questionContainerEl.classList.remove('hide');
    time--;
    displayQuestions();

}

// make some kind of loop to display questions
// also checks if the questions
function questionLoop()
{
    
    for(let i = 0; i < shuffledQuestions.length;i++)
    {
        displayQuestions(shuffledQuestions[i])
    }
}

// replace button values with questions
function displayQuestions(question)
{
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

