const ShareUI = {
    init() {
        document.getElementById('share-button').addEventListener('click', () => {
            this.shareResults();
        });
    },

    generateShareText(gameState, userProgress) {
        const todayKey = DateService.getTodayKey();
        const score = gameState.answers.filter(a => a.isCorrect).length;
        const total = gameState.answers.length;
        const emojiGrid = StatsService.generateEmojiString(gameState.answers);
        const streak = userProgress.currentStreak;
        const streakUnit = streak === 1 ? 'dag' : 'dagar';

        return `Svenska Ordspelet ${todayKey}
${emojiGrid} ${score}/${total}
🔥 Streak: ${streak} ${streakUnit}

https://svenska-ordspelet.se`;
    },

    async shareResults() {
        const gameState = StorageService.getGameState();
        const userProgress = StorageService.getUserProgress();

        if (!gameState || gameState.status !== 'completed') {
            console.error('Game not completed yet');
            return;
        }

        const shareText = this.generateShareText(gameState, userProgress);

        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Svenska Ordspelet',
                    text: shareText
                });
                return;
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.log('Native share failed, falling back to clipboard');
                }
            }
        }

        this.copyToClipboard(shareText);
    },

    async copyToClipboard(text) {
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(text);
                this.showCopyFeedback('Kopierat! Dela på sociala medier.');
            } else {
                this.fallbackCopyToClipboard(text);
                this.showCopyFeedback('Kopierat! Dela på sociala medier.');
            }
        } catch (error) {
            console.error('Failed to copy:', error);
            this.showCopyFeedback('Kunde inte kopiera. Försök igen.');
        }
    },

    fallbackCopyToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            document.execCommand('copy');
        } catch (error) {
            console.error('Fallback copy failed:', error);
        }

        document.body.removeChild(textArea);
    },

    showCopyFeedback(message) {
        const feedback = document.getElementById('copy-feedback');
        feedback.textContent = message;
        feedback.classList.add('show');

        setTimeout(() => {
            feedback.classList.remove('show');
        }, CONFIG.TOAST_DURATION);
    }
};
