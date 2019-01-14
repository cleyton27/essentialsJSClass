//.querySelector  get the content of tag/class/id

var title =document.querySelector(".title	")
title.textContent = "Aparecida Nutricionista";
var paciente =  document.querySelector("#primeiro-paciente");
paciente.querySelector(".info-peso");
var tdPeso= paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura")
var tdImc = paciente.querySelector(".info-imc");
//.textContent get just the content that is inside of the tag
var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var pesoEvalido = true;
var alturaValida = true;

if (peso <= 0 || peso> 1000 ) {
  console.log("pesso invalido");
  tdImc.textContent = "Peso invalido"
  pesoEvalido = false;
}

if(altura <=0 || altura >= 4.00){
  console.log("Altura invalida");
  tdImc.textContent = "Altura invalida";
  alturaValida = false;
}

if (alturaValida == true && pesoEvalido == true) {

  var imc = peso/(altura*altura);
  tdImc.textContent = imc;
console.log(imc);

}
//console.log(paciente); // tr
//console.log(tdPeso); // td
//console.log(peso);
//console.log(altura);
//console.log(imc);
