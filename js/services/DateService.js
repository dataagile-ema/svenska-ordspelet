const DateService = {
    /**
     * Get today's date in YYYY-MM-DD format (Swedish locale)
     * @returns {string} Date string like "2026-01-07"
     */
    getTodayKey() {
        return new Date().toLocaleDateString('sv-SE');
    },

    /**
     * Get yesterday's date key
     * @returns {string} Date string for yesterday
     */
    getYesterdayKey() {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        return yesterday.toLocaleDateString('sv-SE');
    },

    /**
     * Generate deterministic daily seed from date
     * Same date = same seed = same questions for all players
     * @param {string} dateKey - Date in YYYY-MM-DD format (optional, defaults to today)
     * @returns {number} Numeric seed (e.g., 20260107)
     */
    getDailySeed(dateKey = null) {
        const key = dateKey || this.getTodayKey();
        const [year, month, day] = key.split('-').map(Number);
        return year * 10000 + month * 100 + day;
    },

    /**
     * Check if a date key is today
     * @param {string} dateKey - Date in YYYY-MM-DD format
     * @returns {boolean} True if date is today
     */
    isToday(dateKey) {
        return dateKey === this.getTodayKey();
    },

    /**
     * Calculate days between two date keys
     * @param {string} dateKey1 - First date in YYYY-MM-DD format
     * @param {string} dateKey2 - Second date in YYYY-MM-DD format
     * @returns {number} Number of days between dates (absolute value)
     */
    daysBetween(dateKey1, dateKey2) {
        const date1 = new Date(dateKey1);
        const date2 = new Date(dateKey2);
        const diffTime = Math.abs(date2 - date1);
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    },

    /**
     * Get start of day timestamp (midnight)
     * @param {Date} date - Optional date (defaults to today)
     * @returns {number} Unix timestamp for start of day
     */
    getStartOfDay(date = new Date()) {
        const d = new Date(date);
        d.setHours(0, 0, 0, 0);
        return d.getTime();
    },

    /**
     * Get time until next day (midnight) in milliseconds
     * @returns {number} Milliseconds until next day
     */
    getTimeUntilMidnight() {
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        return tomorrow.getTime() - now.getTime();
    },

    /**
     * Format a date key to a more readable format
     * @param {string} dateKey - Date in YYYY-MM-DD format
     * @returns {string} Formatted date (e.g., "7 januari 2026")
     */
    formatDateKey(dateKey) {
        const date = new Date(dateKey);
        return date.toLocaleDateString('sv-SE', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    },

    /**
     * Get date key for a specific number of days ago
     * @param {number} daysAgo - Number of days in the past
     * @returns {string} Date key in YYYY-MM-DD format
     */
    getDateKeyDaysAgo(daysAgo) {
        const date = new Date();
        date.setDate(date.getDate() - daysAgo);
        return date.toLocaleDateString('sv-SE');
    },

    /**
     * Generate array of date keys for the last N days
     * @param {number} days - Number of days to generate (default 30)
     * @returns {Array<string>} Array of date keys from oldest to newest
     */
    getLastNDays(days = 30) {
        const dateKeys = [];
        for (let i = days - 1; i >= 0; i--) {
            dateKeys.push(this.getDateKeyDaysAgo(i));
        }
        return dateKeys;
    }
};
