'use strict';

function bodylessCycle(num) {
    if (num < 10) {
        console.log(num);
        return true;
    } else {
        return false;
    }
}

for (let i = 0; bodylessCycle(i); i++) {
    // vast nothingness of space
}