var pacientes = document.querySelectorAll(".paciente")
console.log(pacientes);
var tabela = document.querySelector("table");
tabela.addEventListener("dblclick",function(){
//form more clean to remove HTML elements
event.target.parentNode.remove();

})
