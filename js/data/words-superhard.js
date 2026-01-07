const WORDS_SUPERHARD = [
    {
        id: "superhard_001",
        difficulty: "superhard",
        word: "epitet",
        correctAnswer: "beskrivande tillnamn eller beteckning",
        wrongAnswers: ["lång berättande dikt", "kort sammanfattning", "muntlig överenskommelse"],
        explanation: "Epitet är ett beskrivande tilläggsord eller en beteckning som framhäver en särskild egenskap hos någon eller något. Ofta används det om återkommande beskrivningar i litteratur. Exempel: 'Karl XII kallas ofta med epitetet järnkungen'.",
        category: "substantiv"
    },
    {
        id: "superhard_002",
        difficulty: "superhard",
        word: "paradox",
        correctAnswer: "påstående som verkar motsägelsefullt men kan vara sant",
        wrongAnswers: ["logiskt och självklart resonemang", "bevisad vetenskaplig teori", "enkel och lättförståelig förklaring"],
        explanation: "En paradox är ett påstående eller situation som verkar motsägelsefull eller absurd men som vid närmare granskning kan vara sant eller innehålla en djupare sanning. Exempel: 'Det är en paradox att man måste spendera pengar för att spara pengar.'",
        category: "substantiv"
    },
    {
        id: "superhard_003",
        difficulty: "superhard",
        word: "empirisk",
        correctAnswer: "baserad på erfarenhet och observation",
        wrongAnswers: ["baserad på teori och spekulation", "grundad i tro och känsla", "härledd från logik ensam"],
        explanation: "Empirisk betyder baserad på praktisk erfarenhet, observation och experiment snarare än teori. Exempel: 'Forskningen krävde empiriska bevis, inte bara teorier.'",
        category: "adjektiv"
    },
    {
        id: "superhard_004",
        difficulty: "superhard",
        word: "solipsism",
        correctAnswer: "filosofisk åsikt att bara jaget existerar",
        wrongAnswers: ["tro på flera gudar", "materialistisk världsbild", "demokratisk ideologi"],
        explanation: "Solipsism är en filosofisk ståndpunkt som hävdar att endast det egna jaget och dess upplevelser kan vetas existera med säkerhet. Exempel: 'Solipsism är en extrem form av skepticism.'",
        category: "substantiv"
    },
    {
        id: "superhard_005",
        difficulty: "superhard",
        word: "metafor",
        correctAnswer: "bildligt uttryck utan jämförelseord",
        wrongAnswers: ["bokstavlig beskrivning", "direkt jämförelse med 'som'", "vetenskaplig term"],
        explanation: "En metafor är en stilfigur där man överför en ords betydelse till något annat för att skapa en bild, utan att använda jämförelseord. Exempel: 'Livet är en resa' är en metafor.",
        category: "substantiv"
    },
    {
        id: "superhard_006",
        difficulty: "superhard",
        word: "apati",
        correctAnswer: "känsla av likgiltighet och ointresse",
        wrongAnswers: ["stark entusiasm", "djup sorg", "intensiv rädsla"],
        explanation: "Apati är ett tillstånd av känslolöshet, likgiltighet och brist på intresse eller motivation. Exempel: 'Efter nederlaget drabbades laget av apati.'",
        category: "substantiv"
    },
    {
        id: "superhard_007",
        difficulty: "superhard",
        word: "cynisk",
        correctAnswer: "misstänksam mot människors motiv",
        wrongAnswers: ["naiv och lättlurad", "optimistisk och hoppfull", "empatisk och förstående"],
        explanation: "Cynisk betyder misstänksam mot människors ärlighet och motiv, ofta med en negativ syn på mänsklig natur. Exempel: 'Han blev cynisk efter att ha blivit bedragen flera gånger.'",
        category: "adjektiv"
    },
    {
        id: "superhard_008",
        difficulty: "superhard",
        word: "didaktisk",
        correctAnswer: "avsedd att lära eller undervisa",
        wrongAnswers: ["underhållande och rolig", "obegriplig och förvirrande", "känslomässig och rörande"],
        explanation: "Didaktisk betyder att något har ett pedagogiskt eller undervisande syfte. Kan också betyda alltför belärande. Exempel: 'Berättelsen hade en didaktisk ton.'",
        category: "adjektiv"
    },
    {
        id: "superhard_009",
        difficulty: "superhard",
        word: "eklektisk",
        correctAnswer: "som kombinerar element från olika källor",
        wrongAnswers: ["enhetlig och konsekvent", "minimalistisk och enkel", "traditionell och konventionell"],
        explanation: "Eklektisk beskriver något som väljer och kombinerar element från olika stilar, metoder eller källor. Exempel: 'Hennes eklektiska smak blandade olika epoker.'",
        category: "adjektiv"
    },
    {
        id: "superhard_010",
        difficulty: "superhard",
        word: "fatalism",
        correctAnswer: "tro på att allt är förutbestämt",
        wrongAnswers: ["tro på fri vilja", "optimistisk framtidstro", "vetenskaplig determinism"],
        explanation: "Fatalism är uppfattningen att alla händelser är förutbestämda och oundvikliga, vilket gör motstånd meningslöst. Exempel: 'Hans fatalism gjorde att han inte försökte förändra situationen.'",
        category: "substantiv"
    },
    {
        id: "superhard_011",
        difficulty: "superhard",
        word: "hedonism",
        correctAnswer: "livsstil fokuserad på njutning",
        wrongAnswers: ["asketisk livsstil", "altruistisk hållning", "rationell filosofi"],
        explanation: "Hedonism är en livsfilosofi som prioriterar njutning och tillfredsställelse som livets högsta mål. Exempel: 'Hedonism står i kontrast till asketism.'",
        category: "substantiv"
    },
    {
        id: "superhard_012",
        difficulty: "superhard",
        word: "ikonoklas t",
        correctAnswer: "som utmanar etablerade åsikter",
        wrongAnswers: ["som följer tradition slaviskt", "som är konservativ", "som är likgiltig för normer"],
        explanation: "Ikonoklast betyder bildstormare, någon som utmanar eller bryter ner etablerade idéer, traditioner eller auktoriteter. Exempel: 'Konstnären var en ikonoklast som bröt mot konventioner.'",
        category: "substantiv"
    },
    {
        id: "superhard_013",
        difficulty: "superhard",
        word: "juxtaposition",
        correctAnswer: "placering av motsatser bredvid varandra",
        wrongAnswers: ["harmonisk kombination", "kronologisk ordning", "symmetrisk uppställning"],
        explanation: "Juxtaposition är en stilfigur där motsatta eller kontrasterande element placeras nära varandra för effekt. Exempel: 'Dikten använde juxtaposition av ljus och mörker.'",
        category: "substantiv"
    },
    {
        id: "superhard_014",
        difficulty: "superhard",
        word: "katarsis",
        correctAnswer: "känslomässig rening genom konst",
        wrongAnswers: ["intellektuell stimulans", "fysisk träning", "materiell vinst"],
        explanation: "Katarsis är en känslomässig rening eller befrielse som uppnås genom att uppleva konst, särskilt tragedi. Exempel: 'Publiken upplevde katarsis efter den tragiska pjäsen.'",
        category: "substantiv"
    },
    {
        id: "superhard_015",
        difficulty: "superhard",
        word: "likvid",
        correctAnswer: "som lätt kan omvandlas till pengar",
        wrongAnswers: ["fast och oföränderlig", "värdelös och oanvändbar", "svår att sälja"],
        explanation: "Likvid betyder att tillgångar enkelt kan omvandlas till kontanter, eller att någon har tillräckligt med pengar. Exempel: 'Företaget behöver vara likvid för att betala räkningar.'",
        category: "adjektiv"
    },
    {
        id: "superhard_016",
        difficulty: "superhard",
        word: "machiavellisk",
        correctAnswer: "som använder listiga och hänsynslösa metoder",
        wrongAnswers: ["ärlig och transparent", "naiv och godtrogen", "demokratisk och rättvis"],
        explanation: "Machiavellisk beskriver hänsynslösa och listiga metoder för att nå makt, där målet helgar medlen. Exempel: 'Hans machiavelliska taktik skrämde konkurrenterna.'",
        category: "adjektiv"
    },
    {
        id: "superhard_017",
        difficulty: "superhard",
        word: "nihilism",
        correctAnswer: "förnekande av all mening och värde",
        wrongAnswers: ["stark tro på mening", "religiös övertygelse", "optimistisk livssyn"],
        explanation: "Nihilism är en filosofisk ståndpunkt som förnekar existensen av objektiv mening, värde eller sanning. Exempel: 'Nihilism hävdar att livet saknar inneboende mening.'",
        category: "substantiv"
    },
    {
        id: "superhard_018",
        difficulty: "superhard",
        word: "paradigm",
        correctAnswer: "grundläggande tankemönster eller modell",
        wrongAnswers: ["tillfällig trend", "enskild teori", "personlig åsikt"],
        explanation: "Paradigm är ett grundläggande tankemönster, modell eller exempel som formar hur vi förstår världen. Exempel: 'Ett paradigmskifte förändrade hela forskningsfältet.'",
        category: "substantiv"
    },
    {
        id: "superhard_019",
        difficulty: "superhard",
        word: "perifert",
        correctAnswer: "i utkanten eller av mindre betydelse",
        wrongAnswers: ["centralt och viktigt", "dominerande och huvudsakligt", "genomgripande och omfattande"],
        explanation: "Perifert betyder beläget i utkanten eller av mindre central betydelse. Motsatsen är centralt. Exempel: 'Frågan var endast perifert relaterad till ämnet.'",
        category: "adjektiv"
    },
    {
        id: "superhard_020",
        difficulty: "superhard",
        word: "quintessens",
        correctAnswer: "den renaste eller mest typiska formen",
        wrongAnswers: ["förvanskad version", "blandad form", "ofullständig kopia"],
        explanation: "Quintessens betyder kärnan, essensen eller den mest typiska och renaste formen av något. Exempel: 'Denna målning är quintessensen av barocken.'",
        category: "substantiv"
    },
    {
        id: "superhard_021",
        difficulty: "superhard",
        word: "retorik",
        correctAnswer: "konsten att tala övertygande",
        wrongAnswers: ["stumhet och tystnad", "sanningsenlig rapportering", "spontant tal"],
        explanation: "Retorik är läran om talkonst och förmågan att tala eller skriva övertygande och effektivt. Exempel: 'Politikern var känd för sin starka retorik.'",
        category: "substantiv"
    },
    {
        id: "superhard_022",
        difficulty: "superhard",
        word: "semantisk",
        correctAnswer: "som rör ords betydelse",
        wrongAnswers: ["som rör ords uttal", "som rör ords stavning", "som rör ords ursprung"],
        explanation: "Semantisk betyder relaterad till betydelsen av ord och språkliga uttryck. Exempel: 'Det var en semantisk skillnad mellan termerna.'",
        category: "adjektiv"
    },
    {
        id: "superhard_023",
        difficulty: "superhard",
        word: "tangentiell",
        correctAnswer: "endast ytligt beröra något",
        wrongAnswers: ["djupt och grundligt behandla", "centralt fokuserad på", "direkt adressera"],
        explanation: "Tangentiell betyder att något bara ytligt eller i förbigående berör en fråga, inte behandlar den i grunden. Exempel: 'Hans kommentarer var tangentiella till huvudämnet.'",
        category: "adjektiv"
    },
    {
        id: "superhard_024",
        difficulty: "superhard",
        word: "ubikvi tös",
        correctAnswer: "som finns överallt samtidigt",
        wrongAnswers: ["mycket sällsynt", "helt frånvarande", "begränsad till en plats"],
        explanation: "Ubikvi tös betyder närvarande överallt samtidigt eller mycket vanligt förekommande. Exempel: 'Smartphones har blivit ubikvi tösa i samhället.'",
        category: "adjektiv"
    },
    {
        id: "superhard_025",
        difficulty: "superhard",
        word: "veritabel",
        correctAnswer: "äkta och verklig",
        wrongAnswers: ["falsk och förfalskad", "tveksam och osäker", "symbolisk och bildlig"],
        explanation: "Veritabel betyder äkta, verklig och sann, ofta används för betoning. Exempel: 'Det var en veritabel katastrof.'",
        category: "adjektiv"
    },
    {
        id: "superhard_026",
        difficulty: "superhard",
        word: "xenofobi",
        correctAnswer: "rädsla eller hat mot främlingar",
        wrongAnswers: ["kärlek till andra kulturer", "nyfikenhet på det okända", "respekt för skillnader"],
        explanation: "Xenofobi är rädsla för eller fientlighet mot människor från andra länder eller kulturer. Exempel: 'Xenofobi är ett växande problem i vissa länder.'",
        category: "substantiv"
    },
    {
        id: "superhard_027",
        difficulty: "superhard",
        word: "analfabet",
        correctAnswer: "som inte kan läsa eller skriva",
        wrongAnswers: ["mycket bildad person", "flerspråkig individ", "begåvad författare"],
        explanation: "Analfabet är en person som inte kan läsa eller skriva. Används också bildligt om kunskapsluckor. Exempel: 'Digitala analfabeter har svårt med moderna tekniker.'",
        category: "substantiv"
    },
    {
        id: "superhard_028",
        difficulty: "superhard",
        word: "demagog",
        correctAnswer: "politiker som manipulerar med känslor",
        wrongAnswers: ["rationell beslutsfattare", "demokratisk ledare", "objektiv medlare"],
        explanation: "En demagog är en politiker som vädjar till känslor och fördomar istället för rationella argument för att vinna makt. Exempel: 'Demagogen använde rädsla för att få stöd.'",
        category: "substantiv"
    },
    {
        id: "superhard_029",
        difficulty: "superhard",
        word: "efemär",
        correctAnswer: "mycket kortvarig och flyktig",
        wrongAnswers: ["evig och bestående", "långvarig och uthållig", "permanent och oföränderlig"],
        explanation: "Efemär betyder mycket kortvarig, flyktig och övergående. Exempel: 'Berömmelsen visade sig vara efemär.'",
        category: "adjektiv"
    },
    {
        id: "superhard_030",
        difficulty: "superhard",
        word: "solecism",
        correctAnswer: "grammatiskt fel eller pinsam tabbe",
        wrongAnswers: ["perfekt grammatik", "elegant uttryck", "korrekt användning"],
        explanation: "Solecism är ett grammatiskt fel eller en språklig felaktighet, kan också betyda en social tabbe. Exempel: 'Att säga 'jag och han' istället för 'han och jag' är en solecism.'",
        category: "substantiv"
    }
];
