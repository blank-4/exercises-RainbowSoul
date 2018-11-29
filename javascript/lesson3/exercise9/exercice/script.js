function firstFunction(number) {
    if (number < 0) {
        return -1;
    }
    else if (number == 0) {
        return 1;
    }
    var result = number;
    while (number-- > 1) {
        result += number;
    }
    return result;
}
console.log(firstFunction(10));

function secondFunction(number) {
    if (number < 0) {
        return -1;
    }
    else if (number == 0) {
        return 1;
    }
    else {
        return (number + firstFunction(number - 1));
    }
}
console.log(secondFunction(10));