//.querySelector  get the content of tag/class/id

var title =document.querySelector(".title	")
title.textContent = "Aparecida Nutricionista";

// .querySelectorAll get all elements and return an array
var pacientes =  document.querySelectorAll(".paciente");


for (var i = 0; i < pacientes.length; i++) {
var paciente = pacientes[i];


paciente.querySelector(".info-peso");
var tdPeso= paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura")
var tdImc = paciente.querySelector(".info-imc");
//.textContent get just the content that is inside of the tag
var peso = tdPeso.textContent;
var altura = tdAltura.textContent;


var pesoEvalido = true;
var alturaValida = true;


if (peso <= 0 || peso>= 1000 ) {
  console.log("pesso invalido");
  tdImc.textContent = "Peso invalido"
  pesoEvalido = false;
  //.style.color replace the color this method manipulates CSS elements
//  paciente.style.backgroundColor="lightcoral";

//.classList.add(); the remcommended way of to change elementes in class
paciente.classList.add("paciente-invalido")
}

if(altura <=0 || altura >= 4.00){
  console.log("altura invalida");
  tdImc.textContent = "altura invalida";
  alturaValida = false;
  paciente.classList.add("paciente-invalido ");
}

if (alturaValida == true && pesoEvalido == true) {

  var imc = peso/(altura*altura);
  //.toFixed show just the number of decimal place selceted
  tdImc.textContent = imc.toFixed(2);
console.log(imc);

}
}


var botaoAdcionar = document.querySelector("#adicionar-paciente")

/*.event.preventDefault(); prevents the behavior Default and recive
the paremeter called event
*/
botaoAdcionar.addEventListener("click", function(event){
  event.preventDefault();

  var form = document.querySelector("#form-add");
 /*form.altura acess the element by name
  console.log(form.altura);
  //form.altura.value get the value of the input
  console.log(form.altura.value);
  console.log(form.peso.value);
*/
var nome = form.nome.value;
var peso = form.peso.value;
var altura = form.altura.value;
var gordura = form.gordura.value;

//document.createElement(); creat HTML elements ex"tables"
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
imcTd.textContent = imc.toFixed(2);

//.appendChild() put a elment insed other
 pacienteTr.appendChild(nomeTd);
 pacienteTr.appendChild(pesoTd);
 pacienteTr.appendChild(alturaTd);
 pacienteTr.appendChild(gorduraTd);
 pacienteTr.appendChild(imcTd);

 console.log(pacienteTr);

 var table = document.querySelector("#tabela-pacientes");

 table.appendChild(pacienteTr);

});
  console.log(botaoAdcionar);
//.addEventListener listening an event when the user click
//also is possible to pass more than one paremeter

//title.addEventListener("click", mostrarMensagem);

/*title.addEventListener is possible also to use anonymous function
title.addEventListener("click", function(){
  console.log("utilzando função anonima");
})
/*
function mostrarMensagem() {
  console.log("Hello world");
}
*/



//console.log(paciente); // tr
//console.log(tdPeso); // td
//console.log(peso);
//console.log(altura);
//console.log(imc);
