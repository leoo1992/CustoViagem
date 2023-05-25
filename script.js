function main() {
  let gastoMedioPorKMCarro = parseFloat(
    document.getElementById("autonomiaVeiculo").value
  );
  let distanciaViagem = parseFloat(
    document.getElementById("distanciaViagem").value
  );
  let precoCombustivel = parseFloat(
    document.getElementById("precoCombustivel").value
  );
  let totalQueIraGastar;

  if (
    isNaN(gastoMedioPorKMCarro) ||
    gastoMedioPorKMCarro === null ||
    gastoMedioPorKMCarro == "E" ||
    gastoMedioPorKMCarro == "e" ||
    gastoMedioPorKMCarro == "." ||
    gastoMedioPorKMCarro == "," ||
    gastoMedioPorKMCarro == "+" ||
    gastoMedioPorKMCarro == "-" ||
    gastoMedioPorKMCarro == 0
  ) {
    gastoMedioPorKMCarro = 1;
  }
  if (
    isNaN(distanciaViagem) ||
    distanciaViagem === null ||
    distanciaViagem == "E" ||
    distanciaViagem == "e" ||
    distanciaViagem == "." ||
    distanciaViagem == "," ||
    distanciaViagem == "+" ||
    distanciaViagem == "-"
  ) {
    distanciaViagem = 0;
  }
  if (
    isNaN(precoCombustivel) ||
    precoCombustivel === null ||
    precoCombustivel == "E" ||
    precoCombustivel == "e" ||
    precoCombustivel === "." ||
    precoCombustivel == "," ||
    precoCombustivel == "+" ||
    precoCombustivel == "-"
  ) {
    precoCombustivel = 0;
  }

  document.getElementById("autonomiaVeiculo").value =
    parseFloat(gastoMedioPorKMCarro);
  document.getElementById("distanciaViagem").value =
    parseFloat(distanciaViagem);
  document.getElementById("precoCombustivel").value =
    parseFloat(precoCombustivel);

  totalQueIraGastar = parseFloat(
    distanciaViagem * precoCombustivel * (1 / gastoMedioPorKMCarro)
  );
  if (isNaN(totalQueIraGastar) || totalQueIraGastar === null) {
    totalQueIraGastar = 0;
  }

  document.getElementById("resultado").innerHTML =
    "Total gasto para essa viagem será de R$" + totalQueIraGastar.toFixed(2) + ".";
  var myModal = new bootstrap.Modal(document.getElementById("resultadoModal"), {
    keyboard: true,
  });
  myModal.show();
}
