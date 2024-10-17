// Configuración de particles.js
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded - callback');
});

// Base de preguntas
const questions = [
    {
        question: "¿Cuál es el nombre tradicional del compuesto PbO₂?",
        options: ["Óxido plumboso", "Óxido de plomo (II)", "Óxido plúmbico", "Dióxido de plomo"],
        correctAnswer: "Óxido plúmbico",
        explanation: "El nombre tradicional del compuesto PbO₂ es óxido plúmbico, que indica el estado de oxidación más alto del plomo en este compuesto.",
        molecule: "PbO2"
    },
    {
        question: "¿Cómo se llama el compuesto Cu₂O en el sistema Stock?",
        options: ["Óxido de cobre (I)", "Óxido de cobre (II)", "Óxido cúprico", "Óxido cuproso"],
        correctAnswer: "Óxido cuproso",
        explanation: "En el sistema Stock, se indica el estado de oxidación del metal entre paréntesis. En Cu₂O, el cobre tiene un estado de oxidación de +1, por lo que se nombra como óxido de cobre (I).",
        molecule: "Cu2O"
    },
    {
        question: "¿Qué compuesto tiene la fórmula química P₂O₅ según el sistema tradicional y cómo se nombra en el sistema Stock?",
        options: ["Óxido fosfórico/Óxido de fósforo(V)", "Pentaóxido de difósforo/Óxido de fósforo", "Óxido fosfórico(II)/Pentóxido de fósforo", "Pentóxido de fósforo/Óxido fosfórico"],
        correctAnswer: "Óxido fosfórico/Óxido de fósforo(V)",
        explanation: "En la nomenclatura estequiométrica, se indica el número de átomos de cada elemento en el orden en que aparecen en la fórmula. Por lo tanto, P₂O₅ se nombra como pentaóxido de difósforo.",
        molecule: "P2O5"
    },
    {
        question: "¿Cuál es la fórmula correcta del arseniuro de calcio?",
        options: ["As₂Ca", "Ca₂As", "Ca₃As₂", "As₃Ca₂"],
        correctAnswer: "Ca₃As₂",
        explanation: "En el arseniuro de calcio, el calcio tiene un estado de oxidación de +2 y el arsénico de -3. Para balancear las cargas, se necesitan 3 átomos de calcio por cada 2 de arsénico, resultando en Ca₃As₂.",
        molecule: "Ca3As2"
    },
    {
        question: "¿Cómo se nombra Br₂O₃ según la nomenclatura Stock?",
        options: ["Óxido de bromo (III)", "Óxido de bromo (V)", "Óxido bromoso", "Trióxido de dibromo"],
        correctAnswer: "Óxido de bromo (III)",
        explanation: "En la nomenclatura Stock, se indica el estado de oxidación del elemento central. En Br₂O₃, el bromo tiene un estado de oxidación de +3, por lo que se nombra como óxido de bromo (III).",
        molecule: "Br2O3"
    },
    {
        question: "¿Cómo se llama el compuesto CaCO₃?",
        options: ["Cloruro de calcio", "Bicarbonato de sodio", "Nitrato de calcio", "Carbonato de calcio"],
        correctAnswer: "Carbonato de calcio",
        explanation: "CaCO₃ es la fórmula del carbonato de calcio, un compuesto formado por un ion calcio (Ca²⁺) y un ion carbonato (CO₃²⁻).",
        molecule: "CaCO3"
    },
    {
        question: "¿Cuál es el nombre correcto para el compuesto con la fórmula química CO₂?",
        options: ["Monóxido de carbono", "Dióxido de carbono", "Dióxido de azufre", "Bióxido de oxígeno"],
        correctAnswer: "Dióxido de carbono",
        explanation: "CO₂ es la fórmula del dióxido de carbono, un compuesto formado por un átomo de carbono y dos átomos de oxígeno.",
        molecule: "CO2"
    },
    {
        question: "¿Cómo se llama el compuesto NaCl?",
        options: ["Sulfato de sodio", "Nitrato de sodio", "Cloruro de sodio", "Carbonato de sodio"],
        correctAnswer: "Cloruro de sodio",
        explanation: "NaCl es la fórmula del cloruro de sodio, comúnmente conocido como sal de mesa, formado por un ion sodio (Na⁺) y un ion cloruro (Cl⁻).",
        molecule: "NaCl"
    },
    {
        question: "¿Cuál es el nombre correcto del compuesto H₂O₂?",
        options: ["Peróxido de hidrógeno", "Agua oxigenada", "Óxido de hidrógeno", "Hidruro de oxígeno"],
        correctAnswer: "Peróxido de hidrógeno",
        explanation: "H₂O₂ es la fórmula del peróxido de hidrógeno, también conocido comúnmente como agua oxigenada.",
        molecule: "H2O2"
    },
    {
        question: "¿Cuál es la fórmula del pentaóxido de dinitrógeno?",
        options: ["O₅N₂", "N₅O₂", "N₂O₅", "Ninguna de las anteriores"],
        correctAnswer: "N₂O₅",
        explanation: "El pentaóxido de dinitrógeno tiene la fórmula N₂O₅, donde hay 2 átomos de nitrógeno y 5 de oxígeno.",
        molecule: "N2O5"
    },
    {
        question: "¿Cuál es la diferencia entre el nombre tradicional y el nombre Stock para el compuesto FeO?",
        options: ["Óxido de hierro (II) / Óxido ferroso", "Óxido de hierro (III) / Óxido de hierro", "Óxido férrico / Óxido de hierro", "Óxido de hierro (IV) / Óxido ferrito"],
        correctAnswer: "Óxido de hierro (II) / Óxido ferroso",
        explanation: "Para FeO, el nombre Stock es óxido de hierro (II), indicando el estado de oxidación +2 del hierro, mientras que el nombre tradicional es óxido ferroso.",
        molecule: "FeO"
    },
    {
        question: "¿Cómo se nombra el compuesto CO₂ en el sistema estequiométrico?",
        options: ["Dióxido de carbono", "Óxido de carbono (II)", "Monóxido de carbono", "Bióxido de carbono"],
        correctAnswer: "Dióxido de carbono",
        explanation: "En el sistema estequiométrico, CO₂ se nombra como dióxido de carbono, indicando que hay dos átomos de oxígeno por cada átomo de carbono.",
        molecule: "CO2"
    },
    {
        question: "¿Cuál es el nombre tradicional del compuesto Cu₂O?",
        options: ["Óxido cuproso", "Óxido cúprico", "Óxido de cobre (III)", "Monóxido de cobre"],
        correctAnswer: "Óxido cuproso",
        explanation: "En la nomenclatura tradicional, Cu₂O se nombra como óxido cuproso, donde 'cuproso' indica el estado de oxidación más bajo del cobre (+1).",
        molecule: "Cu2O"
    }
];

// Aquí puedes implementar la lógica de tu quiz basado en las preguntas
// ...
let currentQuestions;
let currentQuestionIndex;
let score;
let timeLeft;
let timerInterval;

// Elementos del DOM
const startScreen = document.getElementById('start-screen');
const quizContainer = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit');
const feedbackContainer = document.getElementById('feedback');
const feedbackTextElement = document.getElementById('feedback-text');
const explanationElement = document.getElementById('explanation');
const nextQuestionButton = document.getElementById('next-question');
const resultsContainer = document.getElementById('results');
const correctCountElement = document.getElementById('correct-count');
const incorrectCountElement = document.getElementById('incorrect-count');
const percentageElement = document.getElementById('percentage');
const reviewElement = document.getElementById('review');
const restartButton = document.getElementById('restart');
const startButton = document.getElementById('start-btn');
const progressBar = document.getElementById('progress');
const timerElement = document.getElementById('time');

// Event Listeners
startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', submitAnswer);
nextQuestionButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartQuiz);

function startQuiz() {
    currentQuestions = getRandomQuestions(questions, 5);
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 300; // 5 minutos

    startScreen.style.display = 'none';
    quizContainer.style.display = 'block';
    feedbackContainer.style.display = 'none';
    resultsContainer.style.display = 'none';

    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
    
    showQuestion();
}

function getRandomQuestions(allQuestions, count) {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectOption(index));
        optionsElement.appendChild(button);
    });
    
    submitButton.disabled = true;
    updateProgressBar();
}

function selectOption(index) {
    const options = optionsElement.children;
    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove('selected');
    }
    options[index].classList.add('selected');
    submitButton.disabled = false;
}

function submitAnswer() {
    const selectedOption = document.querySelector('.option.selected');
    if (!selectedOption) return;
    
    const userAnswer = selectedOption.textContent;
    const question = currentQuestions[currentQuestionIndex];
    
    if (userAnswer === question.correctAnswer) {
        score++;
        showFeedback(true, "¡Correcto!");
    } else {
        showFeedback(false, `Incorrecto. La respuesta correcta es: ${question.correctAnswer}`);
    }
}

function showFeedback(isCorrect, message) {
    quizContainer.style.display = 'none';
    feedbackContainer.style.display = 'block';
    
    feedbackTextElement.textContent = message;
    feedbackTextElement.className = isCorrect ? 'correct' : 'incorrect';
    explanationElement.textContent = currentQuestions[currentQuestionIndex].explanation;
    
    // Mostrar la molécula en 3D
    showMolecule(currentQuestions[currentQuestionIndex].molecule);
}

function showMolecule(molecule) {
    const viewer = $3Dmol.createViewer(document.getElementById('molecule-viewer'), {
        backgroundColor: 'black'
    });
    
    $3Dmol.get(`https://cactus.nci.nih.gov/chemical/structure/${molecule}/sdf`, (sdf) => {
        viewer.addModel(sdf, 'sdf');
        viewer.setStyle({}, {stick: {radius: 0.15}});
        viewer.zoomTo();
        viewer.render();
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
        quizContainer.style.display = 'block';
        feedbackContainer.style.display = 'none';
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    clearInterval(timerInterval);
    quizContainer.style.display = 'none';
    feedbackContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    
    const totalQuestions = currentQuestions.length;
    const incorrectCount = totalQuestions - score;
    const percentage = (score / totalQuestions) * 100;
    
    correctCountElement.textContent = score;
    incorrectCountElement.textContent = incorrectCount;
    percentageElement.textContent = `${percentage.toFixed(2)}%`;
    
    reviewElement.innerHTML = '';
    currentQuestions.forEach((question, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');
        reviewItem.innerHTML = `
            <h3>Pregunta ${index + 1}</h3>
            <p><strong>Pregunta:</strong> ${question.question}</p>
            <p><strong>Respuesta correcta:</strong> ${question.correctAnswer}</p>
            <p><strong>Explicación:</strong> ${question.explanation}</p>
        `;
        reviewElement.appendChild(reviewItem);
    });
}

function restartQuiz() {
    startScreen.style.display = 'block';
    resultsContainer.style.display = 'none';
}

function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (timeLeft === 0) {
        clearInterval(timerInterval);
        showResults();
    } else {
        timeLeft--;
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    startScreen.style.display = 'block';
    quizContainer.style.display = 'none';
    feedbackContainer.style.display = 'none';
    resultsContainer.style.display = 'none';
});
