let angulo1;
let angulo2;
let angulo3;

angulo1 = 50;
angulo2 = 60;
angulo3 = 60;

let somaAngulos = angulo1 + angulo2 + angulo3;

console.log(somaAngulos);

if (somaAngulos === 180) {
    console.log("true");
}
else {
    console.log("Os ângulos não correspondem a um triângulo. Tente novamente!");
}
