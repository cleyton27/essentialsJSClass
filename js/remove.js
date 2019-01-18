var tabela = document.querySelector("table");
tabela.addEventListener("dblclick",function(event){
//form more clean to remove HTML elements
event.target.parentNode.classList.add("fadeOut");

//setTimeout does the wait function for milliseseconds

  setTimeout(function(){
event.target.parentNode.remove();
},2000);



});
