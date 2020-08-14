'use strict'

function my_sum (num1, num2) {
    return num1 + num2;
}

function my_subtr (num1, num2) {
    return num1 - num2;
}

function my_mult (num1, num2) {
    return num1 * num2;
}

function my_div (num1, num2) {
    return num1 / num2; //тут, конечно, можно было реализовать проверку, чтобы второе число не было нулем, но в дз такого требования не было, так что...
}

//особых пожеланий по дальнейшей реализации не было, но я решил добавить наглядности

let a = parseInt(prompt('Введите первое число.'));
let b = parseInt(prompt('Введите второе число, пожалуйста, не ноль!'));

let result1 = my_sum(a, b);
alert(`Сумма чисел: ${result1}`);

let result2 = my_subtr(a, b);
alert(`Разность чисел: ${result2}`);

let result3 = my_mult(a, b);
alert(`Произведение чисел: ${result3}`);

let result4 = my_div(a, b);
alert(`Частное от деления чисел: ${result4.toFixed(2)}`);