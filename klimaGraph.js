
/*const levelC = document.getElementById("level-container")
const item2 = document.getElementById("level-grid")
*/
const graph = document.getElementById("graph");
graph.style.border = "1px solid #000000"
console.log(graph.style.width)

let sfactor = Math.round(window.document.body.clientWidth * 0.78) / graph.style.width;
console.log(sfactor)
graph.style.width *= sfactor
graph.style.height *= sfactor
console.log(graph.style.width)
console.log(graph.style.height)

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
console.log(maxX)

let koordsystem = graph.getContext("2d");
koordsystem.strokeStyle = "black";

let i = 0

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

koordsystem.font = "15px Arial";

for (i = 1; i < 5; i++) {
    koordsystem.textAlign = "end";
    koordsystem.fillText(i * 0.5 + "℃", 38, maxY + 7.5 - i * tempDist)
}
for (i = 0; i < 6; i++) {
    koordsystem.textAlign = "center";
    koordsystem.fillText((2020 + i * 6) + "", 40 + i * levelDist, maxY + 15)
}

export function adjustKlimaGraph(correct, color, level) {

    console.log("works");
    koordsystem.beginPath();
    koordsystem.moveTo(40 + level, Y);
    koordsystem.lineTo(40 + (level + 1) * levelDist, Y - 50);
    Y = Y - 50
    koordsystem.strokeStyle = color;
    koordsystem.stroke();

}

/*
levelC.insertBefore(graph, item2)
let zwischen = levelC.firstChild
levelC
*/