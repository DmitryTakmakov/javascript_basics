'use strict';

/**
 * 
 * @param {number} arg1 Первое число для математической операции.
 * @param {number} arg2 Второе число для математической операции.
 * @param {string} operation Обозначение операции в строковом виде. Может быть: сложение, вычитание, умножение, деление.
 * @returns {string} Результат вычислений в красивом строковом виде.
 */
function mathOperation (arg1, arg2, operation) {
    function mySum(num1, num2) {
        return num1 + num2;
    }
    
    function mySubtr(num1, num2) {
        return num1 - num2;
    }
    
    function myMult(num1, num2) {
        return num1 * num2;
    }
    
    function myDiv(num1, num2) {
        return num1 / num2; 
    }

    switch (operation) {
        case "сложение":
            return `Сумма: ${mySum(arg1, arg2)}`;
        case "вычитание":
            return `Разность: ${mySubtr(arg1, arg2)}`;
        case "умножение":
            return `Произведение: ${myMult(arg1, arg2)}`;
        case "деление":
            return `Частное: ${myDiv(arg1, arg2).toFixed(2)}`;
        default:
            return 'Я не знаю такой операции!';
    }
}

let a = parseInt(prompt('Введите первое число.'));
let b = parseInt(prompt('Введите второе число, пожалуйста, не ноль!'));
let operation = prompt('Введите математическую операцию: сложение, вычитание, умножение или деление.');

alert(mathOperation(a, b, operation));