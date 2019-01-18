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
var erros = validaPaciente(paciente);

console.log(erros);
//check if the lenght is bigger than 0
if (erros.length >0) {
  exibeMensagensDeErro(erros);
  console.log("Paciente invaldo");
  var msg = document.querySelector("#mensagens-erro");

  //void return go out of function without execute
  return;
}
 //console.log(pacienteTr);

 table.appendChild(pacienteTr);

 form.reset();
 var mensagensErro = document.querySelector("#mensagens-erro");
 mensagensErro.innerHTML =""

});

function exibeMensagensDeErro(erros){
  var ul = document.querySelector("#mensagens-erro")
//.innerHtml  clean the message's field
  ul.innerHTML = "";
  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent =erro;
    ul.appendChild(li);
  });

}

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

  if(paciente.nome.length ==0){
    erros.push("O nome deve ser inserido")
  }

  if(!validaPeso(paciente.peso)){
    //.push put elements inside of array
    erros.push("Pesso invalido!");
  }

  if (!validaAltura(paciente.altura)) {
    erros.push("Altura invalida!");
  }

  if(paciente.gordura.length==0){
    erros.push("Gordura não pode ser em branco")
  }

  if(paciente.altura.length==0){
    erros.push("Altura não pode ser em branco")
  }
  if(paciente.peso.length==0){
    erros.push("Peso não pode ser em branco")
  }


return erros;

}
