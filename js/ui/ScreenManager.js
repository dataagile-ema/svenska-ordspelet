const ScreenManager = {
    currentScreen: null,

    init() {
        this.currentScreen = 'welcome-screen';
        console.log('ScreenManager initialized');
    },

    showScreen(screenId) {
        console.log('ScreenManager: Switching from', this.currentScreen, 'to', screenId);

        this.hideAllScreens();

        const screen = document.getElementById(screenId);
        if (screen) {
            // Force display with a slight delay to ensure DOM is ready
            setTimeout(() => {
                screen.classList.add('active');
                console.log('Screen activated:', screenId, 'Has active class:', screen.classList.contains('active'));
            }, 10);

            this.currentScreen = screenId;
            window.scrollTo(0, 0);
        } else {
            console.error(`Screen not found: ${screenId}`);
        }
    },

    hideAllScreens() {
        const screens = document.querySelectorAll('.screen');
        console.log('Hiding', screens.length, 'screens');
        screens.forEach(screen => {
            screen.classList.remove('active');
        });
    },

    getCurrentScreen() {
        return this.currentScreen;
    }
};
