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
var erro = validaPaciente(paciente);

//check if the lenght is bigger than 0
if (erro.length >0) {
  console.log("Paciente invaldo");
  var msg = document.querySelector("#mensagens-erro");
  msg.textContent = erro;
  //void return go out of function without execute
  return;
}



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


   //.appendChild() put a elment insed other
   pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
   pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
   pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
   pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
   pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));


  return pacienteTr;

}

function montaTd(dado, classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente){
  var erros =[];

  if(!validaPeso(paciente.peso)){
    //.push put elements inside of array
    erros.push("Pesso invalido!");
  }

  if (!validaAltura(pacinte.altura)) {  
    erros.push("Altura invalida!");
  }

return erros;

}
