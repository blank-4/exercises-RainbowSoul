function numParam(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else if (num1 < num2) {
        return num2;
    }
    else {
        return "Les deux sont égaux";
    }
}
console.log(numParam(3, 2));