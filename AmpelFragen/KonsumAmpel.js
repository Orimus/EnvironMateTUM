export const konsumFragenA1 = [
    {
        hintergrund: "./Bilder/Ampel/Konsum/Level1/Kopie von supermarkt.png",
        items: [
            "./Bilder/Ampel/Konsum/Level1/handy_teller.png",
            "./Bilder/Ampel/Konsum/Level1/plastikgeschirr.png",
            "./Bilder/Ampel/Konsum/Level1/pappgeschirr.png"
        ],
        koords: [
            { bottom: "30%", left: "15%" },
            { bottom: "30%", left: "35%" },
            { bottom: "30%", left: "55%" },
        ],
        type: "ampel",
        question: "Für deine Geburtstagsparty morgen musst du noch einige Sachen besorgen. Außerdem hast du für die 20 Partygäste nicht genug Geschirr zuhause. Was machst du?",
        answers: [
            { text: "Ich leihe mir Geschirr von einem Nachbarn aus.", correct: "correct" },
            { text: "Ich kaufe praktisches Plastik-Einweggeschirr", correct: "wrong" },
            { text: "Ich kaufe praktisches Papp-Einweggeschirr aus Recyclingfasern.", correct: "ok" }
        ],
        expl: "Schon vorhandene Sachen von Bekannten auszuleihen ist immer die beste Option. So sparst du nicht nur Geld, sondern auch kräftig Ressourcen und damit immer auch CO2 ein. Auch wenn der Pappbecher aus recycelten Papier besteht, ist er meistens innen mit Plastik beschichtet, da er dir sonst einfach in deiner Hand 'zerlaufen' würde. Der Becher landet somit im Restmüll, wobei für einen Kilo Abfall im Schnitt 320g CO2 anfallen. Quelle: Pendo Verlag."
    }
]

export const konsumFragenA2 = [
    {
        hintergrund: "./Bilder/Ampel/Konsum/Level2/einkaufszentrum.png",
        items: [
            "./Bilder/Ampel/Konsum/Level2/mülleimer.png",
            "./Bilder/Ampel/Konsum/Level2/rucksack.png",
            "./Bilder/Ampel/Konsum/Level2/bank.png"
        ],
        koords: [
            { bottom: "30%", left: "15%" },
            { bottom: "30%", left: "35%" },
            { bottom: "30%", left: "55%" },
        ],
        type: "ampel",
        question: "Im Einkaufszentrum hast du dir schnell eine leckere Sushi-Box to-go geholt. Was machst du mit der Plastikbox in der die Sushirollen verpackt waren?",
        answers: [
            { text: "Ich schmeiße sie einfach in den Mülleimer im Einkaufszentrum.", correct: "ok" },
            { text: "Ich nehme die Box mit nach Hause und schmeiße sie dort in den gelben Sack oder gebe sie meinen Eltern für die Wertstoffinsel mit.", correct: "correct" },
            { text: "Ich lasse die Box auf der Bank stehen, wo das Reinigungspersonal sie mitnehmen kann.", correct: "false" }
        ],
        expl: "Öffentlich aufgestellte Mülleimer sind, wenn nicht anders gekennzeichnet, immer Restmüll. Dieser wird verbrannt, wobei viel CO2 frei wird und begrenzte Ressourcen einfach verschwendet werden. Kannst du eine Plastikverpackung absolut nicht vermeiden, dann versuche zumindest sie durch de richtige Entsorgung im gelben Sack oder einer Wertstoffinsel dem Recyclingkreislauf zuzuführen."
    },
]

export const konsumFragenA3 = [
    {
        hintergrund: "./Bilder/Ampel/Konsum/Level3/supermarkt.png",
        items: [
            "./Bilder/Ampel/Konsum/Level3/normalerblock.png",
            "./Bilder/Ampel/Konsum/Level3/recyclingblock.png",
            "./Bilder/Ampel/Konsum/Level3/chlorfreierblock.png"
        ],
        koords: [
            { bottom: "30%", left: "15%" },
            { bottom: "30%", left: "35%" },
            { bottom: "30%", left: "55%" },
        ],
        type: "ampel",
        question: "Für die Schule brauchst du dringend einen neuen Schreibblock, welchen wählst du?",
        answers: [
            { text: "Ich nehme den Standard-Block, chlorgebleicht.", correct: "false" },
            { text: "Ich nehme den Recycling-Block.", correct: "correct" },
            { text: "Ich nehme den nicht chlorgebleichten Standardblock.", correct: "ok" }
        ],
        expl: "Recyclingpapier verbraucht pro Kilo ganze 80% weniger Emissionen als chlorgebleichtes Standardpapier! Recyceltes Papier ist übrigens schon lange nicht mehr braun, bei vielen Blöcken sieht man gar keinen Unterschied mehr zum normalen Papier."
    },
]

export const konsumFragenA4 = [
    {
        hintergrund: "./Bilder/Ampel/Konsum/Level4/bekleidungsgeschäft.png",
        items: [
            "./Bilder/Ampel/Konsum/Level4/shirt.png",
            "./Bilder/Ampel/Konsum/Level4/shirt.png",
            "./Bilder/Ampel/Konsum/Level4/bioshirt.png"
        ],
        koords: [
            { bottom: "30%", left: "15%" },
            { bottom: "30%", left: "35%" },
            { bottom: "30%", left: "55%" },
        ],

        type: "ampel",
        question: "Beim Shoppen hast du drei T-Shirts gefunden, die dir besonders gut gefallen, welches hat die beste Klimabilanz?",
        answers: [
            { text: "Standard Baumwollshirt, Made in China", correct: "wrong" },
            { text: "Standard Baumwollshirt, Made in Poland", correct: "ok" },
            { text: "Bio Baumwollshirt, Made in Poland ", correct: "correct" }
        ],
        expl: "Durch den Anbau von Baumwolle entstehen große Umweltschäden, besonders durch den Einsatz von Pflanzenschutzmitteln und den hohen Wasserverbrauch. Bio-Baumwolle schneidet im Vergleich deutlich besser ab als konventionell hergestellte. Zudem kannst du in den kleinen eingenähten Schildchen nachsehen, wo das T-Shirt hergestellt wurde und am besten Kleidung wählen, welche in Europa oder sogar Deutschland genäht wurde. Quelle: Pendo Verlag."
    },

]

export const konsumFragenA5 = [
    {
        hintergrund: "./Bilder/Ampel/Konsum/Level5/küche.png",
        items: [
            "./Bilder/Ampel/Konsum/Level5/restmülltonne.png",
            "./Bilder/Ampel/Konsum/Level5/gelbersack.png",
            "./Bilder/Ampel/Konsum/Level5/papiertonne.png"
        ],
        koords: [
            { bottom: "30%", left: "15%" },
            { bottom: "30%", left: "35%" },
            { bottom: "30%", left: "55%" },
        ],
        type: "ampel",
        question: "Gerade ist zuhause die Milch ausgegangen. In welche Tonne gehört der leere Tetrapack?",
        answers: [
            { text: "In den Restmüll.", correct: "ok" },
            { text: "In den gelben Sack/ die gelbe Tonne oder zur Wertstoffinsel.", correct: "correct" },
            { text: "In die Papiertonne", correct: "false" }
        ],
        expl: "Tetrapacks können nur recycelt werden, wenn sie über den gelben Sack entsorgt werden. In vielen Städten gibt es statt dem gelben Sack Wertstoffinseln, die normalerweise in Fußweite zu erreichen sind. Auf keinen Fall darf der Getränkekarton in die Papiertonne, denn obwohl er von außen aussieht wie aus Pappe, ist im inneren Plastik verarbeitet."

    }
]







