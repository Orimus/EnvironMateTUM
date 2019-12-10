export let paul = "baum";

export const Questions = [  /*
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
];

