const StatsUI = {
    init() {
        const closeButton = document.getElementById('close-stats-button');
        closeButton.addEventListener('click', () => this.hideModal());

        const modal = document.getElementById('stats-modal');
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.hideModal();
            }
        });

        document.getElementById('stats-button-welcome').addEventListener('click', () => this.showModal());
        document.getElementById('stats-button-completion').addEventListener('click', () => this.showModal());
    },

    showModal() {
        this.updateStatistics();
        document.getElementById('stats-modal').classList.add('active');
    },

    hideModal() {
        document.getElementById('stats-modal').classList.remove('active');
    },

    updateStatistics() {
        const overallStats = StatsService.getOverallStats();
        const difficultyStats = StatsService.getDifficultyStats();
        const calendarData = StatsService.getCalendarData(CONFIG.CALENDAR_DAYS);

        document.getElementById('current-streak-stat').textContent = overallStats.currentStreak;
        document.getElementById('longest-streak-stat').textContent = overallStats.longestStreak;
        document.getElementById('games-played-stat').textContent = overallStats.gamesPlayed;
        document.getElementById('accuracy-stat').textContent = `${overallStats.accuracy}%`;

        document.getElementById('easy-stat').textContent =
            `${difficultyStats.easy.correct}/${difficultyStats.easy.total} (${difficultyStats.easy.percentage}%)`;
        document.getElementById('medium-stat').textContent =
            `${difficultyStats.medium.correct}/${difficultyStats.medium.total} (${difficultyStats.medium.percentage}%)`;
        document.getElementById('hard-stat').textContent =
            `${difficultyStats.hard.correct}/${difficultyStats.hard.total} (${difficultyStats.hard.percentage}%)`;
        document.getElementById('superhard-stat').textContent =
            `${difficultyStats.superhard.correct}/${difficultyStats.superhard.total} (${difficultyStats.superhard.percentage}%)`;

        this.renderCalendar(calendarData);
    },

    renderCalendar(calendarData) {
        const calendarGrid = document.getElementById('calendar-grid');
        calendarGrid.innerHTML = '';

        calendarData.forEach(day => {
            const dayEl = document.createElement('div');
            dayEl.className = 'calendar-day';

            if (day.completed) {
                dayEl.classList.add('played');
                dayEl.textContent = day.score;
                dayEl.title = `${day.date}: ${day.score}/4 rätt`;
            } else {
                dayEl.textContent = '';
                dayEl.title = day.date;
            }

            if (day.isToday) {
                dayEl.classList.add('today');
            }

            calendarGrid.appendChild(dayEl);
        });
    }
};
