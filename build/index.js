"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let teclado = (0, prompt_sync_1.default)();
let gastoMedioPorKMCarro;
let distanciaViagem;
let precoCombustivel;
function iniciarMain() {
    var _IsNumber = true;
    while (_IsNumber) {
        gastoMedioPorKMCarro = +Number(teclado("Insira o consumo do seu carro em km por litro de combustivel : "));
        _IsNumber = validarNumber(gastoMedioPorKMCarro);
    }
    var _IsNumber = true;
    while (_IsNumber) {
        distanciaViagem = +Number(teclado("Informe a distancia em KM de sua Viagem : "));
        _IsNumber = validarNumber(distanciaViagem);
    }
    var _IsNumber = true;
    while (_IsNumber) {
        precoCombustivel = +Number(teclado("Informe o preco do combustível : "));
        _IsNumber = validarNumber(precoCombustivel);
    }
    var totalQueIraGastar = calcularCustoViagem(distanciaViagem, precoCombustivel, gastoMedioPorKMCarro);
    return totalQueIraGastar;
}
function validarNumber(variavel) {
    if (!variavel) {
        variavel = true;
        console.log("Insira um numero valido .");
    }
    else if (variavel) {
        variavel = false;
    }
    return variavel;
}
function calcularCustoViagem(distanciaViagem, precoCombustivel, gastoMedioPorKMCarro) {
    return (distanciaViagem * precoCombustivel * (1 / gastoMedioPorKMCarro));
}
(function () {
    var totalQueIraGastar = iniciarMain();
    console.log("Voce ira gastar R$: " + totalQueIraGastar.toFixed(2));
})();
