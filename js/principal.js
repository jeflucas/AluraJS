var title = document.querySelector(".title");
title.textContent = "Aparecida Nutrition"

var paciente = document.querySelector("#paciente01");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");
var imc = peso / (altura * altura);

tdImc.textContent = imc;

