const STORAGE_KEYS = {
    GAME_STATE: 'svenskaOrdspelet_gameState',
    USER_PROGRESS: 'svenskaOrdspelet_userProgress',
    SETTINGS: 'svenskaOrdspelet_settings',
    VERSION: 'svenskaOrdspelet_version'
};

const CURRENT_VERSION = '1.0.0';

const StorageService = {
    /**
     * Check if localStorage is available
     * @returns {boolean} True if localStorage is available
     */
    isAvailable() {
        try {
            const test = '__storage_test__';
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (error) {
            console.error('localStorage not available:', error);
            return false;
        }
    },

    /**
     * Save game state to localStorage
     * @param {Object} gameState - Current game state
     * @returns {boolean} True if save was successful
     */
    saveGameState(gameState) {
        try {
            localStorage.setItem(
                STORAGE_KEYS.GAME_STATE,
                JSON.stringify(gameState)
            );
            return true;
        } catch (error) {
            console.error('Failed to save game state:', error);
            this.handleStorageError(error);
            return false;
        }
    },

    /**
     * Load game state from localStorage
     * @returns {Object|null} Game state or null if not found
     */
    getGameState() {
        try {
            const stored = localStorage.getItem(STORAGE_KEYS.GAME_STATE);
            return stored ? JSON.parse(stored) : null;
        } catch (error) {
            console.error('Failed to load game state:', error);
            return null;
        }
    },

    /**
     * Save user progress to localStorage
     * @param {Object} userProgress - User progress data
     * @returns {boolean} True if save was successful
     */
    saveUserProgress(userProgress) {
        try {
            localStorage.setItem(
                STORAGE_KEYS.USER_PROGRESS,
                JSON.stringify(userProgress)
            );
            return true;
        } catch (error) {
            console.error('Failed to save user progress:', error);
            this.handleStorageError(error);
            return false;
        }
    },

    /**
     * Load user progress from localStorage
     * @returns {Object} User progress (defaults if not found)
     */
    getUserProgress() {
        try {
            const stored = localStorage.getItem(STORAGE_KEYS.USER_PROGRESS);

            if (stored) {
                return JSON.parse(stored);
            } else {
                return this.getDefaultUserProgress();
            }
        } catch (error) {
            console.error('Failed to load user progress:', error);
            return this.getDefaultUserProgress();
        }
    },

    /**
     * Get default user progress structure for new users
     * @returns {Object} Default user progress
     */
    getDefaultUserProgress() {
        return {
            currentStreak: 0,
            longestStreak: 0,
            lastPlayedDate: null,
            totalGamesPlayed: 0,
            totalCorrectAnswers: 0,
            totalQuestions: 0,
            completionRate: 0,
            difficultyStats: {
                easy: { correct: 0, total: 0 },
                medium: { correct: 0, total: 0 },
                hard: { correct: 0, total: 0 },
                superhard: { correct: 0, total: 0 }
            },
            calendar: [],
            streakMilestones: [],
            firstPlayedDate: null
        };
    },

    /**
     * Save user settings
     * @param {Object} settings - User settings
     * @returns {boolean} True if save was successful
     */
    saveSettings(settings) {
        try {
            localStorage.setItem(
                STORAGE_KEYS.SETTINGS,
                JSON.stringify(settings)
            );
            return true;
        } catch (error) {
            console.error('Failed to save settings:', error);
            return false;
        }
    },

    /**
     * Load user settings
     * @returns {Object} User settings (defaults if not found)
     */
    getSettings() {
        try {
            const stored = localStorage.getItem(STORAGE_KEYS.SETTINGS);
            return stored ? JSON.parse(stored) : this.getDefaultSettings();
        } catch (error) {
            console.error('Failed to load settings:', error);
            return this.getDefaultSettings();
        }
    },

    /**
     * Get default settings
     * @returns {Object} Default settings
     */
    getDefaultSettings() {
        return {
            soundEnabled: true,
            theme: 'light',
            language: 'sv'
        };
    },

    /**
     * Clear all data (for testing or user request)
     * @returns {boolean} True if clear was successful
     */
    clearAllData() {
        try {
            Object.values(STORAGE_KEYS).forEach(key => {
                localStorage.removeItem(key);
            });
            return true;
        } catch (error) {
            console.error('Failed to clear data:', error);
            return false;
        }
    },

    /**
     * Handle storage quota errors
     * @param {Error} error - Storage error
     */
    handleStorageError(error) {
        if (error.name === 'QuotaExceededError') {
            console.warn('localStorage quota exceeded');
            this.cleanupOldCalendarData();
        }
    },

    /**
     * Remove calendar entries older than 1 year to free space
     */
    cleanupOldCalendarData() {
        const userProgress = this.getUserProgress();
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        const cutoffDate = oneYearAgo.toLocaleDateString('sv-SE');

        userProgress.calendar = userProgress.calendar.filter(
            entry => entry.date >= cutoffDate
        );

        this.saveUserProgress(userProgress);
    },

    /**
     * Perform data migration if needed
     * @returns {boolean} True if migration was performed
     */
    migrateData() {
        const storedVersion = localStorage.getItem(STORAGE_KEYS.VERSION);

        if (!storedVersion || storedVersion !== CURRENT_VERSION) {
            console.log(`Migrating from ${storedVersion || 'initial'} to ${CURRENT_VERSION}`);

            const userProgress = this.getUserProgress();
            if (!userProgress.firstPlayedDate && userProgress.lastPlayedDate) {
                userProgress.firstPlayedDate = userProgress.lastPlayedDate;
                this.saveUserProgress(userProgress);
            }

            localStorage.setItem(STORAGE_KEYS.VERSION, CURRENT_VERSION);
            return true;
        }

        return false;
    }
};
