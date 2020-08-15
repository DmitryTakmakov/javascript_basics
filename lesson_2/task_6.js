'use strict';

function roublesFlexions(num) {
    let lastString = String(num).length - 1;
    let lastDigit = Number(String(num).charAt(lastString));
    if (num >= 11 && num <= 14) {
        switch (lastDigit) {
            case 1:
            case 2:
            case 3:
            case 4:
                alert(`Ваша сумма в ${num} рублей успешно зачислена.`);
                break;
        }
    } else {
        switch (lastDigit) {
            case 1:
                alert(`Ваша сумма в ${num} рубль успешно зачислена.`);
                break;
            case 2:
            case 3:
            case 4:
                alert(`Ваша сумма в ${num} рубля успешно зачислена.`);
                break;
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 0:
                alert(`Ваша сумма в ${num} рублей успешно зачислена.`);
                break;
            default:
                alert('Вы ввели неверную сумму.')
        }
    }
}

let customerRoubles = parseInt(prompt('Введите сумму в рублях, которую вы хотите зачислить.'));
roublesFlexions(customerRoubles);