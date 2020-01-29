
const Konto = document.getElementById("Konto");

let coins = 0;


export function showKonto() {
    Konto.classList.remove("hide");
    updateKonto();
}

function updateKonto() {
    Konto.innerText = "Lama Coins \n " + coins;
}

export function changeLC(aenderung) {
    coins += aenderung;
    updateKonto();
}