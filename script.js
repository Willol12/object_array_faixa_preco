//Faixa
//é que você crie um array de objetos 
//de faixa de preço para que ela possa ser usado 
//em um site igual o mercado livre por exemplo
//faixas, tooltip, minimo, maximo

//Primeira Opção

let faixas = [
  {tooltip: 'até R$700', minimo:0, maximo: 700},
  {tooltip: 'de R$700 a R$1000', minimo:700, maximo: 1000},
  {tooltip: 'R$1000 ou mais', minimo:1000, maximo: 9999999}
];

//Segunda Opção usando (Factory Funcion)
function criafaixaPreço(tooltip,minimo,maximo) {
  return {
    tooltip,
    minimo,
    maximo
  }
}
let faixas2 = [
criafaixaPreço('a', 1,100),
criafaixaPreço('b', 100,1000),
criafaixaPreço('c', 1000,10000),
]

//Terceira Opção construction function
function faixaPreco(tooltip,minimo,maximo){
  this.tooltip = tooltip,
  this.minimo = minimo,
  this.maximo = maximo

}
let faixas3 = [
  new faixaPreco('d',10,20),
  new faixaPreco('e',25,34),
  new faixaPreco('f',15,40)
];

console.log(faixas);
console.log(faixas2);
console.log(faixas3);