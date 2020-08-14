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

let result1 = mySum(a, b);
alert(`Сумма чисел: ${result1}`);

let result2 = mySubtr(a, b);
alert(`Разность чисел: ${result2}`);

let result3 = myMult(a, b);
alert(`Произведение чисел: ${result3}`);

let result4 = myDiv(a, b);
alert(`Частное от деления чисел: ${result4.toFixed(2)}`);