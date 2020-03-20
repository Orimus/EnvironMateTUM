import { ernaehrungFragenA, konsumFragenA, energieFragenA, VerkehrFragenA, WFragen } from "./fragen.js"
import { adjustKlimaGraph, resetGraph } from "./klimaGraph.js"
import { showKonto, changeLC, klimaPaketUebersicht, klimaPaketHide, hideKonto, getCoins } from "./lamaCoins.js";

const ErklärVideo = document.getElementById("Erklaervideo");
const graph = document.getElementById("graph");
const chartConatiner = document.getElementById("chartContainer");
const graphContainer = document.getElementById("graph-container");
const level = document.getElementById("level-container");
const klimaVideo = document.getElementById("klimaVideo");
const klimaVideoSub = document.getElementById("klimaVideoSub");
const forscherM = document.getElementById("forscherM");
const forscherW = document.getElementById("forscherW");
const forscherWinken = document.getElementById("forscherWinken");
const zertifikat = document.getElementById("zertifikat");
const GVUnterschrift = document.getElementById("GVUnterschrift");
const GVAusgabe = document.getElementById("GV");
const GVswitch = document.querySelector("input[name=checkbox]");
const introContainer = document.getElementById("intro-container");
const ampelConatiener = document.getElementById("ampelAnzeige");
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
const NochmalButton = document.getElementById("nochmalVersuchenBtn");
const VerlassenButton = document.getElementById("spielVerlassenBtn");
const druckenButton = document.getElementById("druckenBtn")
const klimaBasisButton = document.getElementById("kauf-btn-basis");
const klimaXLButton = document.getElementById("kauf-btn-XL");
const storyNextButton = document.getElementById("intro-next");
const videoNextButton = document.getElementById("video-next");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nameEingabe = document.getElementById("name-eingabe");
const alterEingabe = document.getElementById("alter-eingabe");
const EingabeElement = document.getElementById("guess-answer");
const infoButton = document.getElementById("info");
const itBox = document.getElementById("info/tipp-box");
const endScreen = document.getElementById("endScreen");
const endText = document.getElementById("endText");



let eingabeName;
let eingabeAlter
let shuffledQuestions;
let currentIndex;
let anzKatDone = 0;
let score = 0;
let currentGuessAnswer;
let currentExpl;
let storyFortschritt = 0;
let levelAkt = 0;
let skipCounter = 0;
let videoWarNichtDa = true
let nichtErsterLauf = false;
let punkteNeu = 0;
let gradErwärmung = 0;
let gameO = false;
let ampel = document.createElement("img");
let restart = false;



const levelButtons = [
    level1Button,
    level2Button,
    level3Button,
    level4Button,
    level5Button
]




const storyText = [
/*0*/    { text: "Hallo " },
    { text: ",\n \n uns läuft die Zeit davon! Du musst uns helfen die globale Erderwärmung bis zum Jahr 2050 in Grenzen zu halten." },
    { text: "Dafür ist es am wichtigsten, den CO₂-Ausstoß der Bürger zu senken." },
    { text: "Aber was bedeutet das überhaupt?" },
/*4*/    { text: "Leider hast du dich im Durchschnitt für die klimaschädlichsten Optionen entschieden. Das kannst du besser, " },
    { text: "Sammle in der folgenden Wissensrunde Bonuspunkte, um die verursachte Klimaerwärmung in diesem Level durch ein Klimapaket zu reduzieren." },
/*6*/    { text: "Du hast dich im Durchschnitt für den Mittelweg entschieden, " },
    { text: ". Da ist noch Luft nach oben!" },
    { text: "Sammle in der folgenden Wissensrunde Bonuspunkte, um die verursachte Klimaerwärmung in diesem Level durch ein Klimapaket zu reduzieren." },
/*9*/    { text: "Prima, " },
    { text: "! Du hast dich im Durchschnitt für die klimafreundlichsten Antwortmöglichkeiten entschieden." },
    { text: "Sammelst du in der kommenden Wissensrunde noch Bonuspunkte, kannst du die Klimaerwärmung sogar noch reduzieren." },
    { text: "" },
]




restartButton.addEventListener("click", backToKat);
startButton.addEventListener("click", startGame); //startGame
nextButton.addEventListener("click", showForscher);
answerButton.addEventListener("click", selectAnswerGuess);
infoButton.addEventListener("click", showInfo);
GVswitch.addEventListener("change", gvChange);
storyNextButton.addEventListener("click", storyWeiter);
level1Button.addEventListener("click", backToKat);
ErnährungButton.addEventListener("click", setFragen);
KonsumButton.addEventListener("click", setFragen);
VerkehrButton.addEventListener("click", setFragen);
EnergieButton.addEventListener("click", setFragen);
klimaXLButton.addEventListener("click", kaufenXL);
klimaBasisButton.addEventListener("click", kaufenBasis);
NochmalButton.addEventListener("click", retry);
VerlassenButton.addEventListener("click", leave);
druckenButton.addEventListener("click", drucken);

document.body.background = "./Bilder/pngZeichenfläche 1.png";
document.body.style.backgroundSize = "100% 100%";


function startGame() {
    // window.print();
    document.body.background = "./Bilder/pngZeichenfläche 1.png";
    document.body.style.backgroundSize = "100% 100%";
    eingabeName = nameEingabe.value;
    eingabeAlter = alterEingabe.value;
    MenuContainer.classList.add("hide");
    startButton.classList.add("hide");
    restartButton.classList.add("hide");
    forscherWinken.classList.add("hide")

    score = 0;


    ErnährungButton.dataset.kat = "Er";
    KonsumButton.dataset.kat = "Kon";
    VerkehrButton.dataset.kat = "Ver";
    EnergieButton.dataset.kat = "En";
    showForscher();


    intro.innerText = storyText[0].text + eingabeName + storyText[1].text;
    storyFortschritt += 2;

    currentIndex = 0;


}

function showForscher() {

    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);

    }

    Container.classList.remove("containerW")
    Container.classList.remove("containerBlank")
    Container.classList.add("container-max-H10")

    nextButton.classList.add("hide")
    introContainer.classList.remove("hide");
    forscherM.classList.remove("hide");
    forscherW.classList.remove("hide");
}

function hideForscher() {
    introContainer.classList.add("hide");
    forscherM.classList.add("hide");
    forscherW.classList.add("hide");
}

function storyWeiter() {

    if (storyFortschritt == 4 && videoWarNichtDa) {
        videoWarNichtDa = false;
        videoNextButton.addEventListener("click", videoEnde);
        setTimeout(function () { videoNextButton.classList.remove("hide") }, 3);
        hideForscher();
        if (restart) {
            skipCounter = 1;
            videoEnde();
            setTimeout(function () { videoNextButton.classList.add("hide") }, 4);
        }
        else {
            if (GVswitch.checked) {
                klimaVideoSub.classList.remove("hide");
                klimaVideoSub.play();

            }
            else {
                klimaVideo.classList.remove("hide");
                klimaVideo.play();
                //setNextQuestion();
                //Container.classList.remove("hide");
                //questionContainerElement.classList.remove("hide");
            }
        }
    }
    else if ((storyFortschritt == 6 || storyFortschritt == 9 || storyFortschritt == 12) && nichtErsterLauf) {
        hideForscher();
        Wfrage();
        nichtErsterLauf = false;
    }
    else if (storyFortschritt == 6 || storyFortschritt == 9) {
        nichtErsterLauf = true
        intro.innerText = storyText[storyFortschritt].text + eingabeName + storyText[storyFortschritt + 1].text;
        storyFortschritt += 2;
    }
    else if (storyFortschritt == 4) {
        nichtErsterLauf = true
        intro.innerText = storyText[storyFortschritt].text + eingabeName + "!";
        storyFortschritt += 1;
    }
    else if (storyFortschritt == 99) {
        klimaPaketUebersicht(punkteNeu);
        introContainer.classList.add("hide");
        Container.classList.add("hide");
        videoNextButton.innerText = "Weiter";
        videoNextButton.classList.remove("hide");
    }
    else if (storyFortschritt == 100) {
        ampelConatiener.classList.add("hide")
        endScreen.classList.remove("hide");
        level.classList.add("hide");
        introContainer.classList.add("hide");
        hideKonto();
    }
    else {
        intro.innerText = storyText[storyFortschritt].text;
        storyFortschritt += 1;

    }

}

function videoEnde() {
    if (skipCounter == 0) {
        if (GVswitch.checked) {
            klimaVideoSub.classList.add("hide");
            klimaVideoSub.pause();
        }
        else {
            klimaVideo.classList.add("hide");
            klimaVideo.pause();
        }
        videoNextButton.classList.add("hide");
        ErklärVideo.classList.remove("hide");
        ErklärVideo.play();
        setTimeout(function () { videoNextButton.classList.remove("hide") }, 3);
        skipCounter += 1;
    }
    else if (skipCounter == 1) {
        ErklärVideo.classList.add("hide");
        ErklärVideo.pause();
        chartConatiner.classList.remove("hide");
        videoNextButton.classList.add("hide");
        skipCounter += 1;
        showKonto();

        ampel.src = "./Bilder/pngrot.png";
        ampel.style.height = "100%";
        ampelConatiener.innerText = "Level " + (levelAkt + 1) + ":";
        ampelConatiener.appendChild(ampel);
        ampelConatiener.classList.remove("hide");
    }
    else if (skipCounter == 2) {
        klimaPaketHide();
        videoNextButton.classList.add("hide");


        hideForscher();
        level.classList.remove("hide");

        if (score > 3) {

            levelButtons[levelAkt - 1].classList.add("correct");
            adjustKlimaGraph(0.25, "green", levelAkt - 1);
            gradErwärmung += 0.25;
        }
        else if (score > 1.5) {

            levelButtons[levelAkt - 1].classList.add("ok");
            adjustKlimaGraph(0.5, "orange", levelAkt - 1);
            gradErwärmung += 0.5;
        }
        else {

            levelButtons[levelAkt - 1].classList.add("wrong");
            adjustKlimaGraph(1, "red", levelAkt - 1);
            gradErwärmung += 1;
        }

        score = 0;

        if (gameO) {
            gameOver();
        }
        //levelAkt += 1;

    }



}

function setFragen(e) {
    const selectedButton = e.target;
    const Kat = selectedButton.dataset.kat;
    currentIndex = 0;
    if (Kat == "Er") {

        shuffledQuestions = ernaehrungFragenA[levelAkt].sort(() => Math.random() - 0.5);

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
    document.body.style.backgroundImage = "url('./Bilder/pngZeichenfläche 1.png')";

    punkteNeu = 0;
    if (anzKatDone == 0) {
        ampel.src = "./Bilder/pngrot.png";
        ampelConatiener.innerText = "Level " + (levelAkt + 1) + ":";
        ampelConatiener.appendChild(ampel);
    }
    if (anzKatDone < 4) {
        level.classList.add("hide");
        restartButton.classList.add("hide");
        chartConatiner.classList.remove("hide");
        Container.classList.add("hide");
        questionContainerElement.classList.add("hide");
    }
    else {
        anzKatDone = 0;
        if (score > 3) {
            storyFortschritt = 9;

        }
        else if (score > 1.5) {
            storyFortschritt = 6;

        }
        else {
            storyFortschritt = 4;

        }
        levelButtons[levelAkt].removeEventListener("click", backToKat);
        levelButtons[levelAkt].classList.add("btn-grau");
        levelButtons[levelAkt].classList.remove("btn");
        allBlue();
        levelAkt += 1;


        if (levelAkt < 5) {
            levelButtons[levelAkt].classList.remove("btn-grau");
            levelButtons[levelAkt].classList.add("btn");
            levelButtons[levelAkt].addEventListener("click", backToKat);
            questionContainerElement.classList.add("hide")
            Container.classList.add("hide")
            showForscher();
            storyWeiter();
        }
        else {
            gameO = true;
            Wfrage();
            // gameOver();
            console.log("ENDE");
        }




        // level.classList.remove("hide");




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


function Wfrage() {
    showKonto();
    level.classList.add("hide");
    restartButton.classList.add("hide");
    shuffledQuestions = WFragen[levelAkt - 1].sort(() => Math.random() - 0.5);
    Container.classList.remove("hide");
    // infoButton.classList.remove("hide");

    answerButtonsElement.classList.remove("hide");
    questionContainerElement.classList.add("hide");
    currentIndex = 0;
    setNextQuestion();
}

function kaufenBasis() {
    let coins = getCoins();
    if (coins < 2) {

    }
    else if (score > 3) {

    }
    else {
        changeLC(-2);
        if (score <= 1.5) {
            score = 2;
        }
        else {
            score = 4;
        }
    }
}

function kaufenXL() {
    let coins = getCoins();
    if (coins < 4) {

    }
    else if (score > 3) {

    }
    else {
        changeLC(-4);
        score += 3.5;
    }
}

function levelUebersicht() {




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






function setNextQuestion() {
    resetState();
    if (currentIndex == 1) {
        questionElement.innerText = "";


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
    //    infoButton.innerText = "Tipp";
    itBox.innerText = question.tipp;
    currentExpl = question.expl;
    Container.classList.remove("containerQ");
    if (question.type == "singleChoice") {
        Container.classList.remove("containerBlank")
        console.log(Container.classList)
        Container.classList.add("containerW");
        Container.classList.remove("container");
        restartButton.innerText = "Weiter zu den Kategorien."


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
            answerButtonsElement.classList.remove("hide");
        })
    }
    else if (question.type == "guess") {
        currentGuessAnswer = question.answer;
        questionElement.innerText = question.question;
        answerButton.classList.remove("hide");
        EingabeElement.classList.remove("hide");
    }
    else if (question.type == "ampel") {
        restartButton.innerText = "Nächste Kategorie."
        let i = 0;
        questionContainerElement.classList.remove("hide");
        answerButtonsElement.classList.add("hide");
        Container.classList.remove("containerW");
        Container.classList.add("containerBlank");
        document.body.style.backgroundImage = "url('" + question.hintergrund + "')";
        document.body.style.backgroundSize = "100% 100%";
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
            bild1.height = 275;
            //   bild1.width = bild1.width * sizingfactor;

            bild1.style.left = question.koords[i].left;
            bild1.style.bottom = question.koords[i].bottom;
            bild1.style.border = "10px solid black, 100%, 30%";



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
    itBox.classList.remove("hide");

    itBox.style.backgroundColor = "hsl(0, 100%, 38%)"
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;

    if (correct == "correct") {
        score += 1;
        itBox.style.backgroundColor = "hsl(164, 100%, 20%)"

    }
    else if (correct == "ok") {
        score += 0.5;
        itBox.style.backgroundColor = " hsl(45, 100%, 50%)";
    }
    updateAmpel();
    document.body.classList.add(correct);
    Array.from(questionContainerElement.children).forEach(input => {
        //input.classList.add(button.dataset.correct);
        input.removeEventListener("click", selectAnswerAmpel);

    })

    restartButton.classList.remove("hide");
    infoButton.innerText = "i";
    infoButton.classList.remove("hide");
}

function updateAmpel() {
    let scoreRelativ = score / anzKatDone;
    console.log(scoreRelativ)
    if (scoreRelativ >= 0.875) {
        ampel.src = "./Bilder/pnggrün.png";
        ampel.style.height = "100%";
    }
    else if (scoreRelativ >= 0.5) {
        ampel.src = "./Bilder/pnggelb.png";
    }
    else {
        ampel.src = "./Bilder/pngrot.png";
    }
}

function selectAnswerGuess(e) {
    const eingabe = EingabeElement.value;
    if (eingabe >= 0.9 * currentGuessAnswer && eingabe <= 1.1 * currentGuessAnswer) {
        score += 1;

        updateScore();
        setStatusClass(document.body, true);
        questionElement.innerText = eingabe + " ist richtig (gültiger Lösungsbereich " + Math.round(0.9 * currentGuessAnswer) + " - " + Math.round(1.1 * currentGuessAnswer) + ")";

    }
    else {
        setStatusClass(document.body, false);
        questionElement.innerText = eingabe + " ist falsch (gültiger Lösungsbereich " + Math.round(0.9 * currentGuessAnswer) + " - " + Math.round(1.1 * currentGuessAnswer) + ")";

    }
    EingabeElement.classList.add("hide");

    answerButton.classList.add("hide");
    nextButton.classList.remove("hide");
    infoButton.classList.remove("hide");


}

function selectAnswer(e) {


    intro.innerText = currentExpl;
    storyFortschritt = 99;
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        changeLC(1);
        punkteNeu += 1;

    }
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
        button.removeEventListener("click", selectAnswer);
    })

    nextButton.classList.remove("hide");

    infoButton.classList.add("hide");
}

function gvChange(e) {
    if (GVswitch.checked) {
        GVAusgabe.innerText = "Ton ist deaktiviert";
        GVUnterschrift.innerText = "(Empfohlen für die Benutzung im Unterricht oder an öffentlichen Plätzen)";
    }
    else {
        GVAusgabe.innerText = "Ton ist aktiviert";
        GVUnterschrift.innerText = "(Empfohlen für die Benutzung Zuhause oder an ungestörten Orten)";
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
    itBox.classList.add("hide");

    while (questionContainerElement.firstChild) {
        questionContainerElement.removeChild(questionContainerElement.firstChild);
    }
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }

    clearStatusClass(document.body);




}

export function gameOver() {
    let JahrAkt = 2020 + 6 * levelAkt;
    let alterAkt = JahrAkt - 2020 + parseInt(eingabeAlter);
    storyFortschritt = 100;
    showForscher();
    if (levelAkt < 5) {


        intro.innerText = "Du hast es leider nicht geschafft die Erde zu retten "
        endText.innerText = "Es ist das Jahr " + JahrAkt + ", du bist jetzt " + alterAkt + " Jahre alt" + "und diese Folgen sind bereits zu spüren. \n" + "Bis zu einem Fünftel der Weltbevölkerung ist durch häufigere Überschwemmungen gefährdet. \n Es beginnt ein weltweites Artensterben, vor allem in Feuchtgebieten, Wäldern und Korallenriffen. \n 300 Millionen Menschen, mehr als 3 mal die Einwohner Deutschlands, sind von dauerhafter Überschwemmung ihres Zuhauses betroffen. \n In Europa herrscht alle 10 Jahre eine schwere Dürre. \n  ";
        //videoNextButton.classList.remove("hide");

        levelButtons[levelAkt].removeEventListener("click", backToKat);
        levelButtons[levelAkt].classList.add("btn-grau");
        levelButtons[levelAkt].classList.remove("btn");
    }
    else {
        level.classList.remove("hide")
        if (gradErwärmung < 1) {
            intro.innerText = "Sehr gut, du bist ein echter Klimaprofi, " + eingabeName + "."
            endText.innerText = "Es ist das Jahr 2050, du bist jetzt " + alterAkt + " Jahre alt. \n Selbst wenn du es geschafft hast, dass die Erde sich fast nicht erwärmt hat: \n Seit 1850 ist die Temperatur um über 1 Grad gestiegen. \n Der Nordpol wird im Sommer komplett abschmelzen und nur im Winter mit Eis bedeckt sein. \n Durch das abgeschmolzene Eis ist der Meeresspiegel gestiegen, und hat einige Küstenstädte überflutet. \n Wenn du genauere Folgen für mehrere Temperaturen wissen möchtest, schau doch zum Beispiel hier: www.oekosystem-erde.de/html/klimawandel-03.html";
        }
        else if (gradErwärmung < 1.5) {
            intro.innerText = "Das war schon ganz gut, aber es gibt noch Luft nach oben, " + eingabeName + + "."
            endText.innerText = "Es ist das Jahr 2050, du bist jetzt " + alterAkt + " Jahre alt " + " und diese Folgen sind bereits zu spüren: \n" + "Bis zu 2 Milliarden Menschen sind von Wasserknappheit betroffen, das ist mehr als 20 mal die Einwohner Deutschlands. \n 20-30 % aller biologischen Arten (also Pflanzen und Tiere) sind vom Aussterben bedroht. \n Der Abschmelzprozess Grönlands und der westlichen Antarktis ist unaufhaltbar geworden. \n  ";
        }
        else if (gradErwärmung < 2) {
            intro.innerText = "Mit deiner Hlfe ist es uns gelungen die Klimaerwärmung in Grenzen zu halten, " + eingabeName + + "."
            endText.innerText = "Es ist das Jahr 2050, du bist jetzt " + alterAkt + " Jahre alt " + "und diese Folgen sind bereits zu spüren: \n" + "Bis zu einem Fünftel der Weltbevölkerung ist durch häufigere Überschwemmungen gefährdet. \n Es beginnt ein weltweites Artensterben, vor allem in Feuchtgebieten, Wäldern und Korallenriffen. \n 300 Millionen Menschen, mehr als 3 mal die Einwohner Deutschlands, sind von dauerhafter Überschwemmung ihres Zuhauses betroffen. \n In Europa herrscht alle 10 Jahre eine schwere Dürre. \n  ";
        }
        else {
            intro.innerText = eingabeName + ", Du hast es leider nicht geschafft die Erde zu retten. "
            endText.innerText = "Es ist das Jahr 2050, du bist jetzt " + alterAkt + " Jahre alt " + "und diese Folgen sind bereits zu spüren: \n" + "Bis zu einem Fünftel der Weltbevölkerung ist durch häufigere Überschwemmungen gefährdet. \n Es beginnt ein weltweites Artensterben, vor allem in Feuchtgebieten, Wäldern und Korallenriffen. \n 300 Millionen Menschen, mehr als 3 mal die Einwohner Deutschlands, sind von dauerhafter Überschwemmung ihres Zuhauses betroffen. \n In Europa herrscht alle 10 Jahre eine schwere Dürre. \n  ";
        }
    }
    let txt = "hier";
    endText.innerText += "Wenn du dich dafür interessierst, welche Auswirkungen eine Erderwärmung von mehr als 4°C für die Menschheit hat, dann klicke "
    endText.innerHTML += txt.link("https://www.nabu.de/umwelt-und-ressourcen/klima-und-luft/klimawandel/11420.html")



}

function drucken() {
    let winWidth = window.document.body.clientWidth

    hideForscher();
    endScreen.classList.add("hide");

    //zertifikat.width = winWidth
    zertifikat.classList.remove("hide");


    window.print();

    forscherM.classList.remove("hide");
    forscherW.classList.remove("hide");
    endScreen.classList.remove("hide");
    zertifikat.classList.add("hide");
}

function retry() {
    let i = 0;

    restart = true;
    anzKatDone = 0;
    score = 0;
    storyFortschritt = 0;
    levelAkt = 0;
    skipCounter = 0;
    videoWarNichtDa = true
    nichtErsterLauf = false;
    punkteNeu = 0;
    gradErwärmung = 0;
    gameO = false
    changeLC(- getCoins());

    ampel.src = "./Bilder/pngrot.png";
    ampelConatiener.innerText = "Level " + (levelAkt + 1) + ":";
    ampelConatiener.appendChild(ampel);

    for (i = 0; i < 5; i++) {
        clearStatusClass(levelButtons[i])
    }

    hideForscher();
    resetGraph();
    endScreen.classList.add("hide");
    showForscher();



    intro.innerText = storyText[0].text + eingabeName + storyText[1].text;
    storyFortschritt += 2;

    currentIndex = 0;





}

function leave() {
    console.log("Credits")
}

function loadEndscreen() {

}

