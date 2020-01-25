export const VerkehrFragenA1 = [
    {
        hintergrund: "./Bilder/Ampel/Verkehr/Level1/Kopie von badezimmer.png",
        items: [
            "./Bilder/Ampel/Verkehr/Level1/Economy.png",
            "./Bilder/Ampel/Verkehr/Level1/Business.png",
            "./Bilder/Ampel/Verkehr/Level1/First.png"
        ],
        koords: [
            { bottom: "30%", left: "20%" },
            { bottom: "30%", left: "45%" },
            { bottom: "30%", left: "65%" },
        ],
        type: "ampel",
        question: "Du möchtest in den Urlaub fliegen. Es gibt verschiedene Buchungsklassen, doch welche ist in Bezug auf deine CO2-Bilanz wohl die Beste?",
        answers: [
            { text: "Economy (Wenig Platz und Service)", correct: "correct" },
            { text: "Business (Mehr Platz und besseres Essen)", correct: "ok" },
            { text: "First (Oft so viel Platz, dass man die Füße ganz ausstrecken kann besonderen Service bekommt)", correct: "wrong" },
        ],
        expl: "Erklärung: Je mehr Platz du im Flugzeug brauchst, desto weniger Menschen finden in der Maschine Platz. Um die selbe Anzahl Personen zu befördern muss der Flieger also öfter die selbe Route abfliegen und benötigt dafür mehr Kerosin."
    }
]

export const VerkehrFragenA2 = [
    {
        hintergrund: "./Bilder/Ampel/Verkehr/Level1/Kopie von badezimmer.png",
        items: [
            "./Bilder/Ampel/Verkehr/Level2/Zug.png",
            "./Bilder/Ampel/Verkehr/Level2/Auto.png",
            "./Bilder/Ampel/Verkehr/Level2/Flugzeug.png"
        ],
        koords: [
            { bottom: "30%", left: "20%" },
            { bottom: "30%", left: "45%" },
            { bottom: "30%", left: "65%" },
        ],
        type: "ampel",
        question: "Euer Sommerurlaub soll an das Mittelmeer gehen (ca. 1500 km). Dafür könntet ihr fliegen, mit dem Auto fahren oder den Zug nehmen. Aber: Was ist denn auf der Langstrecke die beste Wahl?",
        answers: [
            { text: "Zug", correct: "correct" },
            { text: "Auto", correct: "ok" },
            { text: "Flugzeug", correct: "wrong" },
        ],
        expl: "Zu fliegen ist oft die schlechteste Option, auch wenn es relativ schnell geht. Das Flugzeug produziert für 4 Personen über 4 mal so viele schädliche treibhausgase aus wie das Auto. Noch sparsamer ist der Zug. Er kommt mit etwa 75 % der Abgase des Autos aus. Übrigens: Wenn ihr nur zu zweit in den Urlaub fahrt, erzeugt das Auto fast 3 mal so viele Treibhausgase wie ein Zug pro Person."
    },
]

export const VerkehrFragenA3 = [
    {
        hintergrund: "./Bilder/Ampel/Verkehr/Level1/Kopie von badezimmer.png",
        items: [
            "./Bilder/Ampel/Verkehr/Level3/Fahrrad.png",
            "./Bilder/Ampel/Verkehr/Level3/Escooter.png",
            "./Bilder/Ampel/Verkehr/Level3/Auto.png"
        ],
        koords: [
            { bottom: "30%", left: "20%" },
            { bottom: "30%", left: "45%" },
            { bottom: "30%", left: "65%" },
        ],
        type: "ampel",
        question: "Für deinen Weg zur Schule gibt es mehrere Optionen. Welche wählst du?",
        answers: [
            { text: "Fahrrad", correct: "correct" },
            { text: "E-Scooter", correct: "ok" },
            { text: "Auto der Eltern", correct: "wrong" },
        ],
        expl: "Gerade mit ausleihbaren E-Scootern wird oft nicht gut umgegangen, weswegen sie teilweise nach nur 3 Monaten schon kaputt sind. Bei der Produktion brauchen sie zudem viel Verkehr, da die Akkus viele Rohstoffe brauchen. Daher lieber Fahrradfahren oder laufen. Das Auto ist die schlechteste Wahl, es benötigt selbst unter den besten Voraussetzungen etwa doppelt so viel Verkehr wie ein E-Scooter."
    }
]

export const VerkehrFragenA4 = [
    {
        hintergrund: "./Bilder/Ampel/Verkehr/Level1/Kopie von badezimmer.png",
        items: [
            "./Bilder/Ampel/Verkehr/Level4/Kleinwagen.png",
            "./Bilder/Ampel/Verkehr/Level4/SUV.png",
            "./Bilder/Ampel/Verkehr/Level4/Sportwagen.png"
        ],
        koords: [
            { bottom: "30%", left: "20%" },
            { bottom: "30%", left: "45%" },
            { bottom: "30%", left: "65%" },
        ],
        type: "ampel",
        question: "Deine Eltern wollen sich ein neues Auto kaufen. Welches hat wohl die beste Klimabilanz?",
        answers: [
            { text: "Kleinwagen", correct: "correct" },
            { text: "SUV (Stadtgeländewagen mit erhöhtem Komfort) / Geländewagen", correct: "ok" },
            { text: "Sportwagen", correct: "wrong" }
        ],
        expl: "Ein SUV ist schwerer als ein normales Auto und hat in der Regel Motoren mit mehr Leistung. Dadurch braucht er mehr Verkehr zum Fahren. Noch schlechter sind Sportwagen, die durch besonders starke Motoren extrem viel Benzin verbrauchen. Quelle: https://www.greenpeace.de/sites/www.greenpeace.de/files/publications/s02571_gp_report_suv_09_2019_es.pdf"
    }
]

export const VerkehrFragenA5 = [
    {
        hintergrund: "./Bilder/Ampel/Verkehr/Level1/Kopie von badezimmer.png",
        items: [
            "./Bilder/Ampel/Verkehr/Level5/Minivan.png",
            "./Bilder/Ampel/Verkehr/Level5/SUV.png",
            "./Bilder/Ampel/Verkehr/Level5/Sportwagen.png"
        ],
        koords: [
            { bottom: "30%", left: "20%" },
            { bottom: "30%", left: "45%" },
            { bottom: "30%", left: "65%" },
        ],
        type: "ampel",
        question: "Deine Eltern wollen sich ein neues Auto kaufen, das möglichst groß ist. Welches hat wohl die beste Klimabilanz??",
        answers: [
            { text: "Mini-Van", correct: "correct" },
            { text: "SUV (Stadtgeländewagen mit erhöhtem Komfort) / Geländewagen", correct: "ok" },
            { text: "Sportwagen", correct: "wrong" }
        ],
        expl: "Ein Minivan ist deutlich effizienter als ein SUV. Selbst ein Großraum-Van fährt noch sparsamer als der Geländewagen. Noch schlechter sind Sportwagen, die durch besonders starke Motoren extrem viel Benzin verbrauchen. Quelle: https://www.greenpeace.de/sites/www.greenpeace.de/files/publications/s02571_gp_report_suv_09_2019_es.pdf"
    }
]



