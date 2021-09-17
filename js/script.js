// const $optionA = $('#btn-1');
// const $optionB = $('#btn-2');
// const $optionC = $('#btn-3');
// const $optionD = $('#btn-4');
// const $mainQuestion = $('#current-question');
// const $alertDisplay = $('.alertDisplay');

const question = document.getElementById('current-question');
const choices = Array.from(document.getElementsByClassName('answerButtons'));
// console.log(choices);

let currentQuestion = [];
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Rolex is a company that specializes in what type of product?",
        choice1: "Watches",
        choice2: "Cars",
        choice3: "Computers",
        choice4: "Sports Equipment",
        answer: 1
    },
    {
        question: "A doctor with a PhD is a doctor of what?",
        choice1: "Psychology",
        choice2: "Physical Therapy",
        choice3: "Philosophy",
        choice4: "Phrenology",
        answer: 3
    },
    {
        question: "Which language is NOT Indo-European?",
        choice1: "Russian",
        choice2: "Hungarian",
        choice3: "Latvian",
        choice4: "Greek",
        answer: 2
    },
    {
        question: "After how many years would you celebrate your crystal anniversary?",
        choice1: "20",
        choice2: "15",
        choice3: "10",
        choice4: "25",
        answer: 2
    }
]

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    // console.log(availableQuestions);
    getNewQuestion()
};

function getNewQuestion() {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText =  currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', evt => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = evt.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        console.log(selectedAnswer == currentQuestion.answer);

        getNewQuestion();
    });
});

startGame();

// Grab and display random question and multiple choice options

// Need a user event for when player clicks one of the four options

// Need a message when the answer is incorrect

// Need a message when the answer is correct


// const questionsPromise = $.ajax( {
//     url: "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple"
//  }).then(
//     (data) => {
//       $mainQuestion.text(data.question);
//     },  
//     (error) => {
//         console.log('Oops something went wrong', error);
//     });
