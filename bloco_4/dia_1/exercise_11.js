let salarioBruto = 3000;
let aliquotaINSS;


if (salarioBruto>0 && salarioBruto<=1556.94) {
    aliquotaINSS=0.08;
}
else if (salarioBruto>1556.94 && salarioBruto<=2594.92) {
    aliquotaINSS=0.09;
}
else if (salarioBruto>2594.92 && salarioBruto<=5189.82) {
    aliquotaINSS=0.11;
}
else if (salarioBruto>5189.82) {
    aliquotaINSS=570.88;
}
else {
    console.log("Valores incorretos. Não foi possível calcular.");
}

console.log(aliquotaINSS);

let salarioBase = salarioBruto - (salarioBruto * aliquotaINSS);
console.log(salarioBase);
let aliquotaIR;
let deducaoIR;


if (salarioBase>0 && salarioBase<=1903.98) {
    aliquotaIR=null;
    deducaoIR=null;
}
else if (salarioBase>1903.98 && salarioBase<=2826.65) {
    aliquotaIR=0.075;
    deducaoIR=142.80;
}
else if (salarioBase>2826.65 && salarioBase<=3751.05) {
    aliquotaIR=0.15;
    deducaoIR=354.80;
}
else if (salarioBase>3751.05 && salarioBase<=4664.68) {
    aliquotaIR=0.225;
    deducaoIR=636.13;
}
else if (salarioBase>4664.68) {
    aliquotaIR=0.275;
    deducaoIR=869.36;
}
else {
    console.log("Valores incorretos. Não foi possível calcular.");
}

console.log(aliquotaIR);
console.log(deducaoIR);

let salarioLiquido = salarioBase - ((aliquotaIR * salarioBase) - deducaoIR);
console.log("Seu salário líquido é:");
console.log(salarioLiquido);
