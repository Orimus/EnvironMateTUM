export const ernaehrungFragenS = [
    {
        type: "singleChoice",
        question: "Woran könnte es liegen, dass es im Winter besser sein kann, einen Apfel aus Neuseeland anstatt einen Apfel aus Deutschland zu kaufen?",
        answers: [
            { text: "Der Apfel wird in Neuseeland mit mehr Pestiziden behandelt, da die Äpfel bei wärmeren Temperaturen mehr Schädlingen ausgesetzt sind.", correct: false },
            { text: "Der Apfel aus Deutschland wird in den Wintermonaten in Treibhäusern gezüchtet und diese müssen im Winter beheizt werden.", correct: false },
            { text: "Der deutsche Apfel wird nach der Ernte im September über den Winter in Kühlhäusern gelagert, die sehr viel Energie verbrauchen. ", correct: true },
        ],
        expl: "Tatsächlich kann es besser sein, im Winter  Äpfel aus wärmeren Ländern zu kaufen, als Äpfel aus Deutschland, die in großen Kühlhäusern gelagert und teilweise sogar mit Kohlenstoffdioxid bedampft werden. Die Energie, die hier verbraucht wird, ist umweltschädlicher als der weite Schifftransport aus Argentien oder Neuseeland."
    },

    {
        type: "singleChoice",
        question: "Welche Arten von Plastikflaschen gibt es?",
        answers: [
            { text: "Pfandfrei, Einweg-Pfandflasche, Mehrweg-Pfandflasche", correct: true },
            { text: "Nur Pfandfrei und Mehrweg-Flasche", correct: false },
            { text: "Pfandfrei, Mehrweg- und PET-Flasche", correct: false },
        ],
        expl: "Nur weil es auf eine Flasche Pfand gibt, heißt das nicht, dass es sich um eine Mehrweg-Flasche handelt. Plastikeinwegflaschen und Dosen kosten 25 Cent Pfand und werden nach nur einer Benutzung geschreddert. Du erkennst Mehrwegflaschen entweder am Mehrweg-Symbol, oder am Pfand, der zwischen 8 und 15 Cent kostet."
    },

    {
        type: "singleChoice",
        question: "Aus wie viel Recyclingmaterial bestehen folgende Getränkeverpackungen: \n 1) Aluminium-Dose \n 2) Glasflasche \n 3) Plastikflasche",
        answers: [
            { text: "1) 15-35% \n 2) 65% \n 3) 0%", correct: false },
            { text: "1) 0% \n 2) 65% \n 3) 15-35%", correct: true },
            { text: "1) 0% \n 2) 15-35% \n 3) 65%", correct: false },
        ],
        expl: "Eine Aluminium-Dose wird aus komplett neuem Material hergestellt, daher ist sie besonders klimaschädlich. Plastikflaschen werden zwar gesammelt und recycelt, allerdings kann nur etwa ein Viertel wieder zu neuen Plastikflaschen verarbeitet werden."
    },

    {
        type: "singleChoice",
        question: "Wenn du ab heute auf Fleischprodukte verzichten, und dich vegetarisch ernähren würdest, wie viel Kilogramm CO2 könntest du im Jahr sparen?",
        answers: [
            { text: "D99 Kilogramm (Einsparung von etwa 6 Prozent).", correct: false },
            { text: "495 Kilogramm CO2 (Einsparung von rund einem Drittel).", correct: false },
            { text: "429 Kilogramm CO2 (Einsparung von rund einem Viertel)", correct: true },
        ],
        expl: "Am meisten CO2 erzeugt die Herstellung von tierischen Produkten (also Fleisch und Milchprodukte). Am meisten CO2 könntest du also durch eine vegane Ernährung (Verzicht auf tierische Produkte) einsparen. Eine vegetarische Ernährung, also Verzicht auf Fleisch, kann deinen CO2-Fußabdruck im Jahr um etwa ein Drittel verringern. Wenn du nicht komplett auf Fleisch verzichten möchtest, kannst du 99 Kilogramm CO2 im Jahr einsparen, wenn du 2 mal pro Woche vegetarisch isst. "
    },

    {
        type: "singleChoice",
        question: "Tomaten wachsen in Deutschland hauptsächlich von Juli bis Oktober. Kauft man Tomaten außerhalb von der Saison …",
        answers: [
            { text: "… erzeugt man mehr als 1.000 mal so viel CO2.", correct: true },
            { text: "… erzeugt man mehr als 100 mal so viel CO2.", correct: false },
            { text: "… erzeugt man mehr als 10 mal so viel CO2.", correct: false },
        ],
        expl: "Wenn man beim Gemüse- und Obstkauf auf die Saisonalität der Sorten achtet, kann man eine Menge CO2 sparen. Einen Saisonkalender für heimisches Obst und Gemüse findest du zum Beispiel hier. "
    },


]

export const Questions = [





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