const QuestionService = {
    /**
     * Generate 4 questions for daily game (one per difficulty)
     * Uses seed for deterministic selection - same seed = same questions
     * @param {number} seed - Daily seed for randomization
     * @returns {Array<Object>} Array of 4 question objects
     */
    generateDailyQuestions(seed) {
        const rng = this.seededRandom(seed);

        return [
            this.selectQuestion(WORDS_EASY, rng, 'easy'),
            this.selectQuestion(WORDS_MEDIUM, rng, 'medium'),
            this.selectQuestion(WORDS_HARD, rng, 'hard'),
            this.selectQuestion(WORDS_SUPERHARD, rng, 'superhard')
        ];
    },

    /**
     * Select random question from pool using seeded RNG
     * @param {Array<Object>} wordPool - Pool of words for this difficulty
     * @param {Function} rng - Seeded random number generator
     * @param {string} difficulty - Difficulty level
     * @returns {Object} Question object with shuffled options
     */
    selectQuestion(wordPool, rng, difficulty) {
        if (!wordPool || wordPool.length === 0) {
            console.error(`No words available for difficulty: ${difficulty}`);
            return null;
        }

        const index = Math.floor(rng() * wordPool.length);
        const question = { ...wordPool[index] };

        question.shuffledOptions = this.shuffleOptions(
            question.correctAnswer,
            question.wrongAnswers,
            rng
        );

        return question;
    },

    /**
     * Shuffle answer options (3 wrong + 1 correct)
     * @param {string} correctAnswer - The correct answer
     * @param {Array<string>} wrongAnswers - Array of 3 wrong answers
     * @param {Function} rng - Seeded random number generator
     * @returns {Array<string>} Shuffled array of all 4 options
     */
    shuffleOptions(correctAnswer, wrongAnswers, rng) {
        const allOptions = [correctAnswer, ...wrongAnswers];

        for (let i = allOptions.length - 1; i > 0; i--) {
            const j = Math.floor(rng() * (i + 1));
            [allOptions[i], allOptions[j]] = [allOptions[j], allOptions[i]];
        }

        return allOptions;
    },

    /**
     * Seeded random number generator
     * Same seed = same sequence of random numbers
     * Uses linear congruential generator algorithm
     * @param {number} seed - Seed value
     * @returns {Function} RNG function that returns 0-1
     */
    seededRandom(seed) {
        let state = seed;

        return function() {
            state = (state * 1103515245 + 12345) & 0x7fffffff;
            return state / 0x7fffffff;
        };
    },

    /**
     * Get question by ID (for review/practice mode in future)
     * @param {string} id - Question ID
     * @returns {Object|null} Question object or null if not found
     */
    getQuestionById(id) {
        const allWords = [
            ...(WORDS_EASY || []),
            ...(WORDS_MEDIUM || []),
            ...(WORDS_HARD || []),
            ...(WORDS_SUPERHARD || [])
        ];

        return allWords.find(word => word.id === id) || null;
    },

    /**
     * Validate question data structure
     * @param {Object} question - Question to validate
     * @returns {boolean} True if question is valid
     */
    validateQuestion(question) {
        if (!question) return false;

        return !!(
            question.id &&
            question.word &&
            question.correctAnswer &&
            Array.isArray(question.wrongAnswers) &&
            question.wrongAnswers.length === 3 &&
            question.explanation &&
            question.difficulty &&
            ['easy', 'medium', 'hard', 'superhard'].includes(question.difficulty)
        );
    },

    /**
     * Get all questions for a specific difficulty
     * @param {string} difficulty - Difficulty level
     * @returns {Array<Object>} Array of questions
     */
    getQuestionsByDifficulty(difficulty) {
        switch (difficulty) {
            case 'easy':
                return WORDS_EASY || [];
            case 'medium':
                return WORDS_MEDIUM || [];
            case 'hard':
                return WORDS_HARD || [];
            case 'superhard':
                return WORDS_SUPERHARD || [];
            default:
                return [];
        }
    },

    /**
     * Get total number of questions available
     * @returns {number} Total question count
     */
    getTotalQuestionCount() {
        return (WORDS_EASY?.length || 0) +
               (WORDS_MEDIUM?.length || 0) +
               (WORDS_HARD?.length || 0) +
               (WORDS_SUPERHARD?.length || 0);
    },

    /**
     * Get question count by difficulty
     * @returns {Object} Counts for each difficulty
     */
    getQuestionCountsByDifficulty() {
        return {
            easy: WORDS_EASY?.length || 0,
            medium: WORDS_MEDIUM?.length || 0,
            hard: WORDS_HARD?.length || 0,
            superhard: WORDS_SUPERHARD?.length || 0
        };
    }
};
