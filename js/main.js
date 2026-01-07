let gameState = null;
let currentQuestionIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing app...');
    try {
        initializeApp();
    } catch (error) {
        console.error('Failed to initialize app:', error);
        alert('Ett fel uppstod vid start av spelet. Se konsolen för detaljer.');
    }
});

function initializeApp() {
    console.log('Initializing app...');

    if (!StorageService.isAvailable()) {
        alert('localStorage är inte tillgängligt. Spelet kräver localStorage för att fungera.');
        return;
    }

    StorageService.migrateData();

    ScreenManager.init();
    StatsUI.init();
    ShareUI.init();
    SoundManager.init();

    gameState = initializeGameState();
    console.log('Game state initialized:', gameState);

    setupEventListeners();
    console.log('Event listeners set up');

    // Always show welcome screen first, let user decide to continue
    console.log('Initial game status:', gameState.status);

    if (gameState.status === 'completed') {
        console.log('Game already completed today - showing completion screen');
        showCompletionScreenFromState();
    } else {
        console.log('Showing welcome screen');
        showWelcomeScreen();
    }

    console.log('App initialized successfully');
}

function initializeGameState() {
    const todayKey = DateService.getTodayKey();
    const storedGameState = StorageService.getGameState();

    if (!storedGameState || storedGameState.dateKey !== todayKey) {
        console.log('Creating new game state for today:', todayKey);

        const seed = DateService.getDailySeed(todayKey);
        console.log('Daily seed:', seed);

        const questions = QuestionService.generateDailyQuestions(seed);
        console.log('Generated questions:', questions);

        if (!questions || questions.length !== 4) {
            console.error('Failed to generate questions! Word banks may not be loaded.');
            console.log('WORDS_EASY:', typeof WORDS_EASY !== 'undefined' ? WORDS_EASY.length + ' words' : 'undefined');
            console.log('WORDS_MEDIUM:', typeof WORDS_MEDIUM !== 'undefined' ? WORDS_MEDIUM.length + ' words' : 'undefined');
            console.log('WORDS_HARD:', typeof WORDS_HARD !== 'undefined' ? WORDS_HARD.length + ' words' : 'undefined');
            console.log('WORDS_SUPERHARD:', typeof WORDS_SUPERHARD !== 'undefined' ? WORDS_SUPERHARD.length + ' words' : 'undefined');
        }

        const newGameState = {
            dateKey: todayKey,
            seed: seed,
            questions: questions,
            currentQuestionIndex: 0,
            answers: [],
            startTime: null,
            completedTime: null,
            status: 'not_started'
        };

        StorageService.saveGameState(newGameState);
        return newGameState;
    }

    console.log('Using stored game state from:', storedGameState.dateKey);
    return storedGameState;
}

function setupEventListeners() {
    const playButton = document.getElementById('play-button');
    if (playButton) {
        playButton.addEventListener('click', () => {
            console.log('Play button clicked!');
            startGame();
        });
        console.log('Play button event listener attached');
    } else {
        console.error('Play button not found!');
    }
}

function showWelcomeScreen() {
    console.log('Showing welcome screen...');
    const userProgress = StorageService.getUserProgress();

    const streakEl = document.getElementById('welcome-streak');
    const streakUnitEl = document.getElementById('welcome-streak-unit');
    streakEl.textContent = userProgress.currentStreak;
    streakUnitEl.textContent = userProgress.currentStreak === 1 ? 'dag' : 'dagar';

    const motivationalMsg = StatsService.getWelcomeMessage();
    document.getElementById('motivational-message').textContent = motivationalMsg;

    const hasPlayed = StatsService.hasPlayedToday();
    const playButton = document.getElementById('play-button');
    playButton.disabled = hasPlayed;
    document.getElementById('already-played-message').style.display = hasPlayed ? 'block' : 'none';
    document.getElementById('motivational-message').style.display = hasPlayed ? 'none' : 'block';

    // Update button text if there's a game in progress
    if (gameState.status === 'in_progress' && gameState.answers.length > 0) {
        playButton.textContent = `Fortsätt spela (${gameState.answers.length}/4)`;
    } else {
        playButton.textContent = 'Spela dagens ord';
    }

    console.log('Has played today:', hasPlayed);
    console.log('Play button disabled:', playButton.disabled);
    console.log('Game status:', gameState.status);

    ScreenManager.showScreen('welcome-screen');
}

function startGame() {
    console.log('Starting/continuing game...');

    // If already in progress, continue from where we left off
    if (gameState.status === 'in_progress' && gameState.answers.length > 0) {
        console.log('Continuing from question', gameState.answers.length + 1);
        currentQuestionIndex = gameState.answers.length;
    } else {
        // Fresh start
        console.log('Starting fresh game');
        gameState.status = 'in_progress';
        gameState.startTime = Date.now();
        gameState.currentQuestionIndex = 0;
        gameState.answers = [];
        currentQuestionIndex = 0;
    }

    StorageService.saveGameState(gameState);
    console.log('Game state saved, showing question', currentQuestionIndex + 1);

    showQuestion();
}

function continueGame() {
    currentQuestionIndex = gameState.currentQuestionIndex;
    showQuestion();
}

function showQuestion() {
    console.log('Showing question', currentQuestionIndex + 1);
    const question = gameState.questions[currentQuestionIndex];
    console.log('Question:', question);

    QuestionUI.render(question, currentQuestionIndex);

    QuestionUI.onAnswerSelected((selectedAnswer, timeSpent) => {
        handleAnswer(selectedAnswer, timeSpent);
    });

    ScreenManager.showScreen('question-screen');
}

function handleAnswer(selectedAnswer, timeSpent) {
    QuestionUI.disableAnswers();

    const question = gameState.questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === question.correctAnswer;

    gameState.answers.push({
        questionId: question.id,
        selectedAnswer: selectedAnswer,
        isCorrect: isCorrect,
        timeSpent: timeSpent
    });

    gameState.currentQuestionIndex = currentQuestionIndex;
    StorageService.saveGameState(gameState);

    highlightAnswers(selectedAnswer, question.correctAnswer, isCorrect);

    SoundManager.play(isCorrect ? 'correct' : 'incorrect');

    setTimeout(() => {
        showResult(isCorrect);
    }, 1000);
}

function highlightAnswers(selectedAnswer, correctAnswer, isCorrect) {
    const answerCards = document.querySelectorAll('.answer-card');

    answerCards.forEach(card => {
        const cardText = card.dataset.text;

        if (cardText === selectedAnswer) {
            if (isCorrect) {
                card.classList.add('correct');
                card.classList.add('animate-correct');
            } else {
                card.classList.add('incorrect');
                card.classList.add('animate-incorrect');
            }
        }

        if (cardText === correctAnswer && !isCorrect) {
            card.classList.add('correct');
        }
    });
}

function showResult(isCorrect) {
    const question = gameState.questions[currentQuestionIndex];
    const selectedAnswer = gameState.answers[currentQuestionIndex].selectedAnswer;

    ResultsUI.render(question, currentQuestionIndex, gameState.questions.length, isCorrect, selectedAnswer);

    ResultsUI.onContinue(() => {
        currentQuestionIndex++;

        if (currentQuestionIndex < gameState.questions.length) {
            showQuestion();
        } else {
            completeGame();
        }
    });

    ScreenManager.showScreen('result-screen');
}

function completeGame() {
    gameState.status = 'completed';
    gameState.completedTime = Date.now();
    gameState.currentQuestionIndex = gameState.questions.length;

    StorageService.saveGameState(gameState);

    const userProgress = StatsService.updateStreakOnCompletion(gameState);

    if (StatsService.isStreakMilestone(userProgress.currentStreak)) {
        SoundManager.play('streak');
    } else {
        SoundManager.play('complete');
    }

    showCompletionScreen(userProgress);
}

function showCompletionScreen(userProgress = null) {
    if (!userProgress) {
        userProgress = StorageService.getUserProgress();
    }

    const score = gameState.answers.filter(a => a.isCorrect).length;
    const total = gameState.answers.length;
    const emojiGrid = StatsService.generateEmojiString(gameState.answers);

    document.getElementById('final-score').textContent = `${score}/${total} RÄTT`;
    document.getElementById('emoji-grid').textContent = emojiGrid;

    const streakEl = document.getElementById('completion-streak');
    const streakUnitEl = document.getElementById('completion-streak-unit');
    streakEl.textContent = userProgress.currentStreak;
    streakUnitEl.textContent = userProgress.currentStreak === 1 ? 'dag' : 'dagar';

    const streakMessage = StatsService.getStreakMessage(userProgress);
    document.getElementById('streak-message').textContent = streakMessage;

    if (userProgress.currentStreak > userProgress.longestStreak - 1) {
        const streakIcon = document.querySelector('.streak-celebration .streak-icon.large');
        if (streakIcon) {
            streakIcon.classList.add('animate-streak');
        }
    }

    ScreenManager.showScreen('completion-screen');
}

function showCompletionScreenFromState() {
    showCompletionScreen();
}
