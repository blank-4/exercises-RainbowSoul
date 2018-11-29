function aireCercle(num1, num2) {
    if (num1 != num2 || num1 > num2 || num1 < num2 || num1 === num2) {
        return num1 ** num2;
    } else {
        return "Error";
    }
}
console.log("Le résultat est", aireCercle(6, 5));