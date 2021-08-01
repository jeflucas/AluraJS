var title = document.querySelector(".title");
title.textContent = "Aparecida Nutrition";

var pacientes = document.querySelectorAll(".paciente");

for (let index = 0; index < pacientes.length; index++) {
  var paciente = pacientes[index];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  if (peso < 0 || peso > 200 || altura < 0 || altura >= 3) {
    tdImc.textContent = "Dados inválidos";
    paciente.classList.add("paciente-invalido");
  } else {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
  }
}

var btnAdicionar = document.querySelector("#adicionar-paciente");
btnAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  var pacienteTr = document.createElement("tr");
  
  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;

  pacienteTr.appendChild(nomeTd)
  pacienteTr.appendChild(pesoTd)
  pacienteTr.appendChild(alturaTd)
  pacienteTr.appendChild(gorduraTd)
  pacienteTr.appendChild(imcTd)

  var tabela = document.querySelector("#tabela-pacientes")

  tabela.appendChild(pacienteTr)

});
