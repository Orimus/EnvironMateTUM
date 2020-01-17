export let paul = "baum";

export const Questions = [


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

// Ernährungs Fragen singelChoice

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

//Ernährungsfragen Ampel

export const ernaehrungFragenA1 = [

    {
        type: "ampel",
        question: "Du willst dir in der Pause am Kiosk Obst kaufen. Du kaufst …",
        answers: [
            { text: "… einen Apfel aus der Region.", correct: "correct" },
            { text: "… einen Bio-Apfel aus Italien.", correct: "ok" },
            { text: "… einen Apfel aus Neuseeland. ", correct: "wrong" },
        ],
        expl: "Ein Apfel aus der Region verursacht weniger Treibhausgase, da er nicht so weit transportiert werden muss. Ein Bio-Apfel wird zwar mit weniger Pestiziden behandelt, die der Artenvielfalt schaden können, jedoch ist ein Transport im LKW deutlich schlechter für's Klima."
    },


    {
        type: "ampel",
        question: "Du möchtest dir etwas zu Trinken kaufen. Du kaufst …",
        answers: [
            { text: "… eine Mehrweg-Glasflasche.", correct: "ok" },
            { text: "… eine Alu-Getränkedose.", correct: "wrong" },
            { text: "… eine Mehrweg-Plastikflasche.", correct: "correct" },
        ],
        expl: "Eine Glasflasche kann bis zu 50 mal wiederbefüllt werden, eine Plastikflasche nur etwa 25 mal. Wenn die Plastikflasche einen längeren Transportweg hat, dann schneidet sie durch ihr geringeres Gewicht besser ab als die Glasflasche. Wenn du aber zum Beispiel ein Getränk eines regionalen Herstellers kaufst, ist die Glasflasche in diesem Fall besser. Am besten für's Klima ist es, wenn du deine Trinkflasche mit Leitungswasser füllst."
    },


    {
        type: "ampel",
        question: "In der großen Pause hast du richtig Hunger. Du kaufst …",
        answers: [
            { text: "… eine Portion Pommes Frites (tiefgekühlt). ", correct: "correct" },
            { text: "… ein Käsebrötchen.", correct: "ok" },
            { text: "… einen Hamburger (tiefgekühlt). ", correct: "wrong" },
        ],
        expl: "Generell sind Tiefkühllebensmittel schlechter für's Klima als frische Lebensmittel, da die Kühlung viel Energie kostet. Rindfleisch erzeugt in der Herstellung im Vergleich zu Schweine- oder Geflügelfleisch am meisten Treibhausgase. Besonders die Verdauung von Rindern erzeugt große Mengen Methan (auch ein Treibhausgas). Weil die Herstellung von Käse so aufwendig ist, und die Kühe Futter brauchen und Methan bei der Verdauung ausstoßen, sind hier die tiefgekühlten Pommes sogar besser als das Käsebrötchen."
    },

]

const konsumFragenA1 = [
    {
        type: "ampel",
        question: "Für deine Geburtstagsparty morgen musst du noch einige Sachen besorgen. Außerdem hast du für die 20 Partygäste nicht genug Geschirr zuhause. Was machst du?",
        answers: [
            { text: "Ich leihe mir Geschirr von einem Nachbarn aus.", correct: "correct" },
            { text: "Ich kaufe praktisches Plastik-Einweggeschirr", correct: "wrong" },
            { text: "Ich kaufe praktisches Papp-Einweggeschirr aus Recyclingfasern.", correct: "ok" }
        ],
        expl: "Schon vorhandene Sachen von Bekannten auszuleihen ist immer die beste Option. So sparst du nicht nur Geld, sondern auch kräftig Ressourcen und damit immer auch CO2 ein. Auch wenn der Pappbecher aus recycelten Papier besteht, ist er meistens innen mit Plastik beschichtet, da er dir sonst einfach in deiner Hand “zerlaufen” würde. Der Becher landet somit im Restmüll, wobei für einen Kilo Abfall im Schnitt 320g CO2 anfallen. Quelle: Pendo Verlag."
    },

    {
        type: "ampel",
        question: "Beim Shoppen hast du drei T-Shirts gefunden, die dir besonders gut gefallen, welches hat die beste Klimabilanz?",
        answers: [
            { text: "Standard Baumwollshirt, Made in China", correct: "wrong" },
            { text: "Standard Baumwollshirt, Made in Poland", correct: "ok" },
            { text: "Bio Baumwollshirt, Made in Poland ", correct: "correct" }
        ],
        expl: "Durch den Anbau von Baumwolle entstehen große Umweltschäden, besonders durch den Einsatz von Pflanzenschutzmitteln und den hohen Wasserverbrauch. Bio-Baumwolle schneidet im Vergleich deutlich besser ab als konventionell hergestellte. Zudem kannst du in den kleinen eingenähten Schildchen nachsehen, wo das T-Shirt hergestellt wurde und am besten Kleidung wählen, welche in Europa oder sogar Deutschland genäht wurde. Quelle: Pendo Verlag."
    },

    {
        type: "ampel",
        question: "Im Einkaufszentrum hast du dir schnell eine leckere Sushi-Box to-go geholt. Was machst du mit der Plastikbox in der die Sushirollen verpackt waren?",
        answers: [
            { text: "Ich schmeiße sie einfach in den Mülleimer im Einkaufszentrum.", correct: "ok" },
            { text: "Ich nehme die Box mit nach Hause und schmeiße sie dort in den gelben Sack oder gebe sie meinen Eltern für die Wertstoffinsel mit.", correct: "correct" },
            { text: "Ich lasse die Box auf der Bank stehen, wo das Reinigungspersonal sie mitnehmen kann.", correct: "wrong" }
        ],
        expl: "Öffentlich aufgestellte Mülleimer sind, wenn nicht anders gekennzeichnet, immer Restmüll. Dieser wird verbrannt, wobei viel CO2 frei wird und begrenzte Ressourcen einfach verschwendet werden. Kannst du eine Plastikverpackung absolut nicht vermeiden, dann versuche zumindest sie durch de richtige Entsorgung im gelben Sack oder einer Wertstoffinsel dem Recyclingkreislauf zuzuführen."
    },

    {
        type: "ampel",
        question: "Für die Schule brauchst du dringend einen neuen Schreibblock, welchen wählst du?",
        answers: [
            { text: "Ich nehme den Standard-Block, chlorgebleicht.", correct: "wrong" },
            { text: "Ich nehme den Recycling-Block.", correct: "correct" },
            { text: "Ich nehme den nicht chlorgebleichten Standardblock.", correct: "ok" }
        ],
        expl: "Recyclingpapier verbraucht pro Kilo ganze 80% weniger Emissionen als chlorgebleichtes Standardpapier! Recyceltes Papier ist übrigens schon lange nicht mehr braun, bei vielen Blöcken sieht man gar keinen Unterschied mehr zum normalen Papier."
    }

]

const energieFragenA1 = [
    {
        hintergrund: "./Bilder/kiosk-2106622_1280.png",
        items: [
            "./Bilder/icons8-hamburger-100.png",
            "./Bilder/icons8-pommes-100.png",
            "./Bilder/professorfrauneu.png"
        ],
        type: "ampel",
        question: "Für die Party heute abend hast du noch schnell deine Lieblingsjeans gewaschen, die jetzt möglichst schnell trocknen soll. Was machst du?",
        answers: [
            { text: "Ich hänge die Jeans schnell über die sowieso laufende Heizung im Wohnzimmer", correct: "ok" },
            { text: "Ich gebe die Jeans schnell ins Eco-Programm des Wäschetrockners.", correct: "wrong" },
            { text: "Ich hänge die Jeans draußen auf die Wäscheleine.", correct: "correct" }
        ],
        expl: "Der Wäschetrockner verbraucht, auch im Eco-Programm, sehr viel Energie und sollte wenn überhaupt nur im Notfall verwendet werden. Vor allem im Sommer trocknet die Wäsche draußen sehr schnell und macht einen Trockner eigentlich überflüssig. Über die Heizung solltest du am besten nichts hängen, da es im Inneren zu einem Hitzestau kommen kann und die Kleidung im Schlimmsten Fall sogar in Brand geraten könnte."
    },
    /*
        {
            type: "ampel",
            question: "Du möchtest dich waschen, wie tust du dies am effizientesten innerhalb eine Woche?",
            answers: [
                { text: "Ich gehe jeden Tag Baden.", correct: "ok" },
                { text: "Ich Dusche jeden Tag für 15 Minuten", correct: "wrong" },
                { text: "Ich Dusche Montag, Mittwoch und Freitag jeweils 15 Minuten. Am Sonntag nehme ich ein Bad.", correct: "correct" },
            ],
            expl: "Duschen verbraucht pro Minute in etwa 12l. Eine durchschnittliche Badewanne fasst ca. 140l. So ergibt sich ein Wasserverbrauch pro Woche von: \n 140*7 = 980 Liter \n 15*12*7 = 1260 Liter \n 3*12*15+140 = 680 \n Um deinen Wasserverbrauch und somit auch deinen Energieverbrauch zu reduzieren kannst du also, wenn du nur jeden zweiten Tag duschst, sogar am Wochenende ein Bad nehmen. Wenn du allerdings unter 12 Minuten duschst, ist das Duschen dem Baden vorzuziehen."
        },
    
        {
            type: "ampel",
            question: "Du willst dir Nudeln kochen, dafür brauchst du einen Liter Wasser. Wie erhitzt du diesen am effizientesten?",
            answers: [
                { text: "Ich benutze einen Induktionsherd", correct: "correct" },
                { text: "Ich benutze einen konventionellen Herd", correct: "wrong" },
                { text: "Ich benutze den Wasserkocher", correct: "ok" },
            ],
            expl: "Ein konventioneller Herd muss zunächst die Herdplatte, dann den Topf und dann erst das Wasser erhitzen. Ein Wasserkocher erhitzt zwar das Wasser direkt, trotzdem ist ein Induktionsherd, auf Grund des Verfahrens, effizienter.",
        },
    
        {
            type: "",
            question: "",
            answers: [
                { text: "", correct: "" },
                { text: "", correct: "" },
                { text: "", correct: "" },
            ],
            expl: "",
        }
    */
]



const VerkehrFragenA1 = [
    {
        type: "ampel",
        question: "Du möchtest in den Urlaub fliegen. Es gibt verschiedene Buchungsklassen, doch welche ist in Bezug auf deine CO2-Bilanz wohl die Beste?",
        answers: [
            { text: "Economy (Wenig Platz und Service)", correct: "correct" },
            { text: "Business (Mehr Platz und besseres Essen)", correct: "ok" },
            { text: "First (Oft so viel Platz, dass man die Füße ganz ausstrecken kann besonderen Service bekommt)", correct: "wrong" },
        ],
        expl: "Erklärung: Je mehr Platz du im Flugzeug brauchst, desto weniger Menschen finden in der Maschine Platz. Um die selbe Anzahl Personen zu befördern muss der Flieger also öfter die selbe Route abfliegen und benötigt dafür mehr Kerosin."
    },
    {
        type: "ampel",
        question: "Euer Sommerurlaub soll an das Mittelmeer gehen (ca. 1500 km). Dafür könntet ihr fliegen, mit dem Auto fahren oder den Zug nehmen. Aber: Was ist denn auf der Langstrecke die beste Wahl?",
        answers: [
            { text: "Zug", correct: "correct" },
            { text: "Auto", correct: "ok" },
            { text: "Flugzeug", correct: "wrong" },
        ],
        expl: "Zu fliegen ist oft die schlechteste Option, auch wenn es relativ schnell geht. Das Flugzeug produziert für 4 Personen über 4 mal so viele schädliche treibhausgase aus wie das Auto. Noch sparsamer ist der Zug. Er kommt mit etwa 75 % der Abgase des Autos aus. Übrigens: Wenn ihr nur zu zweit in den Urlaub fahrt, erzeugt das Auto fast 3 mal so viele Treibhausgase wie ein Zug pro Person."
    },
    {
        type: "ampel",
        question: "Für deinen Weg zur Schule gibt es mehrere Optionen. Welche wählst du?",
        answers: [
            { text: "Fahrrad", correct: "correct" },
            { text: "E-Scooter", correct: "ok" },
            { text: "Auto der Eltern", correct: "wrong" },
        ],
        expl: "Gerade mit ausleihbaren E-Scootern wird oft nicht gut umgegangen, weswegen sie teilweise nach nur 3 Monaten schon kaputt sind. Bei der Produktion brauchen sie zudem viel Energie, da die Akkus viele Rohstoffe brauchen. Daher lieber Fahrradfahren oder laufen. Das Auto ist die schlechteste Wahl, es benötigt selbst unter den besten Voraussetzungen etwa doppelt so viel Energie wie ein E-Scooter."
    }

]

export const VerkehrFragenA = [
    VerkehrFragenA1,
    [],
    [],
    [],
    []
]

export const ernaehrungFragenA = [
    ernaehrungFragenA1,
    [],
    [],
    [],
    []
]

export const konsumFragenA = [
    konsumFragenA1,
    [],
    [],
    [],
    []
]

export const energieFragenA = [
    energieFragenA1,
    [],
    [],
    [],
    []
]

