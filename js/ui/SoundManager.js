const SoundManager = {
    sounds: {},
    enabled: true,
    soundsAvailable: false,

    init() {
        this.enabled = StorageService.getSettings().soundEnabled;

        try {
            this.sounds = {
                correct: this.createAudio('assets/sounds/correct.mp3'),
                incorrect: this.createAudio('assets/sounds/incorrect.mp3'),
                complete: this.createAudio('assets/sounds/complete.mp3'),
                streak: this.createAudio('assets/sounds/streak.mp3')
            };

            this.checkSoundsAvailability();
        } catch (error) {
            console.log('Ljudfiler är inte tillgängliga. Spelet fortsätter utan ljud.');
            this.soundsAvailable = false;
        }
    },

    createAudio(src) {
        const audio = new Audio();
        audio.volume = 0.5;
        audio.preload = 'none';

        audio.addEventListener('error', () => {
            this.soundsAvailable = false;
        });

        audio.src = src;
        return audio;
    },

    checkSoundsAvailability() {
        const testSound = this.sounds.correct;
        if (testSound) {
            testSound.addEventListener('canplaythrough', () => {
                this.soundsAvailable = true;
            }, { once: true });

            testSound.addEventListener('error', () => {
                this.soundsAvailable = false;
            }, { once: true });
        }
    },

    play(soundName) {
        if (!this.enabled || !this.soundsAvailable) return;

        const sound = this.sounds[soundName];
        if (sound) {
            sound.currentTime = 0;
            sound.play().catch(error => {
                // Ljud kunde inte spelas - fortsätt utan ljud
            });
        }
    },

    setEnabled(enabled) {
        this.enabled = enabled;
        const settings = StorageService.getSettings();
        settings.soundEnabled = enabled;
        StorageService.saveSettings(settings);
    },

    isEnabled() {
        return this.enabled;
    }
};
