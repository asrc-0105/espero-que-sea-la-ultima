// Configuración de particles.js
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded - callback');
});

// Base de preguntas
const questions = [
    {
        question: "¿Cuál es el nombre tradicional del compuesto PbO2",
        options: ["Óxido plumboso", "Óxido de plomo (II)", "Óxido plúmbico", "Dióxido de plomo"],
        correctAnswer: "Óxido plúmbico",
        explanation: "El nombre tradicional del compuesto PbO₂ es óxido plúmbico, que indica el estado de oxidación más alto del plomo en este compuesto.",
        molecule: "PbO2"
    },
    {
        question: "¿Cómo se llama el compuesto Cu₂O en el sistema stock?",
        options: ["Óxido de cobre (I)", "Óxido de cobre (II)", "Óxido cúprico", "Óxido cuproso"],
        correctAnswer: "Óxido cuproso",
        explanation: "En el sistema Stock, se indica el estado de oxidación del metal entre paréntesis. En Cu₂O, el cobre tiene un estado de oxidación de +1, por lo que se nombra como óxido de cobre (I).",
        molecule: "Cu2O"
    },
    {
        question: "¿Que compuesto tiene la fórmula química P₂O₅ según el sistema tradicional y cómo se nombre en el sistema stock?",
        options: ["Óxido fosfórico/Óxido de fósforo(V)", "Pentaóxido de difósforo/óxido de fósforo", "Óxido fosfórico(II)/Pentóxido de fósforo", "Pentóxido de fósforo/óxido fosfórico"],
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
        question: "¿Cómo se nombra Br₂O₃ según la nomenclatura stock?",
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
        options: ["Monoxido de carbono", "Dioxido de carbono", "Dióxido de azufre", "Bióxido de oxígeno"],
        correctAnswer: "Dioxido de carbono",
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
        question: "¿Cuál  es el nombre correcto del compuesto H₂O₂?",
        options: ["Peróxido de hidrógeno", "Agua oxigenada", "Óxido de hidrógeno", "Hidruro de oxígeno"],
        correctAnswer: "Peróxido de hidrógeno",
        explanation: "H₂O₂ es la fórmula del peróxido de hidrógeno, también conocido comúnmente como agua oxigenada.",
        molecule: "H2O2"
    },
    {
        question: "¿Cuál es la fórmula del pentaóxido de dinitrógeno?",
        options: ["O5N2", "N5O2", "N2O5", "Ninguna de las anteriores"],
        correctAnswer: "N2O5",
        explanation: "El pentaóxido de dinitrógeno tiene la fórmula N2O5, donde hay 2 átomos de nitrógeno y 5 de oxígeno.",
        molecule: "N2O5"
    },
    {
        question: "¿Cuál es la diferencia entre el nombre tradicional y el nombre stock para el compuesto FeO?",
        options: ["Óxido de hierro (II) / Óxido ferroso", "Óxido de hierro (III) / Óxido de hierro", "Óxido férrico / Óxido de hierro", "Óxido de hierro (IV) / Óxido ferrito"],
        correctAnswer: "Óxido de hierro (II) / Óxido ferroso",
        explanation: "Para FeO, el nombre stock es óxido de hierro (II), indicando el estado de oxidación +2 del hierro, mientras que el nombre tradicional es óxido ferroso.",
        molecule: "FeO"
    },
    {
        question: "¿Cómo se nombra el compuesto CO2 en el sistema estequiométrico?",
        options: ["Dióxido de carbono", "Óxido de carbono (II)", "Monóxido de carbono", "Bióxido de carbono"],
        correctAnswer: "Dióxido de carbono",
        explanation: "En el sistema estequiométrico, CO2 se nombra como dióxido de carbono, indicando que hay dos átomos de oxígeno por cada átomo de carbono.",
        molecule: "CO2"
    },
    {
        question: "¿Qué compuesto tiene la fórmula química P2O5 según el sistema tradicional y cómo se nombra en el sistema stock?",
        options: ["Óxido fosfórico / Óxido de fósforo (V)", "Pentóxido de fósforo / Óxido de fósforo (IV)", "Óxido de difósforo / Óxido de fósforo (VI)", "Pentóxido de fósforo / Óxido de fósforo (II)"],
        correctAnswer: "Óxido fosfórico / Óxido de fósforo (V)",
        explanation: "P2O5 se nombra como óxido fosfórico en el sistema tradicional y óxido de fósforo (V) en el sistema stock, indicando el estado de oxidación +5 del fósforo.",
        molecule: "P2O5"
    },
    {
        question: "¿Cuál es el nombre tradicional del compuesto Cu2O?",
        options: ["Óxido cuproso", "Óxido cúprico", "Óxido de cobre (III)", "Monóxido de cobre"],
        correctAnswer: "Óxido cuproso",
        explanation: "En la nomenclatura tradicional, Cu2O se nombra como óxido cuproso, donde 'cuproso' indica el estado de oxidación más bajo del cobre (+1).",
        molecule: "Cu2O"
    },
    {
        question: "¿Qué reglas se deben seguir para nombrar un compuesto binario formado por un metal y un no metal?",
        options: [
            "Se nombra primero el metal y luego el no metal, cambiando la terminación del no metal a '-uro.'",
            "Se nombra primero el no metal y luego el metal, manteniendo el nombre original.",
            "Se utilizan prefijos para indicar el número de átomos de cada elemento.",
            "No se considera la valencia de los elementos al nombrarlo."
        ],
        correctAnswer: "Se nombra primero el metal y luego el no metal, cambiando la terminación del no metal a '-uro.'",
        explanation: "En la nomenclatura de compuestos binarios metal-no metal, se nombra primero el metal (sin cambios) y luego el no metal cambiando su terminación a '-uro' para indicar que es un anión.",
        molecule: "NaCl"
    },
    {
        question: "¿Cómo se diferencia la nomenclatura de un compuesto binario iónico y uno covalente?",
        options: [
            "Los compuestos iónicos se nombran usando el nombre del metal seguido del nombre del no metal con terminación '-uro,' mientras que los covalentes utilizan prefijos para indicar la cantidad de átomos.",
            "Ambos se nombran de la misma manera, solo cambiando la terminación de los no metales.",
            "La nomenclatura iónica siempre incluye el prefijo 'di-' antes del nombre del metal.",
            "Los compuestos covalentes no tienen un nombre específico y se denominan como mezclas."
        ],
        correctAnswer: "Los compuestos iónicos se nombran usando el nombre del metal seguido del nombre del no metal con terminación '-uro,' mientras que los covalentes utilizan prefijos para indicar la cantidad de átomos.",
        explanation: "La principal diferencia es que los compuestos iónicos se nombran sin prefijos (a menos que sea necesario especificar), mientras que los covalentes usan prefijos para indicar la cantidad de átomos de cada elemento.",
        molecule: "H2O"
    },
    {
        question: "¿Qué criterio se usa para determinar el orden de los elementos en la nomenclatura de un compuesto binario?",
        options: [
            "Se nombra primero el elemento más electropositivo (metal) y luego el más electronegativo (no metal).",
            "Se nombra primero el elemento con mayor número atómico y luego el de menor número atómico.",
            "El orden se determina alfabéticamente según los nombres de los elementos.",
            "Se nombra primero el elemento que aparece en la fórmula química más a la izquierda."
        ],
        correctAnswer: "Se nombra primero el elemento más electropositivo (metal) y luego el más electronegativo (no metal).",
        explanation: "En la nomenclatura de compuestos binarios, se nombra primero el elemento más electropositivo (generalmente el metal) seguido del más electronegativo (generalmente el no metal).",
        molecule: "CaF2"
    },
    {
        question: "¿Cuál es la fórmula química del cloruro de sodio?",
        options: ["NaCl", "ClNa", "Na2Cl", "NaCl2"],
        correctAnswer: "NaCl",
        explanation: "El cloruro de sodio tiene la fórmula NaCl, donde Na representa el sodio y Cl el cloro.",
        molecule: "NaCl"
    },
    
    },
    {
        question: "¿Cuál es la fórmula química del óxido de aluminio?",
        options: ["Al2O3", "AlO", "Al3O2", "AlO3"],
        correctAnswer: "Al2O3",
        explanation: "El óxido de aluminio tiene la fórmula Al2O3, donde el aluminio tiene un estado de oxidación de +3 y el oxígeno de -2.",
        molecule: "Al2O3"
    },
    {
        question: "¿Cómo se nombra el compuesto NH3 según la nomenclatura tradicional?",
        options: ["Amoniaco", "Nitruro de hidrógeno", "Trihidruro de nitrógeno", "Azano"],
        correctAnswer: "Amoniaco",
        explanation: "NH3 es conocido tradicionalmente como amoniaco, aunque su nombre sistemático es trihidruro de nitrógeno.",
        molecule: "NH3"
    },
    {
        question: "¿Cuál es el nombre del compuesto HCl en disolución acuosa?",
        options: ["Ácido clorhídrico", "Cloruro de hidrógeno", "Ácido muriático", "Clorhidrato"],
        correctAnswer: "Ácido clorhídrico",
        explanation: "HCl en disolución acuosa se conoce como ácido clorhídrico, mientras que en estado gaseoso se llama cloruro de hidrógeno.",
        molecule: "HCl"
    },
    {
        question: "¿Qué fórmula química corresponde al hidróxido de potasio?",
        options: ["KOH", "K(OH)2", "K2OH", "KOOH"],
        correctAnswer: "KOH",
        explanation: "El hidróxido de potasio tiene la fórmula KOH, donde K es el potasio y OH es el grupo hidroxilo.",
        molecule: "KOH"
    },
    {
        question: "¿Cómo se nombra el compuesto  MgCl2 según la nomenclatura stock?",
        options: ["Cloruro de magnesio", "Dicloruro de magnesio", "Cloruro de magnesio (II)", "Magnesio dicloruro"],
        correctAnswer: "Cloruro de magnesio",
        explanation: "En la nomenclatura stock, MgCl2 se nombra como cloruro de magnesio, ya que el magnesio solo tiene un estado de oxidación común (+2).",
        molecule: "MgCl2"
    },
    {
        question: "¿Cuál es la fórmula química del óxido de hierro (III)?",
        options: ["Fe2O3", "FeO", "Fe3O4", "FeO3"],
        correctAnswer: "Fe2O3",
        explanation: "El óxido de hierro (III) tiene la fórmula Fe2O3, donde el hierro tiene un estado de oxidación de +3.",
        molecule: "Fe2O3"
    },
    {
        question: "¿Qué nombre recibe el compuesto CH4 según la nomenclatura sistemática?",
        options: ["Metano", "Monohidruro de carbono", "Tetrahidruro de carbono", "Carbano"],
        correctAnswer: "Metano",
        explanation: "CH4 se nombra como metano en la nomenclatura sistemática de hidrocarburos, siendo el alcano más simple.",
        molecule: "CH4"
    },
    {
        question: "¿Cuál es la fórmula química del sulfato de calcio?",
        options: ["CaSO4", "Ca2SO4", "CaS", "CaSO3"],
        correctAnswer: "CaSO4",
        explanation: "El sulfato de calcio tiene la fórmula CaSO4, donde Ca es el calcio y SO4 es el ion sulfato.",
        molecule: "CaSO4"
    },
    {
        question: "¿Cómo se nombra el compuesto N2O según la nomenclatura sistemática?",
        options: ["Óxido de dinitrógeno", "Monóxido de dinitrógeno", "Óxido nitroso", "Dióxido de nitrógeno"],
        correctAnswer: "Monóxido de dinitrógeno",
        explanation: "N2O se nombra sistemáticamente como monóxido de dinitrógeno, aunque es comúnmente conocido como óxido nitroso.",
        molecule: "N2O"
    },
    {
        question: "¿Cuál es la fórmula química del nitrato de plata?",
        options: ["AgNO3", "Ag2NO3", "AgNO2", "Ag(NO3)2"],
        correctAnswer: "AgNO3",
        explanation: "El nitrato de plata tiene la fórmula AgNO3, donde Ag es la plata y NO3 es el ion nitrato.",
        molecule: "AgNO3"
    }
];

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
