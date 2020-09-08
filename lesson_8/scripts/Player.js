'use strict';

class Player {
    constructor() {
        this.audioElement = document.querySelector('audio');
        this.curTimeElement = document.querySelector('.currentTime');
        this.playBtnElement = document.querySelector('.fa-play');
        this.pauseBtnElement = document.querySelector('.fa-pause');
        this.timerElement = document.querySelector('.timer');
        this.playbackId = null;
        this.wasTrackPlaying = false;
    }

    /**
     * Инициализация класса, устанавливаются слушатели на элементы плеера.
     */
    init() {
        this.audioElement.addEventListener('ended', () => {
            clearInterval(this.playbackId);
        });
        this.playBtnElement.addEventListener('click', this.playClickHandler.bind(this));
        this.pauseBtnElement.addEventListener('click', this.pauseClickHandler.bind(this));
        this.timerElement.addEventListener('mousedown', this.timerMousedownHandler.bind(this));
        this.timerElement.addEventListener('change', this.timerChangeHandler.bind(this));
    }

    /**
     * Метод обработки клика по кнопке Play.
     * Запускает воспроизведение и устанавливает счетчик интервала.
     */
    playClickHandler() {
        if (this.audioElement.paused) {
            this.audioElement.play();
            this.playbackId = setInterval(this.showCurrentPos.bind(this), 100);
        }
    }

    /**
     * Метод обработки клика по кнопке Pause.
     * Ставит воспроизведение на паузу и очищает счетчик интервала.
     */
    pauseClickHandler() {
        if (!this.audioElement.paused) {
            this.audioElement.pause();
            clearInterval(this.playbackId);
        } else {
            this.showCurrentPos();
        }
    }

    timerMousedownHandler() {
        this.wasTrackPlaying = !this.audioElement.paused;
        if (this.wasTrackPlaying) {
            this.audioElement.pause();
            clearInterval(this.playbackId);
        }
    }

    timerChangeHandler() {
        this.audioElement.currentTime = this.timerElement.value;
        if (this.wasTrackPlaying) {
            this.audioElement.play();
            this.playbackId = setInterval(this.showCurrentPos, 100);
        } else {
            this.showCurrentPos();
        }
    }

    /**
     * Метод для получения текущей позиции в треке.
     * Также отвечает за движение ползунка.
     */
    showCurrentPos() {
        this.curTimeElement.innerText = this.audioElement.currentTime.toFixed(2);
        this.timerElement.value = this.audioElement.currentTime;
    }

    /**
     * Метод, устанавливающий длину таймера.
     */
    setTimerDuration() {
        this.timerElement.min = 0;
        this.timerElement.max = this.audioElement.duration;
    }
}