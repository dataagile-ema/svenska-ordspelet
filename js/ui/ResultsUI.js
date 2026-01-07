const ResultsUI = {
    continueCallback: null,

    render(question, questionIndex, totalQuestions, isCorrect, selectedAnswer) {
        document.getElementById('result-question-counter').textContent = `Fråga ${questionIndex + 1}/${totalQuestions}`;

        const difficultyBadge = document.getElementById('result-difficulty-badge');
        difficultyBadge.textContent = CONFIG.DIFFICULTY_LABELS[question.difficulty];
        difficultyBadge.className = `difficulty-badge ${CONFIG.DIFFICULTY_CLASSES[question.difficulty]}`;

        this.updateResultProgressDots(questionIndex, isCorrect);

        this.showFeedback(isCorrect);

        this.showExplanation(question.explanation);

        const continueButton = document.getElementById('continue-button');
        if (questionIndex < totalQuestions - 1) {
            continueButton.textContent = 'Nästa fråga';
        } else {
            continueButton.textContent = 'Se resultat';
        }

        this.attachContinueListener();
    },

    updateResultProgressDots(currentIndex, isCorrect) {
        const dots = document.querySelectorAll('#result-screen .progress-dots .dot');
        dots.forEach((dot, index) => {
            dot.classList.remove('active', 'filled');
            if (index < currentIndex) {
                dot.classList.add('filled');
            } else if (index === currentIndex) {
                dot.classList.add('filled');
            }
        });
    },

    showFeedback(isCorrect) {
        const feedbackEl = document.getElementById('result-feedback');

        if (isCorrect) {
            feedbackEl.classList.remove('incorrect');
            feedbackEl.classList.add('correct');
            feedbackEl.innerHTML = `
                <div class="feedback-icon">✓</div>
                <h2 class="feedback-title">RÄTT!</h2>
            `;
        } else {
            feedbackEl.classList.remove('correct');
            feedbackEl.classList.add('incorrect');
            feedbackEl.innerHTML = `
                <div class="feedback-icon">✗</div>
                <h2 class="feedback-title">FEL</h2>
            `;
        }
    },

    showExplanation(explanation) {
        document.getElementById('explanation-text').textContent = explanation;
    },

    attachContinueListener() {
        const continueButton = document.getElementById('continue-button');

        const newButton = continueButton.cloneNode(true);
        continueButton.parentNode.replaceChild(newButton, continueButton);

        newButton.addEventListener('click', () => {
            if (this.continueCallback) {
                this.continueCallback();
            }
        });
    },

    onContinue(callback) {
        this.continueCallback = callback;
    }
};
