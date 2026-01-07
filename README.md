# Svenska Ordspelet

Ett dagligt svenskt ordquiz-spel inspirerat av högskoleprovet. Testa din ordkunskap varje dag med 4 frågor i olika svårighetsgrader!

## Funktioner

- **Dagliga frågor**: 4 nya frågor varje dag (lätt, medel, svår, supersvår)
- **Streak-tracking**: Håll koll på hur många dagar i rad du spelat
- **Statistik**: Se din progress, accuracy per svårighetsgrad och kalendervy
- **Delningsbara resultat**: Dela dina resultat som Wordle med emoji-grid
- **Förklaringar**: Lär dig ordets betydelse efter varje svar
- **Ljud och animationer**: Engagerande feedback för rätt/fel svar

## Ordbank

Spelet innehåller **120 svenska ord** fördelade över 4 svårighetsnivåer:
- **Lätt**: 30 grundläggande men lite avancerade ord
- **Medel**: 30 högskoleprovet-vanliga ord
- **Svår**: 30 akademiska/litterära ord
- **Supersvår**: 30 sällsynta/tekniska ord

## Kom igång

### Öppna spelet

1. Öppna `index.html` i en modern webbläsare (Chrome, Firefox, Safari, Edge)
2. Spelet fungerar direkt utan någon server eller build-process!

### Ljudfiler (Valfritt)

För att aktivera ljudeffekter, lägg till följande MP3-filer i `assets/sounds/`:
- `correct.mp3` - Ljud när man svarar rätt
- `incorrect.mp3` - Ljud när man svarar fel
- `complete.mp3` - Ljud när man slutför dagens spel
- `streak.mp3` - Ljud vid streak-milestones (7, 30, 50, 100, 365 dagar)

Du kan hitta gratis ljudeffekter på:
- [freesound.org](https://freesound.org/)
- [zapsplat.com](https://www.zapsplat.com/)
- [mixkit.co](https://mixkit.co/free-sound-effects/)

**Obs**: Spelet fungerar perfekt även utan ljudfiler - de är helt valfria!

## Teknisk stack

- **Vanilla JavaScript** - Ingen ramverk eller beroenden
- **HTML5 + CSS3** - Modern, responsiv design
- **localStorage** - Lokal datalagring för streaks och statistik

## Filstruktur

```
svenska-ordspelet/
├── index.html                    # Huvudfil
├── css/                          # Stilmallar
│   ├── reset.css
│   ├── variables.css
│   ├── components.css
│   ├── screens.css
│   └── animations.css
├── js/
│   ├── config.js                 # Konfiguration
│   ├── main.js                   # Huvudlogik
│   ├── services/                 # Backend-logik
│   │   ├── DateService.js
│   │   ├── StorageService.js
│   │   ├── QuestionService.js
│   │   └── StatsService.js
│   ├── ui/                       # UI-komponenter
│   │   ├── ScreenManager.js
│   │   ├── QuestionUI.js
│   │   ├── ResultsUI.js
│   │   ├── StatsUI.js
│   │   ├── ShareUI.js
│   │   └── SoundManager.js
│   └── data/                     # Ordbanker
│       ├── words-easy.js         # 30 lätta ord
│       ├── words-medium.js       # 30 medelsvåra ord
│       ├── words-hard.js         # 30 svåra ord
│       └── words-superhard.js    # 30 supersvåra ord
├── assets/
│   └── sounds/                   # Ljudeffekter (valfritt)
└── README.md
```

## Spelmekanik

### Daglig reset
- Nya frågor genereras varje dag vid midnatt (lokal tid)
- Alla spelare får samma frågor samma dag (deterministisk seed)
- Man kan bara spela en gång per dag

### Streak-system
- Streak ökar när du spelar två dagar i rad
- Streak resettas om du missar en dag
- Milestones: 7, 30, 50, 100, 365 dagar (med speciella ljud och animationer)

### Poängsystem
- Ingen tidsgräns - ta den tid du behöver!
- Varje rätt svar ger 1 poäng
- Maximal poäng per dag: 4/4

## Anpassning

### Lägg till fler ord

Redigera filerna i `js/data/` för att lägga till fler ord:

```javascript
{
    id: "easy_031",
    difficulty: "easy",
    word: "ditt ord här",
    correctAnswer: "rätt svar",
    wrongAnswers: ["fel 1", "fel 2", "fel 3"],
    explanation: "Förklaring av ordets betydelse...",
    category: "substantiv"
}
```

### Ändra färgschema

Redigera `css/variables.css` för att ändra färger:

```css
:root {
    --color-primary-blue: #006AA7;    /* Huvudfärg */
    --color-primary-yellow: #FECC00;  /* Accentfärg */
    --color-correct: #5CB85C;         /* Rätt svar */
    --color-incorrect: #D9534F;       /* Fel svar */
}
```

## Webbläsarkompatibilitet

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Spelet använder:
- localStorage (stöds i alla moderna webbläsare)
- CSS Custom Properties
- ES6 JavaScript
- Flexbox och CSS Grid

## Utveckling

### Lokal utveckling

1. Öppna helt enkelt `index.html` i din webbläsare
2. Gör ändringar i filerna
3. Ladda om sidan för att se ändringarna

### Rensa data för testning

Öppna webbläsarens utvecklarkonsol (F12) och kör:

```javascript
StorageService.clearAllData();
location.reload();
```

Detta raderar all sparad data (streaks, statistik, dagens spel) för att testa från början.

### Simulera olika datum

För att testa daglig reset-logik, ändra systemdatumet på din dator eller modifiera `DateService.getTodayKey()` temporärt.

## Framtida förbättringar

- Practice mode (öva på gamla frågor)
- Achievements system
- Dark mode
- PWA med notifikationer
- Leaderboards (kräver backend)
- Exportera statistik
- Fler ordkategorier (idiom, uttryck, etc.)

## Licens

Detta projekt är skapat som en demo och är fritt att använda och modifiera.

## Bidrag

Vill du bidra med fler svenska ord? Fork:a projektet och skicka en pull request med dina ord!

## Support

Om du hittar buggar eller har förslag, öppna en issue på GitHub.

---

**Lycka till med ordspelet! Kom tillbaka varje dag för nya utmaningar!** 📚🇸🇪
