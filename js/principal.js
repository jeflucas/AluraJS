var title = document.querySelector(".title");
title.textContent = "Aparecida Nutrition";

var pacientes = document.querySelectorAll(".paciente");

var calculaImc = function (peso, altura) {
  if (peso < 0 || peso > 200 || altura < 0 || altura >= 3) {
    tdImc.textContent = "Dados inválidos";
    paciente.classList.add("paciente-invalido");
  } else {
    var imc = peso / (altura * altura);
    return (tdImc.textContent = imc.toFixed(2));
  }
};

for (let index = 0; index < pacientes.length; index++) {
  var paciente = pacientes[index];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  calculaImc(peso, altura);
}
