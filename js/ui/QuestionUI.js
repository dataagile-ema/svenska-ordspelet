const QuestionUI = {
    currentQuestion: null,
    answerCallback: null,
    questionStartTime: null,

    render(question, questionIndex, totalQuestions = 4) {
        this.currentQuestion = question;
        this.questionStartTime = Date.now();

        document.getElementById('question-counter').textContent = `Fråga ${questionIndex + 1}/${totalQuestions}`;

        const difficultyBadge = document.getElementById('difficulty-badge');
        difficultyBadge.textContent = CONFIG.DIFFICULTY_LABELS[question.difficulty];
        difficultyBadge.className = `difficulty-badge ${CONFIG.DIFFICULTY_CLASSES[question.difficulty]}`;

        document.getElementById('question-word').textContent = question.word.toUpperCase();

        this.updateProgressDots(questionIndex);

        this.renderAnswers(question.shuffledOptions);

        this.attachAnswerListeners();
    },

    renderAnswers(options) {
        const answerContainer = document.getElementById('answer-options');
        answerContainer.innerHTML = '';

        options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'answer-card';
            button.dataset.answer = CONFIG.ANSWER_LETTERS[index];
            button.dataset.text = option;

            button.innerHTML = `
                <span class="answer-letter">${CONFIG.ANSWER_LETTERS[index]}</span>
                <span class="answer-text">${option}</span>
            `;

            answerContainer.appendChild(button);
        });
    },

    updateProgressDots(activeIndex) {
        const dots = document.querySelectorAll('#question-screen .progress-dots .dot');
        dots.forEach((dot, index) => {
            dot.classList.remove('active', 'filled');
            if (index === activeIndex) {
                dot.classList.add('active');
            } else if (index < activeIndex) {
                dot.classList.add('filled');
            }
        });
    },

    attachAnswerListeners() {
        const answerCards = document.querySelectorAll('.answer-card');
        answerCards.forEach(card => {
            card.addEventListener('click', () => this.handleAnswerClick(card));
        });
    },

    handleAnswerClick(card) {
        const selectedAnswer = card.dataset.text;
        const timeSpent = Date.now() - this.questionStartTime;

        if (this.answerCallback) {
            this.answerCallback(selectedAnswer, timeSpent);
        }
    },

    onAnswerSelected(callback) {
        this.answerCallback = callback;
    },

    disableAnswers() {
        const answerCards = document.querySelectorAll('.answer-card');
        answerCards.forEach(card => {
            card.classList.add('disabled');
            card.style.pointerEvents = 'none';
        });
    },

    enableAnswers() {
        const answerCards = document.querySelectorAll('.answer-card');
        answerCards.forEach(card => {
            card.classList.remove('disabled');
            card.style.pointerEvents = 'auto';
        });
    }
};
