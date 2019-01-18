var pacientes = document.querySelectorAll(".paciente")
console.log(pacientes);
var tabela = document.querySelector("table");
tabela.addEventListener("dblclick",function(){
  //idenfies wich target  was clicked
  var alvoEvento = event.target;
  //idenfies who is the parent of cliked target
  var paiDoAlvo = alvoEvento.parentNode;
  console.log(alvoEvento);
  console.log(paiDoAlvo);
  paiDoAlvo.remove();
})

/*
pacientes.forEach(function(paciente){
  paciente.addEventListener("dblclick",function(){
    console.log("duplo click");
//this get the object that was clicked and .remove() remove it
    this.remove();
  });
});
*/
