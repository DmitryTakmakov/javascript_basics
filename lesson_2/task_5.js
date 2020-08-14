'use strict';

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
            alert(`Сумма: ${mySum(arg1, arg2)}`);
            break;
        case "вычитание":
            alert(`Разность: ${mySubtr(arg1, arg2)}`);
            break;
        case "умножение":
            alert(`Произведение: ${myMult(arg1, arg2)}`);
            break;
        case "деление":
            alert(`Частное: ${myDiv(arg1, arg2).toFixed(2)}`);
            break;
        default:
            alert('Я не знаю такой операции!')
    }
}

let a = parseInt(prompt('Введите первое число.'));
let b = parseInt(prompt('Введите второе число, пожалуйста, не ноль!'));
let operation = prompt('Введите математическую операцию: сложение, вычитание, умножение или деление.');

mathOperation(a, b, operation);