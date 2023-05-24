import prompt from "prompt-sync";
let teclado = prompt();

let gastoMedioPorKMCarro: number;
let distanciaViagem: number;
let precoCombustivel: number;

function iniciarMain():number{
  var _IsNumber:boolean =true;
  while (_IsNumber) {
      gastoMedioPorKMCarro = +Number(
        teclado("Insira o consumo do seu carro em km por litro de combustivel : ")
      );
      _IsNumber= validarNumber(gastoMedioPorKMCarro);
  }
  
  var _IsNumber:boolean =true;
  while (_IsNumber) {
    distanciaViagem = +Number(
      teclado("Informe a distancia em KM de sua Viagem : ")
    );
    _IsNumber= validarNumber(distanciaViagem);
  }
  
  var _IsNumber:boolean =true;
  while (_IsNumber) {
    precoCombustivel = +Number(teclado("Informe o preco do combustível : "));
    _IsNumber= validarNumber(precoCombustivel);
  }

  var totalQueIraGastar: number = calcularCustoViagem(
    distanciaViagem,
    precoCombustivel,
    gastoMedioPorKMCarro
  );
  
  return totalQueIraGastar;
}
function validarNumber(variavel: any): boolean {
  if (!variavel) {
    variavel = true;
    console.log("Insira um numero valido .");
  } else if (variavel) {
    variavel = false;
  }
  return variavel;
}
function calcularCustoViagem(
  distanciaViagem: number,
  precoCombustivel: number,
  gastoMedioPorKMCarro: number
  ):number {
    return (distanciaViagem * precoCombustivel * (1 / gastoMedioPorKMCarro));
}

(function () {
  var totalQueIraGastar: number = iniciarMain();
  console.log("Voce ira gastar R$: " + totalQueIraGastar.toFixed(2));
})();
