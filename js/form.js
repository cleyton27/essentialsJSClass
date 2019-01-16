var botaoAdcionar = document.querySelector("#adicionar-paciente");
botaoAdcionar.addEventListener("click", function(event){
  event.preventDefault();

  var form = document.querySelector("#form-add");
  /*form.altura acess the element by name
  console.log(form.altura);
  //form.altura.value get the value of the input
  console.log(form.altura.value);
  console.log(form.peso.value);
*/

//Extraindo informações do paciente do form
var paciente = obterPacienteDoFormulario(form);
console.log(paciente);

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
imcTd.textContent = calculaImc(peso, altura);

//.appendChild() put a elment insed other
 pacienteTr.appendChild(nomeTd);
 pacienteTr.appendChild(pesoTd);
 pacienteTr.appendChild(alturaTd);
 pacienteTr.appendChild(gorduraTd);
 pacienteTr.appendChild(imcTd);


 console.log(pacienteTr);
//Adiconando o paciente na tabela
 var table = document.querySelector("#tabela-pacientes");

 table.appendChild(pacienteTr);

});

function obterPacienteDoFormulario(form){
//creating Object with atributes
  var paciente = {
    nome: form.nome.value,
    altura: form.altura.value,
    peso: form.peso.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)

  }
return paciente;


}
