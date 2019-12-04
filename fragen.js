

export function getQuestions() {
    let erg = [ /*
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
        }, */
        {
            type: "singleChoice",
            question: "Durch die Erwärmung der Erde schmilzt Schnee und Eis an den Polkappen (Arktis und Antarktis). Welche Auswirkungen hat dies auf die Weltmeere?",
            answers: [
                { text: "gar keine, da der Wasserspiegel immer konstant bleibt", correct: false },
                { text: "gar keine, da beide Pole schwimmen, und daher kein neues Wasser verdrängt wird", correct: false },
                { text: "ganze Regionen werden überflutet, da der Meeresspiegel einige Zentimeter steigt", correct: true },
                { text: "Die Zugspitze, Deutschlands höchster Berg wird überflutet, da der Meeresspiegel steigt.", correct: false }
            ]
        },
        /*
        {
            type: "guess",
            question: "Wie viel Tonnen (1000kg = 1t) Müll verurscht Deutschland pro Jahr?",
            answer: 100
    
        },
        */
        {
            type: "ampel",
            question: "Wähle die größte Zahl",
            answers: [
                { text: "1", correct: "wrong" },
                { text: "2", correct: "ok" },
                { text: "3", correct: "correct" },
            ]
        }
    ];

    return erg;
}
}