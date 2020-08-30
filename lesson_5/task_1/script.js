'use strict';

let button = document.querySelector('button');
let modalWindow = document.querySelector('.modal');
let wrapper = document.getElementById('wrapper');

button.addEventListener('click', function() {
    modalWindow.classList.remove('hidden');
    modalWindow.classList.add('magictime', 'puffIn');
});

wrapper.addEventListener('click', function() {
    modalWindow.classList.remove('puffIn');
    modalWindow.classList.add('puffOut');
    setTimeout(function() { //возвращает модальное окно в изначальное состояние, как вся анимация отработает
        modalWindow.classList.add('hidden');
        modalWindow.classList.remove('magictime', 'puffOut');
    }, 1000);
});
