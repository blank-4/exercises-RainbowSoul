function aireCercle(num1, num2) {
    if (num1 <= num2 || num1 >= num2) {
        return num1 ** num2;
    } else {
        return "J'en ai marre, tu sais pas rentrer des nombres";
    }
}
console.log(aireCercle(7, 5));