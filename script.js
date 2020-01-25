import { ernaehrungFragenA, konsumFragenA, energieFragenA, VerkehrFragenA } from "./fragen.js"
import { adjustKlimaGraph } from "./klimaGraph.js"

const graph = document.getElementById("graph");
const chartConatiner = document.getElementById("chartContainer");
const graphContainer = document.getElementById("graph-container");
const level = document.getElementById("level-container");
const klimaVideo = document.getElementById("klimaVideo");
const klimaVideoSub = document.getElementById("klimaVideoSub");
const forscherM = document.getElementById("forscherM");
const forscherW = document.getElementById("forscherW");
const GVUnterschrift = document.getElementById("GVUnterschrift");
const GVAusgabe = document.getElementById("GV");
const GVswitch = document.querySelector("input[name=checkbox]");
const introContainer = document.getElementById("intro-container");
const intro = document.getElementById("intro");
const MenuContainer = document.getElementById("menu");
const Container = document.getElementById("container");
const ErnährungButton = document.getElementById("ErKat");
const KonsumButton = document.getElementById("KonKat");
const EnergieButton = document.getElementById("EnKat");
const VerkehrButton = document.getElementById("VerKat");
const level1Button = document.getElementById("level-btn1");
const level2Button = document.getElementById("level-btn2");
const level3Button = document.getElementById("level-btn3");
const level4Button = document.getElementById("level-btn4");
const level5Button = document.getElementById("level-btn5");
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
const infoButton = document.getElementById("info");
const itBox = document.getElementById("info/tipp-box");


let eingabeName;
let eingabeAlter
let shuffledQuestions;
let currentIndex;
let anzKatDone = 0;
let score = 0;
let geld = 0;
let currentGuessAnswer;
let currentExpl;
let storyFortschritt = 0;
let levelAkt = 0;



const levelButtons = [
    level1Button,
    level2Button,
    level3Button,
    level4Button,
    level5Button
]




const storyText = [
    { text: "Hallo " },
    { text: ",\n \n uns läuft die Zeit davon! Du musst uns helfen die globale Erderwärmung bis zum Jahr 2100 in Grenzen zu halten" },
    { text: "Dafür ist es am wichtigsten, den CO₂-Ausstoß der Bürger zu senken." },
    { text: "Aber was bedeutet das überhaupt?" }
]

updateScore();
restartButton.addEventListener("click", backToKat);
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", setNextQuestion);
answerButton.addEventListener("click", selectAnswerGuess);
infoButton.addEventListener("click", showInfo);
GVswitch.addEventListener("change", gvChange);
storyNextButton.addEventListener("click", storyWeiter);
level1Button.addEventListener("click", levelUebersicht);
ErnährungButton.addEventListener("click", setFragen);
KonsumButton.addEventListener("click", setFragen);
VerkehrButton.addEventListener("click", setFragen);
EnergieButton.addEventListener("click", setFragen);



function startGame() {
    document.body.background = "./Bilder/Windrad.jpg";
    document.body.backgroundSize = "cover";
    eingabeName = nameEingabe.value;
    eingabeAlter = alterEingabe.value;
    MenuContainer.classList.add("hide");
    startButton.classList.add("hide");
    restartButton.classList.add("hide");
    console.log(levelButtons[0]);
    score = 0;
    updateScore();

    ErnährungButton.dataset.kat = "Er";
    KonsumButton.dataset.kat = "Kon";
    VerkehrButton.dataset.kat = "Ver";
    EnergieButton.dataset.kat = "En";


    introContainer.classList.remove("hide");
    forscherM.classList.remove("hide");
    forscherW.classList.remove("hide");
    intro.innerText = storyText[0].text + eingabeName + storyText[1].text;
    storyFortschritt += 2;

    currentIndex = 0;


}

function storyWeiter() {
    if (storyFortschritt < storyText.length) {
        intro.innerText = storyText[storyFortschritt].text;
        storyFortschritt += 1;
    }
    else {
        videoNextButton.addEventListener("click", videoEnde);
        setTimeout(function () { videoNextButton.classList.remove("hide") }, 3000);
        introContainer.classList.add("hide");
        forscherM.classList.add("hide");
        forscherW.classList.add("hide");
        if (GVswitch.checked) {
            klimaVideoSub.classList.remove("hide");
        }
        else {
            klimaVideo.classList.remove("hide");
            //setNextQuestion();
            //Container.classList.remove("hide");
            //questionContainerElement.classList.remove("hide");
        }
    }
}

function videoEnde() {
    if (GVswitch.checked) {
        klimaVideoSub.classList.add("hide");
        klimaVideoSub.pause();
    }
    else {
        klimaVideo.classList.add("hide");
        klimaVideo.pause();
    }
    videoNextButton.classList.add("hide");
    level.classList.remove("hide");


}

function setFragen(e) {
    const selectedButton = e.target;
    const Kat = selectedButton.dataset.kat;
    currentIndex = 0;
    if (Kat == "Er") {

        shuffledQuestions = ernaehrungFragenA[levelAkt].sort(() => Math.random() - 0.5);
        console.log("juhu");
        ErnährungButton.classList.remove("btn");
        ErnährungButton.classList.add("btn-grau");
        ErnährungButton.removeEventListener("click", setFragen);
    }
    else if (Kat == "Kon") {
        shuffledQuestions = konsumFragenA[levelAkt].sort(() => Math.random() - 0.5);
        KonsumButton.classList.remove("btn");
        KonsumButton.classList.add("btn-grau");
        KonsumButton.removeEventListener("click", setFragen);
    }
    else if (Kat == "Ver") {
        shuffledQuestions = VerkehrFragenA[levelAkt].sort(() => Math.random() - 0.5);
        VerkehrButton.classList.remove("btn");
        VerkehrButton.classList.add("btn-grau");
        VerkehrButton.removeEventListener("click", setFragen);
    }
    else {

        shuffledQuestions = energieFragenA[levelAkt].sort(() => Math.random() - 0.5);
        EnergieButton.classList.remove("btn");
        EnergieButton.classList.add("btn-grau");
        EnergieButton.removeEventListener("click", setFragen);
    }
    anzKatDone += 1;
    chartConatiner.classList.add("hide");
    Container.classList.remove("hide");
    //infoButton.classList.remove("hide");

    questionContainerElement.classList.remove("hide");
    setNextQuestion();
}

function backToKat() {
    if (anzKatDone < 4) {
        restartButton.classList.add("hide");
        chartConatiner.classList.remove("hide");
        Container.classList.add("hide");
        questionContainerElement.classList.add("hide");
    }
    else {
        anzKatDone = 0;
        if (score > 2.5) {
            levelButtons[levelAkt].classList.add("correct");
            adjustKlimaGraph(0.2, "green", levelAkt);
        }
        else if (score > 1.5) {
            levelButtons[levelAkt].classList.add("ok");
            adjustKlimaGraph(0.5, "orange", levelAkt);
        }
        else {
            levelButtons[levelAkt].classList.add("wrong");
            adjustKlimaGraph(0.8, "red", levelAkt);
        }
        levelButtons[levelAkt].removeEventListener("click", levelUebersicht);
        levelButtons[levelAkt].classList.add("btn-grau");
        levelButtons[levelAkt].classList.remove("btn");
        allBlue();
        levelAkt += 1;

        if (levelAkt < 5) {
            levelButtons[levelAkt].classList.remove("btn-grau");
            levelButtons[levelAkt].classList.add("btn");
            levelButtons[levelAkt].addEventListener("click", levelUebersicht);
        }

        score = 0;
        level.classList.remove("hide");
        Container.classList.add("hide");

    }
}



function allBlue() {
    ErnährungButton.classList.remove("btn-grau");
    KonsumButton.classList.remove("btn-grau");
    EnergieButton.classList.remove("btn-grau");
    VerkehrButton.classList.remove("btn-grau");

    ErnährungButton.classList.add("btn");
    KonsumButton.classList.add("btn");
    EnergieButton.classList.add("btn");
    VerkehrButton.classList.add("btn");

    ErnährungButton.addEventListener("click", setFragen);
    KonsumButton.addEventListener("click", setFragen);
    EnergieButton.addEventListener("click", setFragen);
    VerkehrButton.addEventListener("click", setFragen);

}

function levelUebersicht() {
    level.classList.add("hide");

    chartConatiner.classList.remove("hide");


    /*
    
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "Desktop Search Engine Market Share - 2016"
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                { y: 79.45, label: "Verkehr" },
                { y: 7.31, label: "Konsum" },
                { y: 7.06, label: "Energie" },
                { y: 4.91, label: "Ernährung" }
            ]
        }]
    });
    chart.render();
    let labels = chart.get("data");
    labels[0].addEventListener("click", paull);
    let i;
    for (i = 0; i < labels.length; i++) {
        console.log(labels[i]);
    }
    //const label1 = document.getElementById("Verkehr")
*/

}

function paull() {
    console.log("aha");
}

function updateScore() {
    ScoreElement.innerText = "Score: " + score;
}



function setNextQuestion() {
    resetState();
    if (currentIndex == 1) {
        questionElement.innerText = "Du hast alle Fragen beantwortet. Dein Punktestand beträgt: " + score;

        restartButton.classList.remove("hide");
    }
    else if (currentIndex >= shuffledQuestions.length) {
        questionElement.innerText = "Hopla, da sind uns wohl die Fragen ausgegangen.";
        console.log("Hopla, da sind uns wohl die Fragen ausgegangen.");
        restartButton.classList.remove("hide");
    }
    else {
        showQuestion(shuffledQuestions[currentIndex]);
        currentIndex += 1;
    }
}

function showQuestion(question) {
    infoButton.innerText = "Tipp";
    itBox.innerText = question.tipp;
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
        let i = 0;

        questionContainerElement.style.backgroundImage = "url('" + question.hintergrund + "')";
        questionContainerElement.style.backgroundSize = "100% 100%";
        questionElement.innerText = question.question;
        question.answers.forEach(answer => {

            const bild1 = document.createElement("input");
            bild1.type = "image";
            bild1.src = question.items[i];
            bild1.dataset.correct = answer.correct;
            bild1.addEventListener("click", selectAnswerAmpel);
            bild1.style.position = "absolute";
            /*
                        let h = new Image();
                        h.src = question.items[i];
                        console.log(h.width)
                        let sizingfactor = 100 / h.height;
                        console.log(sizingfactor)
                        */
            bild1.height = 150;
            //   bild1.width = bild1.width * sizingfactor;

            bild1.style.left = question.koords[i].left;
            bild1.style.bottom = question.koords[i].bottom;



            i += 1;
            /*
            const button = document.createElement("button");
            button.innerText = answer.text;
            button.classList.add("btn");
            button.dataset.correct = answer.correct;
            button.addEventListener("click", selectAnswerAmpel);
            answerButtonsElement.appendChild(button);
            */
            questionContainerElement.appendChild(bild1);
        })
    }
}


function showInfo() {
    itBox.classList.remove("hide");

    infoButton.removeEventListener("click", showInfo);
    infoButton.addEventListener("click", hideInfo);
}

function hideInfo() {
    itBox.classList.add("hide");
    infoButton.removeEventListener("click", hideInfo);
    infoButton.addEventListener("click", showInfo);
}

function selectAnswerAmpel(e) {
    itBox.innerText = currentExpl;
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
    restartButton.classList.remove("hide");
    infoButton.innerText = "i";
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
        geld += 1;
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
    while (questionContainerElement.firstChild) {
        questionContainerElement.removeChild(questionContainerElement.firstChild);
    }

    clearStatusClass(document.body);


}