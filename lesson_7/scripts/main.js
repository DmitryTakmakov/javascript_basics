'use strict';

window.addEventListener('load', () => {
    const board = new Board();
    const game = new Game();

    board.renderMap();
    game.init(board);
    game.initEventHandlers(board);
});