export const VerkehrFragenA1 = [
    {
        hintergrund: "./Bilder/Ampel/Verkehr/Level1/Hintergrund.png",
        items: [
            "./Bilder/Ampel/Verkehr/Level1/Economy.png",
            "./Bilder/Ampel/Verkehr/Level1/Business.png",
            "./Bilder/Ampel/Verkehr/Level1/First.png"
        ],
        koords: [
            { bottom: "35%", left: "5%" },
            { bottom: "35%", left: "35%" },
            { bottom: "35%", left: "65%" },
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
        hintergrund: "./Bilder/Ampel/Verkehr/Level2/Hintergrund.png",
        items: [
            "./Bilder/Ampel/Verkehr/Level2/EScooter.png",
            "./Bilder/Ampel/Verkehr/Level2/Auto.png",
            "./Bilder/Ampel/Verkehr/Level2/Fahrrad.png"
        ],
        koords: [
            { bottom: "35%", left: "5%" },
            { bottom: "35%", left: "35%" },
            { bottom: "35%", left: "65%" },
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
        hintergrund: "./Bilder/Ampel/Verkehr/Level3/Hintergrund.png",
        items: [
            "./Bilder/Ampel/Verkehr/Level3/Dachträger.png",
            "./Bilder/Ampel/Verkehr/Level3/HalbesGepäck.png",
            "./Bilder/Ampel/Verkehr/Level3/UnnötigesGepäck.png"
        ],
        koords: [
            { bottom: "35%", left: "5%" },
            { bottom: "35%", left: "35%" },
            { bottom: "35%", left: "65%" },
        ],
        type: "ampel",
        question: "Manchmal führt kein Weg um das Autofahren herum. Auf was sollte man dabei aber achten, weil es besonders viel Zusatz-Benzin verbraucht?",
        answers: [
            { text: "Dachträger abmontieren", correct: "correct" },
            { text: "Lieber zwei mal fahren, dafür mit weniger Ladung im Kofferraum", correct: "wrong" },
            { text: "Kofferraum leerräumen", correct: "ok" },
        ],
        expl: "Alle 3 Vorschläge sollten befolgt werden, denn sie alle verbrauchen unnötige Zusatzenergie. Der Dachträger verursacht viel Windwiderstand, und verbraucht so 1 Liter Kraftstoff mehr pro 100 km. Gepäck also lieber in den Kofferraum. Doch auch hier braucht Zusatzgewicht mehr Sprit. Quelle: www.co2online.de"
    }
]

export const VerkehrFragenA4 = [
    {
        hintergrund: "./Bilder/Ampel/Verkehr/Level4/Hintergrund.png",
        items: [
            "./Bilder/Ampel/Verkehr/Level4/Minivan.png",
            "./Bilder/Ampel/Verkehr/Level4/SUV.png",
            "./Bilder/Ampel/Verkehr/Level4/Sportwagen.png"
        ],
        koords: [
            { bottom: "35%", left: "5%" },
            { bottom: "35%", left: "35%" },
            { bottom: "35%", left: "65%" },
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
        hintergrund: "./Bilder/Ampel/Verkehr/Level5/Hintergrund.png",
        items: [
            "./Bilder/Ampel/Verkehr/Level5/EBike.png",
            "./Bilder/Ampel/Verkehr/Level5/Elektroauto.png",
            "./Bilder/Ampel/Verkehr/Level5/ÖPNV.png"
        ],
        koords: [
            { bottom: "35%", left: "5%" },
            { bottom: "35%", left: "35%" },
            { bottom: "35%", left: "65%" },
        ],
        type: "ampel",
        question: "Das Auto hat die schlechteste Klimabilanz im Nahverkehr. Doch welche der folgenden Alternativen ist die Zweitschlechteste??",
        answers: [
            { text: "Elektrofahrrad", correct: "wrong" },
            { text: "Elektroauto", correct: "correct" },
            { text: "Bus/Bahn/Tram", correct: "ok" }
        ],
        expl: " Ein Auto zu bewegen braucht sehr viel Energie. Aktuell kommt ca 70,3 % des Stroms in Deutschland aus Nicht-Erneuerbaren Energien. DIese erzeugen viel CO2. Auch Bus oder Bahn brauchen mehr Strom als ein Elektrofahrrad. Quellen: www.umweltbundesamt.de, www.quarks.de/umwelt/klimawandel/co2-rechner-fuer-auto-flugzeug-und-co/"
    }
]



