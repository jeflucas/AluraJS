var title = document.querySelector(".title");
title.textContent = "Aparecida Nutrition"

var paciente01 = document.querySelector("#paciente01");

var p1Peso = paciente01.querySelector(".info-peso");
var peso = p1Peso.textContent;

var p1Altura = paciente01.querySelector(".info-altura");
var altura = p1Altura.textContent;

var imc = peso / (altura * altura);

paciente01.querySelector(".info-imc").textContent = imc;