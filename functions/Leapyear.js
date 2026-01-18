function leapyear(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if ( year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

const isLiapyear = leapyear(2024);
console.log (`Is 2024 a leap year? ${isLiapyear}`);