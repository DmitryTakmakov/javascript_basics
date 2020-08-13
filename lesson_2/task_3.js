'use strict'

let a = parseInt(prompt('Введите первое целое число.'));
let b = parseInt(prompt('Введите второе целое число.'));

if (a >= 0 && b >= 0) {
    alert(a - b);
}
if (a < 0 && b < 0) {
    alert(a * b);
}
if (Math.sign(a) != Math.sign(b)) {
    alert(a + b);
}