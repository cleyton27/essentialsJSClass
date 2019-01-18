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

var erros  = validaPaciente(paciente);
console.log(erros);

if (erros.length >0) {
  exibeMensagensDeErro(erros);
  return;
}


 table.appendChild(pacienteTr);

//.reset(); clean the filds form
 form.reset();

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

  //se o peso não for valida o erro é mostrado
  if(!validaPeso(paciente.peso)){
      //coloca uma String dentro do array
      erros.push("Pesso invalido!");
  }

  if (!validaAltura(paciente.altura))
    erros.push("Altura invalida!");


  return erros;
}

function exibeMensagensDeErro(erros) {
  var ul = document.querySelector("#messagens-erro");
  erros.forEach(function(erro){
       var li = document.createElement("li");
       li.textContent = erro;
       console.log(li);
       ul.appendChild(li);
  });

}
