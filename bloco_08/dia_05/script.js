const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2); // fixar duas casas decimais
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo));

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88