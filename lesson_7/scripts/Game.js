'use strict';

class Game {
    constructor() {
        this.status = 'playing';
        this.mapValues = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        this.gamePhase = 'X';
    }

    /**
     * @param {Board} board 
     */
    init(board) {
        this.board = board;
    }

    /**
     * Инициализация обработчиков сообытий.
     */
    initEventHandlers(board) {
        this.board.gameTableElement.addEventListener('click', event => this.cellClickHandler(event));
    }

    /**
     * Обработчик события клика.
     * @param {MouseEvent} event
     */
    cellClickHandler(event) {
        // Если клик не нужно обрабатывать, то уходим из функции.
        if (!this.isCorrectClick(event)) {
            return;
        }

        // Заполняем ячейку
        this.fillCell(event);
        // Если кто-то выиграл, заходим в if
        if (this.hasWon()) {
            // Ставим статус в "остановлено"
            this.setStatusStopped();
            // Сообщаем о победе пользователя
            this.sayWinningPhrase();
        }

        //Меняем игрока (крестик или нолик).
        this.togglePhase();
    }

    /**
     * Проверка был ли корректный клик, что описан в событии event.
     * @param {Event} event
     * @returns {boolean} Вернет true в случае, если статус игры "Играем", клик, что описан в объекте, 
     * по ячейке и ячейка, куда был произведен клик, пустая. 
     */
    isCorrectClick(event) {
        return this.isStatusPlaying() && this.isClickByCell(event) && this.isCellEmpty(event);
    }

    /**
     * Проверка, что мы играем, т.е. игра не закончена.
     * @returns {boolean} Вернет true, если статус игры "играем", иначе - false.
     */
    isStatusPlaying() {
        return this.status === 'playing';
    }

    /**
     * Проверка, что клик был по ячейке.
     * @param {Event} event
     * @returns {boolean} Вернет true, если клик был по ячейке, иначе false. 
     */
    isClickByCell(event) {
        return event.target.tagName === 'TD';
    }

    /**
     * Проверка, что в ячейку не было проставлено значение (крестик или нолик).
     * @param {Event} event
     * @returns {boolean} Вернет true, если ячейка пуста, иначе false.
     */
    isCellEmpty(event) {
        // Получаем строку и колонку, куда был произведен клик
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;

        return this.mapValues[row][col] === '';
    }

    /**
     * Заполняет ячейку, в которую кликнул пользователь в событии event.
     * @param {Event} event 
     */
    fillCell(event) {
        // Получаем строку и колонку, куда был произведен клик
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;

        // Заполняем ячейку и ставим значение в массиве, в свойстве MapValues.
        this.mapValues[row][col] = this.gamePhase;
        event.target.textContent = this.gamePhase;
    }

    /**
     * Проверка, есть ли выигрышная ситуация на карте
     * @returns {boolean} Вернет true, если игра выиграна, иначе false
     */
    hasWon() {
        return this.isLineWon({
                x: 0,
                y: 0
            }, {
                x: 1,
                y: 0
            }, {
                x: 2,
                y: 0
            }) ||
            this.isLineWon({
                x: 0,
                y: 1
            }, {
                x: 1,
                y: 1
            }, {
                x: 2,
                y: 1
            }) ||
            this.isLineWon({
                x: 0,
                y: 2
            }, {
                x: 1,
                y: 2
            }, {
                x: 2,
                y: 2
            }) ||

            this.isLineWon({
                x: 0,
                y: 0
            }, {
                x: 0,
                y: 1
            }, {
                x: 0,
                y: 2
            }) ||
            this.isLineWon({
                x: 1,
                y: 0
            }, {
                x: 1,
                y: 1
            }, {
                x: 1,
                y: 2
            }) ||
            this.isLineWon({
                x: 2,
                y: 0
            }, {
                x: 2,
                y: 1
            }, {
                x: 2,
                y: 2
            }) ||

            this.isLineWon({
                x: 0,
                y: 0
            }, {
                x: 1,
                y: 1
            }, {
                x: 2,
                y: 2
            }) ||
            this.isLineWon({
                x: 0,
                y: 2
            }, {
                x: 1,
                y: 1
            }, {
                x: 2,
                y: 0
            });
    }

    /**
     * Проверка, есть ли выигрышная ситуация на линии
     * @param {{x: int, y: int}} a 1 ячейка
     * @param {{x: int, y: int}} b 2 ячейка
     * @param {{x: int, y: int}} c 3 ячейка
     * @returns {boolean} Вернет true, если в линии есть выигрыш, иначе false
     */
    isLineWon(a, b, c) {
        let value = this.mapValues[a.y][a.x] + this.mapValues[b.y][b.x] + this.mapValues[c.y][c.x];
        return value === 'XXX' || value === '000';
    }

    /**
     * Меняет игрока (крестик или нолик)
     */
    togglePhase() {
        this.gamePhase = this.gamePhase === 'X' ? '0' : 'X';
    }

    /**
     * Ставит статус игры в "остановлена".
     */
    setStatusStopped() {
        this.status = 'stopped';
    }

    sayWinningPhrase() {
        let figure = this.phase === 'X' ? 'Крестики' : 'Нолики';
        alert(`${figure} выиграли!`);
    }
}