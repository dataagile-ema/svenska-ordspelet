const WORDS_HARD = [
    {
        id: "hard_001",
        difficulty: "hard",
        word: "entusiastisk",
        correctAnswer: "fylld av stor iver och engagemang",
        wrongAnswers: ["kritisk och skeptisk", "ointresserad och ouppmärksam", "försiktig och tveksam"],
        explanation: "Entusiastisk betyder fylld av entusiasm - alltså stor iver, energi och positivt engagemang för något. En entusiastisk person visar tydlig glädje och passion. Exempel: 'Publiken gav entusiastiska applåder efter föreställningen.'",
        category: "adjektiv"
    },
    {
        id: "hard_002",
        difficulty: "hard",
        word: "koloritt",
        correctAnswer: "särpräglad karaktär eller färgrikedom",
        wrongAnswers: ["enformighet och brist på variation", "komisk händelse", "färglös beskrivning"],
        explanation: "Koloritt betyder särpräglad karaktär, atmosfär eller färgrikedom i en beskrivning eller miljö. Ordet används ofta om levande och livfulla skildringar. Exempel: 'Berättelsen hade en stark lokal koloritt från Skåne.'",
        category: "substantiv"
    },
    {
        id: "hard_003",
        difficulty: "hard",
        word: "allegorisk",
        correctAnswer: "bildlig berättelse med dold betydelse",
        wrongAnswers: ["bokstavlig och direkt beskrivning", "humoristisk och rolig", "historiskt korrekt"],
        explanation: "Allegorisk beskriver en berättelse eller framställning där personer och händelser representerar abstrakta idéer eller moraliska budskap. Exempel: 'Djurens gård är en allegorisk roman om makt och korruption.'",
        category: "adjektiv"
    },
    {
        id: "hard_004",
        difficulty: "hard",
        word: "antologi",
        correctAnswer: "samling av litterära texter",
        wrongAnswers: ["enskild roman", "biografisk berättelse", "vetenskaplig avhandling"],
        explanation: "En antologi är en samling av utvalda litterära verk, ofta dikter eller noveller från olika författare. Exempel: 'Jag köpte en antologi med svenska noveller.'",
        category: "substantiv"
    },
    {
        id: "hard_005",
        difficulty: "hard",
        word: "eufemism",
        correctAnswer: "förskönande uttryck för något obehagligt",
        wrongAnswers: ["grovt och direkt uttryck", "teknisk term", "föråldrat ord"],
        explanation: "En eufemism är ett förskönande eller mildare uttryck som används istället för något obehagligt eller känsligt. Exempel: 'Gå bort' är en eufemism för 'dö'.",
        category: "substantiv"
    },
    {
        id: "hard_006",
        difficulty: "hard",
        word: "anspelning",
        correctAnswer: "indirekt hänvisning till något känt",
        wrongAnswers: ["direkt citat", "bokstavlig beskrivning", "fantasifull historia"],
        explanation: "En anspelning är en indirekt hänvisning eller referens till något känt, ofta en kulturell eller historisk händelse. Exempel: 'Titeln var en anspelning på ett känt Shakespeareverk.'",
        category: "substantiv"
    },
    {
        id: "hard_007",
        difficulty: "hard",
        word: "ambivalent",
        correctAnswer: "känna motstridiga känslor samtidigt",
        wrongAnswers: ["entydig och klar i sina känslor", "helt likgiltig", "mycket entusiastisk"],
        explanation: "Ambivalent betyder att ha motstridiga eller blandade känslor gentemot något samtidigt. Exempel: 'Hon kände sig ambivalent inför flytten - både glad och ledsen.'",
        category: "adjektiv"
    },
    {
        id: "hard_008",
        difficulty: "hard",
        word: "dogmatisk",
        correctAnswer: "rigid och okritiskt troende",
        wrongAnswers: ["öppen och ifrågasättande", "flexibel och anpassningsbar", "vetenskaplig och bevisad"],
        explanation: "Dogmatisk betyder att hålla fast vid bestämda läror eller åsikter utan att ifrågasätta dem. Exempel: 'Han var dogmatisk i sin syn på politik.'",
        category: "adjektiv"
    },
    {
        id: "hard_009",
        difficulty: "hard",
        word: "exklusiv",
        correctAnswer: "uteslutande och bara för vissa",
        wrongAnswers: ["öppen för alla", "billig och tillgänglig", "vanlig och vardaglig"],
        explanation: "Exklusiv betyder uteslutande, bara för en utvald grupp eller särskilt högkvalitativ. Exempel: 'Det var en exklusiv restaurang med höga priser.'",
        category: "adjektiv"
    },
    {
        id: "hard_010",
        difficulty: "hard",
        word: "hypotetisk",
        correctAnswer: "antagen men inte bevisad",
        wrongAnswers: ["bevisad och säker", "omöjlig och orimlig", "historiskt dokumenterad"],
        explanation: "Hypotetisk betyder antagen eller baserad på en hypotes, inte bevisad eller verklig. Exempel: 'Vi diskuterade ett hypotetiskt scenario om framtiden.'",
        category: "adjektiv"
    },
    {
        id: "hard_011",
        difficulty: "hard",
        word: "innovativ",
        correctAnswer: "nyskapande och förnyande",
        wrongAnswers: ["traditionell och konservativ", "imitativ och kopierad", "föråldrad och gammalmodig"],
        explanation: "Innovativ betyder nyskapande, förnyande och introducerande av nya idéer eller metoder. Exempel: 'Företaget är känt för sina innovativa produkter.'",
        category: "adjektiv"
    },
    {
        id: "hard_012",
        difficulty: "hard",
        word: "kontraproduktiv",
        correctAnswer: "motverkar det avsedda målet",
        wrongAnswers: ["hjälper till att nå målet", "neutral påverkan", "accelererar processen"],
        explanation: "Kontraproduktiv betyder att något motverkar sitt eget syfte eller det avsedda målet. Exempel: 'Att stänga skolor är kontraproduktivt för utbildningen.'",
        category: "adjektiv"
    },
    {
        id: "hard_013",
        difficulty: "hard",
        word: "lakonisk",
        correctAnswer: "fåordig och kortfattad",
        wrongAnswers: ["omständlig och långrandig", "pratsa m och utförlig", "poetisk och blomstrande"],
        explanation: "Lakonisk betyder fåordig, kortfattad och kärnfull i sitt uttryck. Exempel: 'Hans lakoniska svar bestod av ett enda ord.'",
        category: "adjektiv"
    },
    {
        id: "hard_014",
        difficulty: "hard",
        word: "nostalgi",
        correctAnswer: "vemod och längtan efter det förflutna",
        wrongAnswers: ["glädje över nuet", "oro för framtiden", "likgiltighet för tiden"],
        explanation: "Nostalgi är en känsla av vemod och längtan efter det förflutna, ofta idealiserat. Exempel: 'Musiken väckte nostalgi efter ungdomsåren.'",
        category: "substantiv"
    },
    {
        id: "hard_015",
        difficulty: "hard",
        word: "opportunistisk",
        correctAnswer: "utnyttjar tillfällen utan principer",
        wrongAnswers: ["principfast och trogen", "oflexibel och rigid", "generös och givmild"],
        explanation: "Opportunistisk beskriver någon som utnyttjar tillfällen för egen vinning utan hänsyn till principer eller moral. Exempel: 'Politikern gjorde ett opportunistiskt byte av parti.'",
        category: "adjektiv"
    },
    {
        id: "hard_016",
        difficulty: "hard",
        word: "parafras",
        correctAnswer: "omskrivning med egna ord",
        wrongAnswers: ["ordagrann citering", "bokstavlig översättning", "sammanfattande titel"],
        explanation: "En parafras är en omskrivning av en text med egna ord som behåller den ursprungliga betydelsen. Exempel: 'Läraren bad eleverna göra en parafras av dikten.'",
        category: "substantiv"
    },
    {
        id: "hard_017",
        difficulty: "hard",
        word: "redundans",
        correctAnswer: "överflödig upprepning",
        wrongAnswers: ["nödvändig variation", "kreativ omskrivning", "viktig förtydligande"],
        explanation: "Redundans är onödig upprepning av något som redan sagts eller gjorts. Exempel: 'Frasen 'svart korp' innehåller en redundans eftersom alla korpor är svarta.'",
        category: "substantiv"
    },
    {
        id: "hard_018",
        difficulty: "hard",
        word: "satir",
        correctAnswer: "kritisk och humoristisk skildring",
        wrongAnswers: ["seriös dokumentär", "romantisk berättelse", "faktabaserad rapport"],
        explanation: "Satir är en litterär genre som använder humor, ironi och överdriv för att kritisera samhällsproblem. Exempel: 'Romanen var en satir över politiska skandaler.'",
        category: "substantiv"
    },
    {
        id: "hard_019",
        difficulty: "hard",
        word: "symbios",
        correctAnswer: "ömsesidigt fördelaktigt samliv",
        wrongAnswers: ["fientlig konkurrens", "parasitiskt förhållande", "oberoende existens"],
        explanation: "Symbios är ett samliv mellan två organismer där båda har nytta av varandra. Används också bildligt om samarbete. Exempel: 'Biet och blomman lever i symbios.'",
        category: "substantiv"
    },
    {
        id: "hard_020",
        difficulty: "hard",
        word: "tvetydlig",
        correctAnswer: "som kan tolkas på flera sätt",
        wrongAnswers: ["helt klar och entydig", "omöjlig att förstå", "bokstavlig och direkt"],
        explanation: "Tvetydlig betyder att något kan tolkas på flera olika sätt, ofta med dubbelbetydelse. Exempel: 'Hennes tvetydiga svar gjorde oss osäkra.'",
        category: "adjektiv"
    },
    {
        id: "hard_021",
        difficulty: "hard",
        word: "utopi",
        correctAnswer: "idealisk men orealistisk vision",
        wrongAnswers: ["praktisk och genomförbar plan", "dystopisk framtidsbild", "historisk verklighet"],
        explanation: "En utopi är en idealisk samhällsvision som anses omöjlig att förverkliga. Exempel: 'Ett samhälle utan konflikter är en utopi.'",
        category: "substantiv"
    },
    {
        id: "hard_022",
        difficulty: "hard",
        word: "vigilant",
        correctAnswer: "vaksam och uppmärksam",
        wrongAnswers: ["ouppmärksam och slö", "likgiltig och ointresserad", "avslappnad och lugn"],
        explanation: "Vigilant betyder vaksam, uppmärksam och på sin vakt. Exempel: 'Vakterna var vigilanta under hela natten.'",
        category: "adjektiv"
    },
    {
        id: "hard_023",
        difficulty: "hard",
        word: "altruistisk",
        correctAnswer: "osjälvisk och hjälpsam",
        wrongAnswers: ["självisk och girig", "likgiltig för andra", "manipulativ och utnyttjande"],
        explanation: "Altruistisk betyder osjälvisk och villig att hjälpa andra utan att förvänta sig något tillbaka. Exempel: 'Hans altruistiska handling räddade familjen.'",
        category: "adjektiv"
    },
    {
        id: "hard_024",
        difficulty: "hard",
        word: "dilemma",
        correctAnswer: "svår valsituation mellan två alternativ",
        wrongAnswers: ["enkel och självklar lösning", "många olika möjligheter", "omöjlig situation utan val"],
        explanation: "Ett dilemma är en svår valsituation där man måste välja mellan två alternativ som båda har nackdelar. Exempel: 'Hon stod inför ett moraliskt dilemma.'",
        category: "substantiv"
    },
    {
        id: "hard_025",
        difficulty: "hard",
        word: "ironi",
        correctAnswer: "när man säger motsatsen till vad man menar",
        wrongAnswers: ["när man säger exakt vad man menar", "när man överdriver kraftigt", "när man ljuger medvetet"],
        explanation: "Ironi är en stilfigur där man säger motsatsen till vad man egentligen menar, ofta för humor eller kritik. Exempel: 'Vilket underbart väder!' (när det regnar) är ironiskt."
,
        category: "substantiv"
    },
    {
        id: "hard_026",
        difficulty: "hard",
        word: "plausibel",
        correctAnswer: "trolig och rimlig",
        wrongAnswers: ["otrolig och osannolik", "bevisad och säker", "omöjlig och orimlig"],
        explanation: "Plausibel betyder trolig, rimlig och möjlig att tro på. Exempel: 'Hans förklaring lät plausibel.'",
        category: "adjektiv"
    },
    {
        id: "hard_027",
        difficulty: "hard",
        word: "prokrastinera",
        correctAnswer: "skjuta upp saker man borde göra",
        wrongAnswers: ["slutföra uppgifter i tid", "planera noggrant", "arbeta effektivt"],
        explanation: "Att prokrastinera betyder att skjuta upp eller fördröja uppgifter man borde göra. Exempel: 'Jag prokrastinerar ofta genom att städa istället för att studera.'",
        category: "verb"
    },
    {
        id: "hard_028",
        difficulty: "hard",
        word: "resilient",
        correctAnswer: "återhämtningsförmögande och uthållig",
        wrongAnswers: ["svag och lätt att skada", "stel och oflexibel", "känslig och ömtålig"],
        explanation: "Resilient beskriver förmågan att återhämta sig snabbt från svårigheter och motgångar. Exempel: 'Barnen visade sig vara mycket resilienta efter krisen.'",
        category: "adjektiv"
    },
    {
        id: "hard_029",
        difficulty: "hard",
        word: "tendens",
        correctAnswer: "benägenhet eller riktning",
        wrongAnswers: ["helt slumpmässigt beteende", "garanterad säkerhet", "omöjlig händelse"],
        explanation: "Tendens betyder benägenhet, lutning eller riktning mot något. Exempel: 'Det finns en tendens att folk blir mer digitala.'",
        category: "substantiv"
    },
    {
        id: "hard_030",
        difficulty: "hard",
        word: "prevalent",
        correctAnswer: "utbredd och vanligt förekommande",
        wrongAnswers: ["mycket sällsynt", "helt utrotad", "begränsad och ovanlig"],
        explanation: "Prevalent betyder utbredd, vanligt förekommande eller dominerande. Exempel: 'Förkylning är prevalent under vintern.'",
        category: "adjektiv"
    }
];
