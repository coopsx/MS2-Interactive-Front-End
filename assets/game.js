const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    countRightAnswers = 0
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    if (selectedButton.dataset = correct) {
        countRightAnswers++;
    }
    document.getElementById('right-answers').innerHTML = countRightAnswers;
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [{
        question: 'The Duke of Edinburgh and the Queen were married for ____ years.',
        answers: [{
                text: '73',
                correct: true
            },
            {
                text: '72',
                correct: false
            },
            {
                text: '71',
                correct: false
            },
            {
                text: '70',
                correct: false
            },
        ]
    },
    {
        question: 'Why did National Rails tribute to Prince Philip provoke complaints?',
        answers: [{
                text: 'The website turned grey and people couldn not read it',
                correct: true
            },
            {
                text: 'train services did not stop for a minute',
                correct: false
            },
            {
                text: 'train services did stop for a minute',
                correct: false
            },
            {
                text: 'the doors did not open when at the station',
                correct: false
            }
        ]
    },
    {
        question: 'Which movie won Best Film at the Baftas 2021?',
        answers: [{
                text: 'The Mauritanian',
                correct: false
            },
            {
                text: 'Nomadland',
                correct: true
            },
            {
                text: 'The Farther',
                correct: false
            },
            {
                text: 'The Dig',
                correct: false
            }
        ]
    },
    {
        question: 'M&S is taking legal action against Aldi over its ____.',
        answers: [{
                text: 'Percy Pig Sweets',
                correct: false
            },
            {
                text: 'Colin the Caterpillar Cake',
                correct: true
            },
            {
                text: 'Ombles Chocolates',
                correct: false
            },
            {
                text: 'Advert',
                correct: false
            },
        ]
    },
    {
        question: 'What is the name of the ‘world’s biggest rabbit’, which was stolen in Worcestershire?',
        answers: [{
                text: 'Harecules',
                correct: false
            },
            {
                text: 'Darius',
                correct: true
            },
            {
                text: 'Alexander',
                correct: false
            },
            {
                text: 'Bob',
                correct: false
            },
        ]
    }
];

let countRightAnswers = 0;