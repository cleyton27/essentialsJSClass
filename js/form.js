 var botaoAdcionar = document.querySelector("#adicionar-paciente");
botaoAdcionar.addEventListener("click", function(event){
  event.preventDefault();


var form = document.querySelector("#form-add");

//Extraindo informações do paciente do form
var paciente = obterPacienteDoFormulario(form);
console.log(paciente);
//
//Adiconando o paciente na tabela
 var table = document.querySelector("#tabela-pacientes");


var pacienteTr =  montarTr(paciente);




 //console.log(pacienteTr);

 table.appendChild(pacienteTr);

});

function obterPacienteDoFormulario(form){
//creating Object with atributes
  var paciente = {
    nome: form.nome.value,
    altura: form.altura.value,
    peso: form.peso.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value )

  }
return paciente;
}

function montarTr(paciente){
  //document.createElement(); creat HTML elements ex"tables"
  var pacienteTr = document.createElement("tr");
  //classList.add() add a class to element created
  pacienteTr.classList.add("paciente");

  var nomeTd = montaTd(paciente.nome, "info-nome");
  var pesoTd = montaTd(paciente.peso, "info-peso");
  var alturaTd = montaTd(paciente.altura, "info-altura");
  var gorduraTd = montaTd(paciente.gordura, "info-gordura");
  var imcTd = montaTd(paciente.imc, "info-imc");



   //.appendChild() put a elment insed other
   pacienteTr.appendChild(nomeTd);
   pacienteTr.appendChild(pesoTd);
   pacienteTr.appendChild(alturaTd);
   pacienteTr.appendChild(gorduraTd);
   pacienteTr.appendChild(imcTd);


  return pacienteTr;

}

function montaTd(dado, classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}
