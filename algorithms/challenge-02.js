// const changeChecker = (purchaseValue, moneyHandedOver) => {
//   let change = moneyHandedOver - purchaseValue

//   let bills100 = 0
//   let bills10 = 0
//   let bills1 = 0

//   if (change >= 100) {
//     bills100 = Math.floor(change / 100)
//     change %= 100
//   }

//   if (change >= 10) {
//     bills10 = Math.floor(change / 10);
//     change %= 10
//   }

//   bills1 = change;

//   const formatedResult = `
//   Valor da compra: ${purchaseValue.toFixed(2)} reais
//   Valor do troco: ${moneyHandedOver.toFixed(2)} reais
//   Quantidade de notas de 100 reais: ${bills100}
//   Quantidade de notas de 10 reais: ${bills10} reais
//   Quantidade de notas de 1 real: ${bills1}
//   `

//   return formatedResult
// };

// const test = changeChecker(100, 250)
// console.log(test)

var valorCompra = 150.25;
var dinheiroEntregue = 250.75;

// Calcula o troco
var troco = dinheiroEntregue - valorCompra;

// Calcula a quantidade de notas de 100, 10 e 1 reais no troco
var notas100 = 0;
var notas10 = 0;
var notas1 = 0;

// Variável para armazenar os centavos
var centavos = 0;

// Verifica se o troco é positivo (se não houver troco negativo)
if (troco >= 0) {
    // Divide o troco em reais e centavos
    var trocoEmReais = Math.floor(troco);
    centavos = (troco - trocoEmReais) * 100;

    // Calcula a quantidade de notas de 100 reais no troco
    if (trocoEmReais >= 100) {
        notas100 = Math.floor(trocoEmReais / 100);
        trocoEmReais %= 100;
    }

    // Calcula a quantidade de notas de 10 reais no troco
    if (trocoEmReais >= 10) {
        notas10 = Math.floor(trocoEmReais / 10);
        trocoEmReais %= 10;
    }

    // A quantidade de notas de 1 real é o valor restante do troco em reais
    notas1 = trocoEmReais;
}

// Exibe o valor da compra, o valor do troco, a quantidade de cada tipo de nota do troco e os centavos
console.log("Valor da compra: " + valorCompra.toFixed(2) + " reais");
console.log("Valor do troco: " + dinheiroEntregue.toFixed(2) + " reais");
console.log("Quantidade de notas de 100 reais: " + notas100);
console.log("Quantidade de notas de 10 reais: " + notas10);
console.log("Quantidade de notas de 1 real: " + notas1);
console.log("Centavos: " + centavos.toFixed(2));