function aireCercle(num1, num2) {
    if (num1 <= num2 || num1 >= num2) {
        console.log(num1 ** num2);
    } else if (typeof num1 === "string" || typeof num2 === "string") {
        console.log("Rentre un num sale escroc");
    } else {
        console.log("J'en ai marre, tu sais pas rentrer des nombres");
    }
}
console.log(aireCercle(3, 5));