import { Questions } from "./fragen.js"


const graphContainer = document.getElementById("graph-container");
const level = document.getElementById("level-container");
const klimaVideo = document.getElementById("klimaVideo");
const forscherM = document.getElementById("forscherM");
const forscherW = document.getElementById("forscherW");
const GVUnterschrift = document.getElementById("GVUnterschrift");
const GVAusgabe = document.getElementById("GV");
const GVswitch = document.querySelector("input[name=checkbox]");
const introContainer = document.getElementById("intro-container");
const intro = document.getElementById("intro");
const MenuContainer = document.getElementById("menu");
const Container = document.getElementById("container");
const restartButton = document.getElementById("restart-btn");
const answerButton = document.getElementById("answer-btn");
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const storyNextButton = document.getElementById("intro-next");
const videoNextButton = document.getElementById("video-next");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const ScoreElement = document.getElementById("score");
const nameEingabe = document.getElementById("name-eingabe");
const alterEingabe = document.getElementById("alter-eingabe");
const EingabeElement = document.getElementById("guess-answer");
const infoButton = document.getElementById("info")
let shuffledQuestions;
let currentIndex;
let score = 0;
let currentGuessAnswer;
let currentExpl;
let nameSpieler = "Default";
let alterSpieler = "99";
let storyFortschritt = 0;



const questions = Questions


const storyText = [
    { text: "Hallo " },
    { text: ",\n \n uns läuft die Zeit davon! Du musst uns helfen die globale Erderwärmung bis zum Jahr 2100 in Grenzen zu halten" },
    { text: "Dafür ist es am wichtigsten, den CO₂-Ausstoß der Bürger zu senken." },
    { text: "Aber was bedeutet das überhaupt?" }
]

updateScore();
restartButton.addEventListener("click", startGame);
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", setNextQuestion);
answerButton.addEventListener("click", selectAnswerGuess);
infoButton.addEventListener("click", showInfo);
GVswitch.addEventListener("change", gvChange);
storyNextButton.addEventListener("click", storyWeiter);



function startGame() {
    document.body.background = "./Bilder/Windrad.jpg";
    const eingabeName = nameEingabe.value;
    const eingabeAlter = alterEingabe.value;
    MenuContainer.classList.add("hide");
    startButton.classList.add("hide");
    restartButton.classList.add("hide");
    console.log(eingabeName + " " + eingabeAlter);
    score = 0;
    updateScore();


    introContainer.classList.remove("hide");
    forscherM.classList.remove("hide");
    forscherW.classList.remove("hide");
    intro.innerText = storyText[0].text + eingabeName + storyText[1].text;
    storyFortschritt += 2;
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentIndex = 0;


}

function storyWeiter() {
    if (storyFortschritt < storyText.length) {
        intro.innerText = storyText[storyFortschritt].text;
        storyFortschritt += 1;
    }
    else {
        videoNextButton.addEventListener("click", videoEnde);
        klimaVideo.classList.remove("hide");
        setTimeout(function () { videoNextButton.classList.remove("hide") }, 3000);
        //setNextQuestion();
        //Container.classList.remove("hide");
        //questionContainerElement.classList.remove("hide");
        introContainer.classList.add("hide");
        forscherM.classList.add("hide");
        forscherW.classList.add("hide");
    }
}

function videoEnde() {

    klimaVideo.classList.add("hide");
    videoNextButton.classList.add("hide");
    level.classList.remove("hide");
    setTimeout(function () { graphContainer.style.width = level.offsetWidth; }, 10);
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

function gvChange(e) {
    if (GVswitch.checked) {
        GVAusgabe.innerText = "Hörenden Version";
        GVUnterschrift.innerText = "(Empfohlen für die Benutzung Zuhause oder an ungestörten Orten)";
    }
    else {
        GVAusgabe.innerText = "Gehörlosen Version";
        GVUnterschrift.innerText = "(Empfohlen für die Benutzung im Unterricht oder an öffentlichen Plätzen)";
    }
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