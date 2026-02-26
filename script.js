// JavaScript Logic for Quiz Scoring and Form Handling

// Keeping track of the score
let score = 0;

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    const formData = new FormData(event.target);
    const userAnswer = formData.get('answer');
    checkAnswer(userAnswer);
}

// Function to check the answer
function checkAnswer(answer) {
    const correctAnswer = 'correctAnswer'; // Replace with actual logic to get the correct answer

    if (answer === correctAnswer) {
        score++;
        alert('Correct! Your score is now: ' + score);
    } else {
        alert('Incorrect. Your score is still: ' + score);
    }
}

// Event listener for form submission
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', handleFormSubmit);
}