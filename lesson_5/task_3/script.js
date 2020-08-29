'use strict';

const letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

/**
 * Функция генерирует шахматную доску размером 10-10 (учитываются также "поля" с цифрами и буквами)
 * @returns {string} сгенерированный HTML-код для доски
 */
function generateBoard() {
    let board = '';
    for (let y = 0; y < 10; y++) {
        board += '<tr>';
        for (let x = 0; x < 10; x++) {
            if (y === 0 || y === 9) {
                if (x === 0 || x === 9) {
                    board += `<td class="cornerCell" data-x="${x}" data-y="${y}"></td>`;
                } else if (x > 0 && x < 9) {
                    board += `<td data-x="${x}" data-y="${y}">${letters[x]}</td>`;
                }
            } else if (x === 0 || x === 9) {
                board += `<td data-x="${x}" data-y="${y}">${9 - y}</td>`;
            } else if (y > 1 && y < 9 && y % 2 === 0) {
                if (x > 0 && x < 9 && x % 2 === 0) {
                    board += `<td class="whiteCell" data-x="${letters[x]}" data-y="${9 - y}"></td>`;
                } else {
                    board += `<td class="blackCell" data-x="${letters[x]}" data-y="${9 - y}"></td>`;
                }
            } else {
                if (x > 0 && x < 9 && x % 2 === 0) {
                    board += `<td class="blackCell" data-x="${letters[x]}" data-y="${9 - y}"></td>`;
                } else {
                    board += `<td class="whiteCell" data-x="${letters[x]}" data-y="${9 - y}"></td>`;
                }
            }
        }
        board += '</tr>';
    }
    return `<table>${board}</table>`;
}

let chessBoard = generateBoard();
document.body.insertAdjacentHTML('afterbegin', chessBoard);