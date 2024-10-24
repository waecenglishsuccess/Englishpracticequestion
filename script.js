// Array of quiz questions on Accounting Cycle
const questions = [
    {
        question: "What is the first step in the accounting cycle?",
        options: ["Prepare financial statements", "Analyze transactions", "Journalize entries"],
        answer: "Analyze transactions"
    },
    {
        question: "What is the purpose of a trial balance?",
        options: ["To correct errors", "To list account balances", "To close accounts"],
        answer: "To list account balances"
    },
    {
        question: "Which document records all business transactions in chronological order?",
        options: ["General Ledger", "Journal", "Balance Sheet"],
        answer: "Journal"
    },
    {
        question: "What is the final step of the accounting cycle?",
        options: ["Prepare financial statements", "Post to ledger", "Close accounts"],
        answer: "Close accounts"
    },
    {
        question: "What is the purpose of adjusting entries?",
        options: ["To correct errors", "To update accounts", "To transfer account balances"],
        answer: "To update accounts"
    }
];

let currentQuestionIndex = 0;
let timer;
let timeLeft = 10;

// Select DOM elements
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const timerElement = document.getElementById('timer');
const nextButton = document.getElementById('next-button');

// Start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    showQuestion();
}

// Display the current question
function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectOption(option));
        optionsContainer.appendChild(button);
    });

    startTimer();
}

// Reset the state for the next question
function resetState() {
    clearInterval(timer);
    optionsContainer.innerHTML = '';  // Clear previous options
    nextButton.classList.add('hidden');  // Hide next button until the question is answered
    timeLeft = 10;
    timerElement.innerText = timeLeft;  // Reset timer
}

// Handle option selection
function selectOption(selectedOption) {
    clearInterval(timer);  // Stop the timer when an option is selected
    const correctAnswer = questions[currentQuestionIndex].answer;

    // Disable all options after selecting an answer
    document.querySelectorAll('.option').forEach(button => {
        button.disabled = true;
    });

    if (selectedOption === correctAnswer) {
        alert("Correct!");
    } else {
        alert("Wrong! The correct answer was: " + correctAnswer);
    }

    // Show next button after answering
    nextButton.classList.remove('hidden');
}

// Move to the next question
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();  // Load next question
    } else {
        alert("Quiz finished!");
        nextButton.classList.add('hidden');  // Hide the button after quiz completion
    }
});

// Start the countdown timer
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerText = timeLeft;  // Update the timer display
        if (timeLeft <= 0) {
            clearInterval(timer);
            selectOption("");  // If time runs out, force submission
        }
    }, 1000);
}

// Start the quiz when the page loads
startQuiz();