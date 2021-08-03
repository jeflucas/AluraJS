var title = document.querySelector(".title");
title.textContent = "Aparecida Nutrition";

var pacientes = document.querySelectorAll(".paciente");

var calculaImc = function (peso, altura) {
  var imc = peso / (altura * altura);
  return imc.toFixed(2);
};

for (let index = 0; index < pacientes.length; index++) {
  var paciente = pacientes[index];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;
  

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;
  

  var tdImc = paciente.querySelector(".info-imc");
  tdImc.textContent = calculaImc(peso, altura);

  validaAltura(altura);
  validaPeso(peso);
}

function validaAltura(altura){
  if (altura < 0 || altura >= 3) {
    tdImc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
  }
}

function validaPeso(peso){
  if (peso < 0 || peso > 200) {
    tdImc.textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido");
  }
}