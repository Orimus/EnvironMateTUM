
const MenuContainer = document.getElementById("menu");
const Container = document.getElementById("container");
const restartButton = document.getElementById("restart-btn");
const answerButton = document.getElementById("answer-btn");
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const ScoreElement = document.getElementById("score");
const EingabeElement = document.getElementById("guess-answer");
const infoButton = document.getElementById("info")
let shuffledQuestions;
let currentIndex;
let score = 0;
let currentGuessAnswer;
let currentExpl;

const questions = [
    /*
    {
        type: "singleChoice",
        question: "Wie alt bist du?(12)",
        answers: [
            { text: "9", correct: false },
            { text: "11", correct: false },
            { text: "10", correct: false },
            { text: "12", correct: true }
        ]
    },
    {
        type: "singleChoice",
        question: "Wie alt bist du?(9)",
        answers: [
            { text: "9", correct: true },
            { text: "11", correct: false },
            { text: "10", correct: false },
            { text: "12", correct: false }
        ]
    },
    {
        type: "singleChoice",
        question: "Wie alt bist du?(10)",
        answers: [
            { text: "9", correct: false },
            { text: "11", correct: false },
            { text: "10", correct: true },
            { text: "12", correct: false }
        ]
    },
    {
        type: "singleChoice",
        question: "Wie alt bist du?(11)",
        answers: [
            { text: "9", correct: false },
            { text: "11", correct: true },
            { text: "10", correct: false },
            { text: "12", correct: false }
        ]
    },
    {
        type: "guess",
        question: "Wie viel Tonnen (1000kg = 1t) Müll verurscht Deutschland pro Jahr?",
        answer: 100

    }, */
    {
        type: "singleChoice",
        question: "Durch die Erwärmung der Erde schmilzt Schnee und Eis an den Polkappen (Arktis und Antarktis). Welche Auswirkungen hat dies auf die Weltmeere?",
        answers: [
            { text: "gar keine, da der Wasserspiegel immer konstant bleibt", correct: false },
            { text: "gar keine, da beide Pole schwimmen, und daher kein neues Wasser verdrängt wird", correct: false },
            { text: "ganze Regionen werden überflutet, da der Meeresspiegel einige Zentimeter steigt", correct: true },
            { text: "Die Zugspitze, Deutschlands höchster Berg wird überflutet, da der Meeresspiegel steigt.", correct: false }
        ],
        expl: "Eine Studie der USA hat berechnet, dass wenn der gesamte Schnee- und Eisvorrat der Erde abschmilzt, der Meeresspiegel sogar um bis zu 66 m steigen wird. Dann ständen sogar Sädte wie Berlin oder Dortmund unter Wasser."
    },



    {
        type: "ampel",
        question: "Für deine Mittagspause hat dir deine Mutter geld mitgegeben, damit du dir einen Saft kaufen kannst. Multivitaminsaft bietet dein Kiosk in 3 Ausführungen an:",
        answers: [
            { text: "Pfandfreie Plastikflasche", correct: "wrong" },
            { text: "Einweg-Plastikflasche", correct: "ok" },
            { text: "Mehrweg-Plastikflasche", correct: "correct" },
        ],
        expl: "Die Mehrwegplastikflasche kann bis zu 25 mal wieder sauber gemacht und neu befüllt werden. Die Einweg-Pfandflasche wird immerhin recycelt, aber um 1 neue Plastikflasche herzustellen braucht man viel nues Plastik, da Plastikflaschen nur zu etzwa 25 % Rrecyceltem material bestehen. Eine pfandfreie Plastikflasche landet oft im normalen Hausmüll und wird verbrannt. Übrigens: Auch wenn du Plastikmüll in den Plastikcontainer wirfst, wird er nicht immer recycelt. Weniger als die Hälfte des Plastikmülls wird tatsächlich zu neuem Plastik verarbeitet."
    }
]

updateScore();
restartButton.addEventListener("click", startGame);
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", setNextQuestion);
answerButton.addEventListener("click", selectAnswerGuess);
infoButton.addEventListener("click", showInfo)



function startGame() {
    MenuContainer.classList.add("hide");
    Container.classList.remove("hide");
    console.log("Start");
    score = 0;
    updateScore();
    startButton.classList.add("hide");
    restartButton.classList.add("hide");
    questionContainerElement.classList.remove("hide");
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentIndex = 0;
    setNextQuestion();

}

function updateScore() {
    ScoreElement.innerText = "Score: " + score;
}

function setNextQuestion() {
    resetState();
    if (currentIndex == 2) {
        questionElement.innerText = "Du hast alle Fragen beantwortet. Dein Punktestand beträgt: " + score;

        restartButton.classList.remove("hide");
    }
    else if (currentIndex >= shuffledQuestions.length) {
        questionElement.innerText = "Hopla, da sind uns wohl die Fragen ausgegangen.";
        console.log("Hopla, da sind uns wohl die Fragen ausgegangen.");
    }
    else {
        showQuestion(shuffledQuestions[currentIndex]);
        currentIndex += 1;
    }
}

function showQuestion(question) {
    currentExpl = question.expl;
    if (question.type == "singleChoice") {
        questionElement.innerText = question.question;
        question.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerText = answer.text;
            button.classList.add("btn");
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
            answerButtonsElement.appendChild(button);
        })
    }
    else if (question.type == "guess") {
        currentGuessAnswer = question.answer;
        questionElement.innerText = question.question;
        answerButton.classList.remove("hide");
        EingabeElement.classList.remove("hide");
    }
    else if (question.type == "ampel") {
        questionElement.innerText = question.question;
        question.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerText = answer.text;
            button.classList.add("btn");
            button.dataset.correct = answer.correct;
            button.addEventListener("click", selectAnswerAmpel);
            answerButtonsElement.appendChild(button);
        })
    }
}


function showInfo() {
    questionElement.innerText = currentExpl;
}

function selectAnswerAmpel(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    console.log(correct);
    if (correct == "correct") {
        score += 1;
        console.log("" + score);
        updateScore();
    }
    else if (correct == "ok") {
        score += 0.5;
        console.log("" + score);
        updateScore();
    }
    document.body.classList.add(correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        button.classList.add(button.dataset.correct);
        button.removeEventListener("click", selectAnswerAmpel);
    })
    nextButton.classList.remove("hide");
    infoButton.classList.remove("hide");
}

function selectAnswerGuess(e) {
    const eingabe = EingabeElement.value;
    if (eingabe >= 0.9 * currentGuessAnswer && eingabe <= 1.1 * currentGuessAnswer) {
        score += 1;
        console.log("" + score);
        updateScore();
        setStatusClass(document.body, true);
        questionElement.innerText = eingabe + " ist richtig (gültiger Lösungsbereich " + Math.round(0.9 * currentGuessAnswer) + " - " + Math.round(1.1 * currentGuessAnswer) + ")";

    }
    else {
        setStatusClass(document.body, false);
        questionElement.innerText = eingabe + " ist falsch (gültiger Lösungsbereich " + Math.round(0.9 * currentGuessAnswer) + " - " + Math.round(1.1 * currentGuessAnswer) + ")";

    }
    EingabeElement.classList.add("hide");
    console.log(eingabe + "eingabe");
    answerButton.classList.add("hide");
    nextButton.classList.remove("hide");
    infoButton.classList.remove("hide");


}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        score += 1;
        console.log("" + score);
        updateScore();
    }
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
        button.removeEventListener("click", selectAnswer);
    })
    nextButton.classList.remove("hide");
    infoButton.classList.remove("hide");
}



function setStatusClass(item, status) {
    clearStatusClass(item);
    if (status) {
        item.classList.add("correct");
    }
    else {
        item.classList.add("wrong");
    }
}



function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
    element.classList.remove("ok");
}

function resetState() {
    infoButton.classList.add("hide");
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    clearStatusClass(document.body);
}