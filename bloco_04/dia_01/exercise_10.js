let valorCusto = 10;
let valorCustoTotal = valorCusto * 1.2; // Atente que, sobre o custo do produto, incide um imposto de 20% 
let valorVenda = 50;
let lucro = valorVenda - valorCustoTotal;
let quantidadeVendida = 1000;
let lucroFinal = lucro * quantidadeVendida;

if (valorCusto<0 || valorVenda<0 || quantidadeVendida<0) {
    console.log("ERRO!!! Verifique novamente os valores inseridos.")
}
else {
    console.log(lucroFinal);
}
