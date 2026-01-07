const StatsService = {
    /**
     * Update streak when user completes daily game
     * @param {Object} gameState - Completed game state
     * @returns {Object} Updated user progress
     */
    updateStreakOnCompletion(gameState) {
        const userProgress = StorageService.getUserProgress();
        const todayKey = DateService.getTodayKey();
        const yesterdayKey = DateService.getYesterdayKey();

        if (userProgress.lastPlayedDate === todayKey) {
            return userProgress;
        }

        if (userProgress.lastPlayedDate === yesterdayKey) {
            userProgress.currentStreak += 1;

            if (userProgress.currentStreak > userProgress.longestStreak) {
                userProgress.longestStreak = userProgress.currentStreak;

                if (this.isStreakMilestone(userProgress.currentStreak)) {
                    userProgress.streakMilestones.push({
                        streak: userProgress.currentStreak,
                        date: todayKey
                    });
                }
            }
        } else if (!userProgress.lastPlayedDate || userProgress.lastPlayedDate === '') {
            userProgress.currentStreak = 1;
            userProgress.longestStreak = 1;
            userProgress.firstPlayedDate = todayKey;
        } else {
            userProgress.currentStreak = 1;
        }

        userProgress.lastPlayedDate = todayKey;

        this.updateGameStats(userProgress, gameState);

        this.updateCalendar(userProgress, gameState, todayKey);

        StorageService.saveUserProgress(userProgress);

        return userProgress;
    },

    /**
     * Update game statistics (total questions, correct answers, etc.)
     * @param {Object} userProgress - User progress object
     * @param {Object} gameState - Completed game state
     */
    updateGameStats(userProgress, gameState) {
        userProgress.totalGamesPlayed += 1;

        const correctAnswers = gameState.answers.filter(a => a.isCorrect).length;
        userProgress.totalCorrectAnswers += correctAnswers;
        userProgress.totalQuestions += gameState.answers.length;

        userProgress.completionRate = Math.round(
            (userProgress.totalCorrectAnswers / userProgress.totalQuestions) * 100
        );

        gameState.questions.forEach((question, index) => {
            const answer = gameState.answers[index];
            const difficulty = question.difficulty;

            if (userProgress.difficultyStats[difficulty]) {
                userProgress.difficultyStats[difficulty].total += 1;
                if (answer && answer.isCorrect) {
                    userProgress.difficultyStats[difficulty].correct += 1;
                }
            }
        });
    },

    /**
     * Update calendar with today's result
     * @param {Object} userProgress - User progress object
     * @param {Object} gameState - Completed game state
     * @param {string} todayKey - Today's date key
     */
    updateCalendar(userProgress, gameState, todayKey) {
        const score = gameState.answers.filter(a => a.isCorrect).length;
        const emoji = this.generateEmojiString(gameState.answers);

        const existingEntry = userProgress.calendar.find(entry => entry.date === todayKey);
        if (existingEntry) {
            existingEntry.score = score;
            existingEntry.emoji = emoji;
        } else {
            userProgress.calendar.push({
                date: todayKey,
                completed: true,
                score: score,
                emoji: emoji
            });
        }

        userProgress.calendar.sort((a, b) => a.date.localeCompare(b.date));
    },

    /**
     * Generate emoji string from answers (for calendar and sharing)
     * @param {Array<Object>} answers - Array of answer objects
     * @returns {string} Emoji string (e.g., "🟩🟩🟨⬜")
     */
    generateEmojiString(answers) {
        return answers.map(answer => answer.isCorrect ? '🟩' : '⬜').join('');
    },

    /**
     * Check if streak number is a milestone
     * @param {number} streak - Current streak
     * @returns {boolean} True if it's a milestone
     */
    isStreakMilestone(streak) {
        const milestones = [7, 30, 50, 100, 365];
        return milestones.includes(streak);
    },

    /**
     * Calculate if user is in danger of losing streak
     * @returns {boolean} True if streak is at risk
     */
    isStreakAtRisk() {
        const userProgress = StorageService.getUserProgress();
        const todayKey = DateService.getTodayKey();

        return userProgress.lastPlayedDate !== todayKey &&
               userProgress.currentStreak > 0;
    },

    /**
     * Get streak status message for display
     * @param {Object} userProgress - User progress object
     * @returns {string} Motivational message
     */
    getStreakMessage(userProgress) {
        const streak = userProgress.currentStreak;

        if (streak === 0) {
            return "Börja din streak idag!";
        } else if (streak === 1) {
            return "1 dag i rad! Fortsätt imorgon!";
        } else if (streak < 7) {
            return `${streak} dagar i rad! Sikta på 7!`;
        } else if (streak === 7) {
            return "🔥 1 vecka i rad! Fantastiskt!";
        } else if (streak < 30) {
            return `${streak} dagar i rad! Imponerande!`;
        } else if (streak === 30) {
            return "🔥 1 månad i rad! Otroligt!";
        } else if (streak >= 100) {
            return `${streak} dagar i rad! Mästare!`;
        } else {
            return `${streak} dagar i rad! Enastående!`;
        }
    },

    /**
     * Get difficulty statistics with percentages
     * @returns {Object} Formatted difficulty stats
     */
    getDifficultyStats() {
        const userProgress = StorageService.getUserProgress();
        const stats = {};

        Object.keys(userProgress.difficultyStats).forEach(difficulty => {
            const data = userProgress.difficultyStats[difficulty];
            const percentage = data.total > 0
                ? Math.round((data.correct / data.total) * 100)
                : 0;

            stats[difficulty] = {
                correct: data.correct,
                total: data.total,
                percentage: percentage
            };
        });

        return stats;
    },

    /**
     * Get calendar data for last N days
     * @param {number} days - Number of days (default 30)
     * @returns {Array<Object>} Calendar entries with completion status
     */
    getCalendarData(days = 30) {
        const userProgress = StorageService.getUserProgress();
        const dateKeys = DateService.getLastNDays(days);
        const todayKey = DateService.getTodayKey();

        return dateKeys.map(dateKey => {
            const entry = userProgress.calendar.find(e => e.date === dateKey);
            return {
                date: dateKey,
                completed: entry ? entry.completed : false,
                score: entry ? entry.score : 0,
                emoji: entry ? entry.emoji : '',
                isToday: dateKey === todayKey
            };
        });
    },

    /**
     * Calculate overall statistics for display
     * @returns {Object} Formatted statistics
     */
    getOverallStats() {
        const userProgress = StorageService.getUserProgress();

        return {
            currentStreak: userProgress.currentStreak,
            longestStreak: userProgress.longestStreak,
            gamesPlayed: userProgress.totalGamesPlayed,
            totalCorrect: userProgress.totalCorrectAnswers,
            totalQuestions: userProgress.totalQuestions,
            accuracy: userProgress.completionRate,
            firstPlayed: userProgress.firstPlayedDate
                ? DateService.formatDateKey(userProgress.firstPlayedDate)
                : null
        };
    },

    /**
     * Check if user has played today
     * @returns {boolean} True if played today
     */
    hasPlayedToday() {
        const userProgress = StorageService.getUserProgress();
        const todayKey = DateService.getTodayKey();
        return userProgress.lastPlayedDate === todayKey;
    },

    /**
     * Get welcome screen message based on user status
     * @returns {string} Motivational message
     */
    getWelcomeMessage() {
        const userProgress = StorageService.getUserProgress();

        if (this.hasPlayedToday()) {
            return "Du har redan spelat dagens ord! Kom tillbaka imorgon.";
        }

        if (this.isStreakAtRisk() && userProgress.currentStreak > 3) {
            return `Behåll din streak på ${userProgress.currentStreak} dagar!`;
        }

        if (userProgress.totalGamesPlayed === 0) {
            return "Välkommen! Testa din svenska ordkunskap!";
        }

        return this.getStreakMessage(userProgress);
    }
};
