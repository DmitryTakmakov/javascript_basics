'use strict';

class Board {
    constructor() {
        this.gameTableElement = document.getElementById('game');
    }

    /**
     * Вывод ячеек в HTML.
     */
    renderMap() {
        for (let row = 0; row < 3; row++) {
            const tr = document.createElement('tr');
            this.gameTableElement.appendChild(tr);
            for (let col = 0; col < 3; col++) {
                let td = document.createElement('td');
                td.dataset.row = row.toString();
                td.dataset.col = col.toString();
                td.setAttribute('id', 'boardCell');
                tr.appendChild(td);
            }
        }
    }
}