var campoFiltro = document.querySelector("#filtrar-tabela");
console.log(campoFiltro);

//addEventListener("input", function()) get all that was typed in the field
 campoFiltro.addEventListener("input", function(){
   //getting the value that is being typed
    //  console.log(campoFiltro.value);
// means the same of campoFiltro.value
    console.log(this.value);
    //this for will interact by the name's array
    var pacientes = document.querySelectorAll(".paciente");
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      var tdNome = paciente.querySelector(".info-nome")
      var nome = paciente.textContet;
    }
 });
