// quiz.js

// Variables for quiz questions and answers
const quizData = [
    {  
        question: "What is the main theme of the story?",  
        a: "Love",  
        b: "Adventure",  
        c: "Mystery",  
        d: "Friendship",  
        correct: "a"
    },
    {  
        question: "How does the main character develop throughout the story?",  
        a: "They become stronger",  
        b: "They stay the same",  
        c: "They become weaker",  
        d: "They become more selfish",  
        correct: "a"
    },
    {  
        question: "What is the setting of the story?",  
        a: "Past",  
        b: "Present",  
        c: "Future",  
        d: "A fantasy world",  
        correct: "d"
    },
    {  
        question: "Who is the antagonist in the story?",  
        a: "A family member",  
        b: "A friend",  
        c: "An unknown force",  
        d: "Nature",  
        correct: "c"
    },
    {  
        question: "What is the climax of the story?",  
        a: "The main character's death",  
        b: "The revelation of a secret",  
        c: "The ultimate battle",  
        d: "A moment of realization",  
        correct: "b"
    },
    {  
        question: "What literary device is most prominent in this story?",  
        a: "Metaphor",  
        b: "Irony",  
        c: "Foreshadowing",  
        d: "Symbolism",  
        correct: "d"
    },
    {  
        question: "What is the story's resolution?",  
        a: "Everything is solved neatly",  
        b: "Some issues remain unresolved",  
        c: "The main character is left wondering",  
        d: "There is no resolution",  
        correct: "b"
    },
    {  
        question: "Which character provides comic relief?",  
        a: "The hero",  
        b: "The best friend",  
        c: "The sidekick",  
        d: "The villain",  
        correct: "c"
    },
    {  
        question: "What is the moral lesson of the story?",  
        a: "Trust no one",  
        b: "Believe in yourself",  
        c: "Love conquers all",  
        d: "Be wary of strangers",  
        correct: "b"
    },
    {  
        question: "How does the story start?",  
        a: "With a hook",  
        b: "With background information",  
        c: "In media res",  
        d: "With a prologue",  
        correct: "a"
    },
    {  
        question: "What tone does the author use?",  
        a: "Serious",  
        b: "Humorous",  
        c: "Sarcastic",  
        d: "Melancholic",  
        correct: "b"
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            showResults();
        }
    }
});

function showResults() {
    quiz.innerHTML = `  
        <h2>You scored ${score} out of ${quizData.length}.</h2>
        <h3>Your percentage: ${(score / quizData.length) * 100}%</h3>
        <h3>${getRecommendation()}</h3>
        <button onclick="location.reload()">Reload Quiz</button>
    `;
}

function getRecommendation() {
    const percentage = (score / quizData.length) * 100;
    if(percentage >= 80) {
        return 'Excellent! You have a great understanding of storytelling.';
    } else if(percentage >= 50) {
        return 'Good job! You know quite a bit about storytelling.';
    } else {
        return 'Keep reading more stories to improve your knowledge!';
    }
}
