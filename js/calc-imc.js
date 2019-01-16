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
//aproveitando a função calculaImc();
  var imc = calculaImc(peso, altura);
  //.toFixed show just the number of decimal place selceted
  tdImc.textContent = imc;
console.log(imc);

}
}

//function
  function calculaImc(peso, altura){
    var imc = 0;

    imc = peso/(altura * altura);
    return imc.toFixed(2);
  }



/*.event.preventDefault(); prevents the behavior Default and recive
the paremeter called event
*/
//  console.log(botaoAdcionar);
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
