function aireCercle(rayon) {
    return Math.pow(rayon, 2) * 3.14;
}
console.log("Aire du cercle : ", aireCercle(8));

function perimetreCercle(rayon) {
    return (rayon * 2) * 3.14;
}
console.log("Périmètre du cercle : ", perimetreCercle(8));

function diametreCercle(rayon) {
    return rayon * 2;
}
console.log("Diamètre du cercle : ", diametreCercle(8));