
const Konto = document.getElementById("Konto");
const klimaPaketContainer = document.getElementById("klimaPaket-container");
const klimaPaketText = document.getElementById("klimaPaketText");

let coins = 0;


export function showKonto() {
    Konto.classList.remove("hide");
    updateKonto();
}

function updateKonto() {
    Konto.innerText = "Punkte: " + coins;
}

export function changeLC(aenderung) {
    coins += aenderung;
    updateKonto();
}

export function klimaPaketUebersicht(punkteNeu) {
    klimaPaketText.innerText = "Du hast in der Wissensrunde " + punkteNeu + " Punkte gesammelt! Damit beträgt dein Punktestand nun " + coins + " Punkte. \n Die folgenden Klimapakete haben wir in Zusammenarbeit mit den Politikern erarbeitet, möchtest du in eines davon investieren?"
    klimaPaketContainer.classList.remove("hide");
}

export function klimaPaketHide() {
    klimaPaketContainer.classList.add("hide");
}