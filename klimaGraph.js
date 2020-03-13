import { gameOver } from "./script.js"
/*const levelC = document.getElementById("level-container")
const item2 = document.getElementById("level-grid")
*/
const graph = document.getElementById("graph");
graph.style.border = "1px solid #000000"
console.log(graph.style.width)
klimaGraphResize()
let sfactor = Math.round(window.document.body.clientWidth * 0.78) / graph.style.width;

graph.style.width *= sfactor
graph.style.height *= sfactor


let maxX = Math.round(window.document.body.clientWidth * 0.75)
let maxY = Math.round(window.document.body.clientHeight * 0.75)
let Y = maxY;
let levelDist = (maxX - 40) / 5 - 5
let tempDist = (maxY - 30) / 4 - 5

let koordWerte = [{ a: "m", x: 40, y: 30 }, { a: "l", x: 40, y: maxY }, { a: "l", x: maxX, y: maxY },
{ a: "m", x: 40, y: 30 }, { a: "l", x: 37, y: 37 }, { a: "m", x: 40, y: 30 },
{ a: "l", x: 43, y: 37 }, { a: "m", x: maxX, y: maxY }, { a: "l", x: maxX - 7, y: maxY - 3 },
{ a: "l", x: maxX, y: maxY }, { a: "l", x: maxX - 7, y: maxY + 3 }, { a: "m", x: 36, y: maxY - 1 * tempDist },
{ a: "l", x: 44, y: maxY - 1 * tempDist }, { a: "m", x: 36, y: maxY - 2 * tempDist }, { a: "l", x: 44, y: maxY - 2 * tempDist },
{ a: "m", x: 36, y: maxY - 3 * tempDist }, { a: "l", x: 44, y: maxY - 3 * tempDist }, { a: "m", x: 36, y: maxY - 4 * tempDist },
{ a: "l", x: 44, y: maxY - 4 * tempDist }, { a: "m", x: 40 + 1 * levelDist, y: maxY + 4 }, { a: "l", x: 40 + 1 * levelDist, y: maxY - 4 },
{ a: "m", x: 40 + 2 * levelDist, y: maxY + 4 }, { a: "l", x: 40 + 2 * levelDist, y: maxY - 4 }, { a: "m", x: 40 + 3 * levelDist, y: maxY + 4 },
{ a: "l", x: 40 + 3 * levelDist, y: maxY - 4 }, { a: "m", x: 40 + 4 * levelDist, y: maxY + 4 }, { a: "l", x: 40 + 4 * levelDist, y: maxY - 4 },
{ a: "m", x: 40 + 5 * levelDist, y: maxY + 4 }, { a: "l", x: 40 + 5 * levelDist, y: maxY - 4 },]



let koordsystem = graph.getContext("2d");

koordsystem.strokeStyle = "black";
console.log("koordsystem")
let i = 0

drawKlimaGraph();

function drawKlimaGraph() {
    koordsystem.strokeStyle = "black";
    i = 0;

    koordsystem.lineWidth = 1.5;
    for (i = 0; i < koordWerte.length; i++) {
        if (koordWerte[i].a == "l") {
            koordsystem.lineTo(koordWerte[i].x, koordWerte[i].y)
        }
        else {
            koordsystem.moveTo(koordWerte[i].x, koordWerte[i].y)
        }
    }


    koordsystem.stroke();



    for (i = 1; i < 5; i++) {
        if (i == 4) {
            koordsystem.setLineDash([])
            koordsystem.beginPath();
            koordsystem.moveTo(40, maxY - tempDist * i);
            koordsystem.lineTo(maxX, maxY - tempDist * i);
            koordsystem.strokeStyle = "red";
            koordsystem.stroke();
        }
        else {
            koordsystem.setLineDash([5, 15]);
            koordsystem.beginPath();
            koordsystem.moveTo(40, maxY - tempDist * i);
            koordsystem.lineTo(maxX, maxY - tempDist * i);
            koordsystem.stroke();
        }
    }

    koordsystem.font = "15px Roboto";

    for (i = 1; i < 5; i++) {
        koordsystem.textAlign = "end";
        koordsystem.fillText(i * 0.5 + "℃", 38, maxY + 7.5 - i * tempDist)
    }
    for (i = 0; i < 6; i++) {
        koordsystem.textAlign = "center";
        koordsystem.fillText((2020 + i * 6) + "", 40 + i * levelDist, maxY + 15)
    }

}

export function adjustKlimaGraph(tempPlus, color, level) {
    let gameO = false;


    koordsystem.beginPath();
    koordsystem.moveTo(40 + level * levelDist, Y);
    Y = Y - tempPlus * tempDist * 2;
    if (Y <= maxY - 4 * tempDist) {
        Y = maxY - 4 * tempDist;
        gameO = true
    }
    koordsystem.lineTo(40 + (level + 1) * levelDist, Y);
    koordsystem.strokeStyle = color;
    koordsystem.stroke();
    if (gameO) {
        gameOver();
    }

}

export function resetGraph() {
    Y = maxY;
    koordsystem.clearRect(0, 0, maxX, maxY);
    koordsystem.beginPath();
    koordsystem.moveTo(0, 0);
    koordsystem.lineTo(0, 0);
    koordsystem.strokeStyle = "black";
    koordsystem.stroke();
    drawKlimaGraph();
}

function klimaGraphSmall() {

}

function klimaGraphResize() {
    let sizingfaktor
    sizingfaktor = 1067 / window.document.body.clientWidth;
    console.log(sizingfaktor)
    // graph


}


/*
levelC.insertBefore(graph, item2)
let zwischen = levelC.firstChild
levelC
*/