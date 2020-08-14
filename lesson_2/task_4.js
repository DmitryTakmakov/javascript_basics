'use strict';

function mySum(arg1, arg2) {
    return arg1 + arg2;
}

function mySubtr(arg1, arg2) {
    return arg1 - arg2;
}

function myMult(arg1, arg2) {
    return arg1 * arg2;
}

function myDiv(arg1, arg2) {
    return arg1 / arg2; //тут, конечно, можно было реализовать проверку, чтобы второе число не было нулем, но в дз такого требования не было, так что...
}

//особых пожеланий по дальнейшей реализации не было, но я решил добавить наглядности

let a = parseInt(prompt('Введите первое число.'));
let b = parseInt(prompt('Введите второе число, пожалуйста, не ноль!'));

alert(`Сумма чисел: ${mySum(a, b)}`);

alert(`Разность чисел: ${mySubtr(a, b)}`);

alert(`Произведение чисел: ${myMult(a, b)}`);

alert(`Частное от деления чисел: ${myDiv(a, b).toFixed(2)}`);