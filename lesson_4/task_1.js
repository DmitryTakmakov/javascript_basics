'use strict';

function numberToObject(num) {
    if (Number.isInteger(num) && num >= 0 && num <= 999) {
        let unit = num % 10;
        let tenth = Math.floor((num % 100) / 10);
        let hundredth = Math.floor(num / 100);
        return {units: unit, tens: tenth, hundreds: hundredth};
    } else {
        console.log('Вы ввели недопустимое значение.');
        return {};
    }
}

// для красоты добавим ввод от пользователя
let userPrompt = Number(prompt('Введите число, которое будет преобразовано в объект'));
let result = numberToObject(userPrompt);
console.log(result);