export const energieFragenA1 = [
   
    {
        hintergrund: "./Bilder/Ampel/Energie/Level1/Hintergrund.png",
        items: [
            "./Bilder/Ampel/Energie/Level1/heizung.png",
            "./Bilder/Ampel/Energie/Level1/wäschetrockner.png",
            "./Bilder/Ampel/Energie/Level1/wäscheleine.png"
        ],
        koords: [
            { bottom: "35%", left: "5%" },
            { bottom: "35%", left: "35%" },
            { bottom: "35%", left: "65%" },
        ],
        type: "ampel",
        question: "Für die Party heute abend hast du noch schnell deine Lieblingsjeans gewaschen, die jetzt möglichst schnell trocknen soll. Was machst du?",
        answers: [
            { text: "Ich hänge die Jeans schnell über die sowieso laufende Heizung im Wohnzimmer", correct: "ok" },
            { text: "Ich gebe die Jeans schnell ins Eco-Programm des Wäschetrockners.", correct: "wrong" },
            { text: "Ich hänge die Jeans draußen auf die Wäscheleine.", correct: "correct" }
        ],
        tipp: "Wäscheleine",
        expl: "Der Wäschetrockner verbraucht, auch im Eco-Programm, sehr viel Energie und sollte wenn überhaupt nur im Notfall verwendet werden. Vor allem im Sommer trocknet die Wäsche draußen sehr schnell und macht einen Trockner eigentlich überflüssig. Über die Heizung solltest du am besten nichts hängen, da es im Inneren zu einem Hitzestau kommen kann und die Kleidung im Schlimmsten Fall sogar in Brand geraten könnte."
    },
    
  
    
]

export const energieFragenA2 = [
  
    
    {
        hintergrund: "./Bilder/Ampel/Energie/Level2/Hintergrund.png",
        items: [
            "./Bilder/Ampel/Energie/Level2/JedenTagBaden.png",
            "./Bilder/Ampel/Energie/Level2/JedenTagDuschen.png",
            "./Bilder/Ampel/Energie/Level2/AlleAntworten.png"
        ],
        koords: [
            { bottom: "35%", left: "5%" },
            { bottom: "35%", left: "35%" },
            { bottom: "35%", left: "65%" },
        ],
        type: "ampel",
        question: "Du möchtest dich waschen, wie tust du dies am effizientesten innerhalb eine Woche?",
        answers: [
            { text: "Ich gehe jeden Tag Baden.", correct: "ok" },
            { text: "Ich Dusche jeden Tag für 15 Minuten", correct: "wrong" },
            { text: "Ich Dusche Montag, Mittwoch und Freitag jeweils 15 Minuten. Am Sonntag nehme ich ein Bad.", correct: "correct" },
        ],
        expl: "Duschen verbraucht pro Minute in etwa 12l. Eine durchschnittliche Badewanne fasst ca. 140l. So ergibt sich ein Wasserverbrauch pro Woche von: \n 140*7 = 980 Liter \n 15*12*7 = 1260 Liter \n 3*12*15+140 = 680 \n Um deinen Wasserverbrauch und somit auch deinen Energieverbrauch zu reduzieren kannst du also, wenn du nur jeden zweiten Tag duschst, sogar am Wochenende ein Bad nehmen. Wenn du allerdings unter 12 Minuten duschst, ist das Duschen dem Baden vorzuziehen."
    },
    
    
]

export const energieFragenA3 = [
   
        
    
    {
        hintergrund: "./Bilder/Ampel/Energie/Level3/Hintergrund.png",
        items: [
            "./Bilder/Ampel/Energie/Level3/induktionsherd.png",
            "./Bilder/Ampel/Energie/Level3/herd.png",
            "./Bilder/Ampel/Energie/Level3/wasserkocher.png"
        ],
        koords: [
            { bottom: "35%", left: "5%" },
            { bottom: "35%", left: "35%" },
            { bottom: "35%", left: "65%" },
        ],
        type: "ampel",
        question: "Du willst dir Nudeln kochen, dafür brauchst du einen Liter Wasser. Wie erhitzt du diesen am effizientesten?",
        answers: [
            { text: "Ich benutze einen Induktionsherd", correct: "correct" },
            { text: "Ich benutze einen konventionellen Herd", correct: "wrong" },
            { text: "Ich benutze den Wasserkocher", correct: "ok" },
        ],
        expl: "Ein konventioneller Herd muss zunächst die Herdplatte, dann den Topf und dann erst das Wasser erhitzen. Ein Wasserkocher erhitzt zwar das Wasser direkt, trotzdem ist ein Induktionsherd, auf Grund des Verfahrens, effizienter.",
    },
]

export const energieFragenA4 = [
    {
        hintergrund: "./Bilder/Ampel/Energie/Level4/Hintergrund.png",
        items: [
            "./Bilder/Ampel/Energie/Level4/Groß.png",
            "./Bilder/Ampel/Energie/Level4/Klein.png",
            "./Bilder/Ampel/Energie/Level4/Passend.png"
        ],
        koords: [
            { bottom: "35%", left: "5%" },
            { bottom: "35%", left: "35%" },
            { bottom: "35%", left: "65%" },
        ],
        type: "ampel",
        question: "Du möchtest Nudeln kochen. Du kannst einen Topf nehmen, der größer oder kleiner als die Platte ist, oder einen der genauso groß ist. Welcher ist die beste Wahl?",
        answers:[
            {text: "Der Große", correct: "ok"},
            {text: "Der Kleine", correct: "wrong"},
            {text: "Der Passende", correct: "correct"}
            ],
        expl: "Beim Großen dauert das Kochen länger, da nur ein Teil des Topfs beheizt wird. Ist er zu klein, heizt die Platte jedoch am Topf vorbei und die Energie geht direkt verloren."
        }
]

export const energieFragenA5 = [
    {
        hintergrund: "./Bilder/Ampel/Energie/Level4/Hintergrund.png",
        items: [
            "./Bilder/Ampel/Energie/Level4/Groß.png",
            "./Bilder/Ampel/Energie/Level4/Klein.png",
            "./Bilder/Ampel/Energie/Level4/Passend.png"
        ],
        koords: [
            { bottom: "35%", left: "5%" },
            { bottom: "35%", left: "35%" },
            { bottom: "35%", left: "65%" },
        ],
        type: "ampel",
        question: "Du möchtest dir über einen Streaming-Dienst (z.B. Netflix, AmazonPrime, etc.)  eine Serie anschauen. Wie hältst du den Energieverbrauch möglichst gering?",
        answers:[
            {text: "Wenn man über das Tablet oder den Laptop streamt, anstatt über den großen Fernseher, verbraucht man nur ein Zehntel des Stroms.", correct: "ok"},
            {text: "Statt einen Film zu streamen, kaufe ich lieber eine DVD.", correct: "wrong"},
            {text: "Ich streame nicht jeden Tag, reduziere die Auflösung von Videos, höre Musik anstatt mir Musik-Videos anzuschauen und reduziere damit den Energieverbrauch.", correct: "correct"}
            ],
        expl: "Das Streamen am Laptop oder Tablet kann im Vergleich zum Streamen auf einem Fernseher bis zu 20 kg CO2 im Jahr einsparen. Wenn man sich die DVD per Post schicken lässt, braucht sie in etwa gleich viel Energie wie Streaming, außerdem werden Rohstoffe für die Herstellung benötigt. Also gilt: Insgesamt weniger streamen und den Energieverbrauch durch geringere Auflösung reduzieren. Nicht vergessen: Geräte ausschalten! Der Stand-by Modus verbraucht sehr viel Energie.  Quelle: www.jetzt.de und www.utopia.de"
    },
    
    
]
    /*
        
    
        
    
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
