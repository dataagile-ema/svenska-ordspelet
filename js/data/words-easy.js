const WORDS_EASY = [
    {
        id: "easy_001",
        difficulty: "easy",
        word: "fabel",
        correctAnswer: "moraliserande saga",
        wrongAnswers: ["historisk berättelse", "poetisk dikt", "komisk teaterscen"],
        explanation: "En fabel är en kort, moraliserande saga ofta med djur som huvudpersoner som agerar människor. Fabelns syfte är att lära ut en moral eller livslärdom. Exempel: Äsops fabler som 'Räven och druvorna'.",
        category: "substantiv"
    },
    {
        id: "easy_002",
        difficulty: "easy",
        word: "munter",
        correctAnswer: "glad och livlig",
        wrongAnswers: ["tyst och allvarlig", "arg och irriterad", "trött och sömnig"],
        explanation: "Munter betyder glad och livlig på ett spontant och uppriktigt sätt. Det beskriver någon som är i gott humör och full av energi. Exempel: 'Barnen var muntra och lekte glatt i parken.'",
        category: "adjektiv"
    },
    {
        id: "easy_003",
        difficulty: "easy",
        word: "beundra",
        correctAnswer: "se upp till någon med respekt",
        wrongAnswers: ["kritisera någon hårt", "ignorera någon helt", "känna avund mot någon"],
        explanation: "Att beundra någon innebär att man ser upp till personen med respekt och uppskattning för dennes egenskaper eller prestationer. Exempel: 'Hon beundrar sin lärares kunskap och tålamod.'",
        category: "verb"
    },
    {
        id: "easy_004",
        difficulty: "easy",
        word: "stolt",
        correctAnswer: "nöjd med sig själv eller sina prestationer",
        wrongAnswers: ["missnöjd med resultatet", "rädd för misslyckande", "likgiltig inför utfallet"],
        explanation: "Stolt betyder att vara nöjd och ha en positiv känsla över egna eller andras prestationer. Det kan också betyda att ha självrespekt. Exempel: 'Han var stolt över sitt examensbetyg.'",
        category: "adjektiv"
    },
    {
        id: "easy_005",
        difficulty: "easy",
        word: "samtida",
        correctAnswer: "som lever eller existerar samtidigt",
        wrongAnswers: ["från en tidigare tidsålder", "från framtiden", "som inträffar sällan"],
        explanation: "Samtida betyder att något eller någon existerar eller lever under samma tidsperiod. Används ofta om personer som levde samtidigt. Exempel: 'Strindberg var samtida med flera andra stora svenska författare.'",
        category: "adjektiv"
    },
    {
        id: "easy_006",
        difficulty: "easy",
        word: "utesluta",
        correctAnswer: "utestänga eller inte inkludera",
        wrongAnswers: ["välkomna med öppna armar", "berömma och uppmuntra", "behandla rättvist"],
        explanation: "Att utesluta någon betyder att inte låta personen vara med eller inte inkludera något i en bedömning eller grupp. Exempel: 'Vi kan inte utesluta möjligheten att det börjar regna.'",
        category: "verb"
    },
    {
        id: "easy_007",
        difficulty: "easy",
        word: "tillfällig",
        correctAnswer: "som varar en begränsad tid",
        wrongAnswers: ["som pågår för evigt", "som är helt säker", "som händer regelbundet"],
        explanation: "Tillfällig beskriver något som bara varar under en kortare period och inte är permanent. Exempel: 'Hon har ett tillfälligt jobb under sommaren.'",
        category: "adjektiv"
    },
    {
        id: "easy_008",
        difficulty: "easy",
        word: "betydande",
        correctAnswer: "viktig eller omfattande",
        wrongAnswers: ["obetydlig och liten", "snabb och effektiv", "ovanlig och sällsynt"],
        explanation: "Betydande betyder att något är viktigt, stort eller har stor inverkan. Det används för att beskriva saker som har vikt eller omfattning. Exempel: 'Upptäckten fick betydande följder för forskningen.'",
        category: "adjektiv"
    },
    {
        id: "easy_009",
        difficulty: "easy",
        word: "glädje",
        correctAnswer: "känsla av lycka",
        wrongAnswers: ["känsla av sorg", "känsla av rädsla", "känsla av ilska"],
        explanation: "Glädje är en positiv känsla av lycka och välbefinnande. Det är en av de grundläggande känslorna. Exempel: 'Barnet hoppade av glädje när det såg presenten.'",
        category: "substantiv"
    },
    {
        id: "easy_010",
        difficulty: "easy",
        word: "förklara",
        correctAnswer: "göra något begripligt",
        wrongAnswers: ["göra något oklart", "dölja information", "ifrågasätta påståenden"],
        explanation: "Att förklara innebär att göra något lättare att förstå genom att ge information eller beskriva hur något fungerar. Exempel: 'Läraren förklarade matematikuppgiften på tavlan.'",
        category: "verb"
    },
    {
        id: "easy_011",
        difficulty: "easy",
        word: "modig",
        correctAnswer: "tapper och vågar ta risker",
        wrongAnswers: ["rädd och försiktig", "lat och omotiverad", "arg och aggressiv"],
        explanation: "Modig betyder att ha mod och våga göra saker trots rädsla eller fara. Motsatsen är feg. Exempel: 'Det var modigt av henne att säga ifrån.'",
        category: "adjektiv"
    },
    {
        id: "easy_012",
        difficulty: "easy",
        word: "ordning",
        correctAnswer: "struktur och organisation",
        wrongAnswers: ["kaos och förvirring", "slumpmässighet", "brist på planering"],
        explanation: "Ordning betyder att saker är organiserade, strukturerade och på sin rätta plats. Det kan också betyda ett visst system eller arrangemang. Exempel: 'Det är viktigt att hålla ordning i klassrummet.'",
        category: "substantiv"
    },
    {
        id: "easy_013",
        difficulty: "easy",
        word: "avundas",
        correctAnswer: "önska att man hade det någon annan har",
        wrongAnswers: ["vara nöjd med sitt eget", "visa medkänsla för andra", "ge bort sina ägodelar"],
        explanation: "Att avundas någon betyder att man önskar att man hade det som någon annan har, ofta med en negativ känsla. Exempel: 'Hon avundades sin syster som fick åka på resa.'",
        category: "verb"
    },
    {
        id: "easy_014",
        difficulty: "easy",
        word: "trotsig",
        correctAnswer: "som visar motstånd eller olydnad",
        wrongAnswers: ["som är mycket lydig", "som är rädd och osäker", "som är vänlig och artig"],
        explanation: "Trotsig beskriver någon som visar motstånd eller vägrar lyda, ofta på ett envist sätt. Exempel: 'Det trotiga barnet vägrade göra som föräldrarna sa.'",
        category: "adjektiv"
    },
    {
        id: "easy_015",
        difficulty: "easy",
        word: "häpna",
        correctAnswer: "bli mycket förvånad",
        wrongAnswers: ["bli mycket arg", "bli mycket ledsen", "bli mycket rädd"],
        explanation: "Att häpna betyder att bli starkt förvånad eller förbluffad över något oväntat. Exempel: 'Publiken häpnade över magikerens trick.'",
        category: "verb"
    },
    {
        id: "easy_016",
        difficulty: "easy",
        word: "bildad",
        correctAnswer: "som har god utbildning och kunskap",
        wrongAnswers: ["som saknar utbildning", "som är mycket sportig", "som är mycket praktisk"],
        explanation: "Bildad beskriver någon som har god allmänbildning och kunskap, ofta genom studier. Exempel: 'Hon är en mycket bildad person som läser mycket.'",
        category: "adjektiv"
    },
    {
        id: "easy_017",
        difficulty: "easy",
        word: "minsann",
        correctAnswer: "uttryck för betoning eller förvåning",
        wrongAnswers: ["uttryck för tvivel", "uttryck för likgiltighet", "uttryck för glädje"],
        explanation: "Minsann är ett gammaldags uttryck som används för att betona något eller visa förvåning. Det kan också användas ironiskt. Exempel: 'Det var minsann en överraskning!'",
        category: "interjektion"
    },
    {
        id: "easy_018",
        difficulty: "easy",
        word: "vanlig",
        correctAnswer: "som förekommer ofta eller är normal",
        wrongAnswers: ["som är mycket sällsynt", "som är exklusiv", "som är förbjuden"],
        explanation: "Vanlig betyder att något är normalt, förekommer ofta eller är vardagligt. Motsatsen är ovanlig. Exempel: 'Det är vanligt att det regnar i november.'",
        category: "adjektiv"
    },
    {
        id: "easy_019",
        difficulty: "easy",
        word: "utveckla",
        correctAnswer: "göra bättre eller mer avancerad",
        wrongAnswers: ["göra sämre eller enklare", "behålla oförändrad", "förstöra helt"],
        explanation: "Att utveckla innebär att förbättra, förändra eller göra något mer avancerat över tid. Det kan gälla både konkreta och abstrakta saker. Exempel: 'Företaget utvecklar nya produkter.'",
        category: "verb"
    },
    {
        id: "easy_020",
        difficulty: "easy",
        word: "sällsynt",
        correctAnswer: "som förekommer mycket sällan",
        wrongAnswers: ["som finns överallt", "som är mycket vanligt", "som är obligatoriskt"],
        explanation: "Sällsynt betyder att något är ovanligt och förekommer mycket sällan. Exempel: 'Det är en sällsynt fågel som bara ses ibland.'",
        category: "adjektiv"
    },
    {
        id: "easy_021",
        difficulty: "easy",
        word: "förbättra",
        correctAnswer: "göra något bättre",
        wrongAnswers: ["göra något sämre", "lämna oförändrat", "förstöra helt"],
        explanation: "Att förbättra betyder att göra något bättre än det var tidigare. Exempel: 'Träning kan förbättra din hälsa.'",
        category: "verb"
    },
    {
        id: "easy_022",
        difficulty: "easy",
        word: "frisk",
        correctAnswer: "som är vid god hälsa",
        wrongAnswers: ["som är sjuk", "som är trött", "som är gammal"],
        explanation: "Frisk betyder att vara vid god hälsa och inte sjuk. Exempel: 'Efter semestern känner jag mig frisk och utvilad.'",
        category: "adjektiv"
    },
    {
        id: "easy_023",
        difficulty: "easy",
        word: "lugn",
        correctAnswer: "fridfull och stilla",
        wrongAnswers: ["stressad och orolig", "arg och upprörd", "rädd och nervös"],
        explanation: "Lugn beskriver ett tillstånd av ro och frid, utan stress eller oro. Exempel: 'Havet var lugnt och spegelblank.'",
        category: "adjektiv"
    },
    {
        id: "easy_024",
        difficulty: "easy",
        word: "ivrig",
        correctAnswer: "mycket entusiastisk och angelägen",
        wrongAnswers: ["ointresserad och likgiltig", "rädd och tveksam", "arg och irriterad"],
        explanation: "Ivrig betyder att vara mycket intresserad och angelägen om något, full av entusiasm. Exempel: 'Hon var ivrig att börja sitt nya jobb.'",
        category: "adjektiv"
    },
    {
        id: "easy_025",
        difficulty: "easy",
        word: "enkel",
        correctAnswer: "lätt att förstå eller göra",
        wrongAnswers: ["mycket svår och komplicerad", "omöjlig att lösa", "kräver expertkunskap"],
        explanation: "Enkel betyder att något är lätt att förstå, göra eller använda. Motsatsen är komplicerad eller svår. Exempel: 'Det är en enkel uppgift som går snabbt.'",
        category: "adjektiv"
    },
    {
        id: "easy_026",
        difficulty: "easy",
        word: "nöjd",
        correctAnswer: "tillfredsställd och belåten",
        wrongAnswers: ["missnöjd och besviken", "arg och frustrerad", "ledsen och deprimerad"],
        explanation: "Nöjd betyder att vara tillfredsställd med något och känna sig belåten. Exempel: 'Han var nöjd med sitt resultat på provet.'",
        category: "adjektiv"
    },
    {
        id: "easy_027",
        difficulty: "easy",
        word: "vaken",
        correctAnswer: "som inte sover",
        wrongAnswers: ["som sover djupt", "som drömmer", "som är medvetslös"],
        explanation: "Vaken betyder att vara medveten och inte sova. Motsatsen är sovande. Exempel: 'Jag låg vaken hela natten på grund av bullret.'",
        category: "adjektiv"
    },
    {
        id: "easy_028",
        difficulty: "easy",
        word: "bekymrad",
        correctAnswer: "orolig och bekymmersa m",
        wrongAnswers: ["glad och lättad", "arg och irriterad", "uttråkad och ointresserad"],
        explanation: "Bekymrad betyder att vara orolig och ha bekymmer över något. Exempel: 'Föräldrarna var bekymrade när barnet inte kom hem.'",
        category: "adjektiv"
    },
    {
        id: "easy_029",
        difficulty: "easy",
        word: "lycklig",
        correctAnswer: "mycket glad och nöjd",
        wrongAnswers: ["mycket ledsen", "mycket arg", "mycket rädd"],
        explanation: "Lycklig betyder att känna stor glädje och lycka. Det är en stark positiv känsla. Exempel: 'De var lyckliga när de gifte sig.'",
        category: "adjektiv"
    },
    {
        id: "easy_030",
        difficulty: "easy",
        word: "snabb",
        correctAnswer: "som rör sig eller händer fort",
        wrongAnswers: ["som rör sig långsamt", "som står stilla", "som aldrig händer"],
        explanation: "Snabb beskriver något som rör sig, sker eller fungerar i hög hastighet. Motsatsen är långsam. Exempel: 'Geparden är ett mycket snabbt djur.'",
        category: "adjektiv"
    }
];
