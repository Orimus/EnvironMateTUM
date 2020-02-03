export const WQuestionsL2 = [
    {
        type: "singleChoice",
        question: "Ein neuer Trend ist der E-Scooter. Doch wie umweltfreundlich ist er wirklich?",
        answers: [
            { text: "Gerade Leihroller brauchen fast halb so viel CO2 wie Autos, denn sie haben eine kurze Lebensdauer.", correct: true },
            { text: "Sie benötigen sogar mehr Energie als Autos", correct: false },
            { text: "E-Scooter fahren ist umweltfreundlicher als Busfahren", correct: false },
            { text: "Ein Fahrrad braucht bei der Herstellung mehr Energie und ist deswegen schlechter als ein E-Scooter", correct: false },
        ],
        hint: "Mit Leihrollern wird oft nicht gut umgegangen, weswegen sie teilweise nach nur 3 Monaten schon kaputt sind. Bei der Produktion brauchen sie zudem viel Energie, da die Akkus viele Rohstoffe brauchen.",
        expl: "Mit Leihrollern wird oft nicht gut umgegangen, weswegen sie teilweise nach nur 3 Monaten schon kaputt sind. Bei der Produktion brauchen sie zudem viel Energie, da die Akkus viele Rohstoffe brauchen. Daher lieber Busfahren oder auf S-, U- oder Trambahn umsteigen, wo es das gibt. Quelle: https://de.statista.com/statistik/daten/studie/1037358/umfrage/co2-emissionen-von-e-scootern-im-vergleich-mit-anderen-verkehrsmitteln-in-den-usa/"
    },

    {
        type: "singleChoice",
        question: "Wieviel Prozent trägt der Verkehr einer Person ca. zu ihrem jährlichen Pro-Kopf-CO2-Ausstoß bei? Hierzu zählt beispielsweise der CO2-Ausstoß beim Autofahren, Bahnfahren oder Fliegen.",
        answers: [
            { text: "ca. 60%", correct: false },
            { text: "ca. 40%", correct: false },
            { text: "ca. 20%", correct: true },
            { text: "ca. 75%", correct: false }
        ],
        hint: "Der größte Teil kommt aus dem Konsum. Verkehr belegt den dritten Platz.",
        expl: "Der Verkehr macht ca. 20% an deinem jährlichen CO2-Ausstoß aus. Durch das Vermeiden von Flugreisen und häufigem Autofahren kannst du mit deiner Familie hierbei viel Einsparen. Quelle: Umweltbundesamt",
    }

]