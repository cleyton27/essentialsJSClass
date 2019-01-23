var botaoAdicionar = document.querySelector("#buscar-paciente");
console.log("hello world");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando paciente");

    /*XMLHttpRequest is an Object that give to client one
    way to transfer dates between clients and server
    */
    var xhr = new XMLHttpRequest();
    //.open  opens the connection with the address that wishe to connect
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    //.addEventListener afeter load the page execute a function
    xhr.addEventListener("load", function(){
var erroAjax =document.querySelector("#erro-ajax");
      if(xhr.status == 200){
        var resposta = xhr.responseText;


        erroAjax.classList.add("invisible");
        //.status show status of request
        console.log(xhr.status);
        console.log(xhr.responseText);

        var pacientes = JSON.parse(resposta);
        pacientes.forEach(function(paciente){
          adiconaPacienteNaTabela(paciente);
        });
      }else{
        console.log(xhr.status);
        console.log(xhr.responseText );

        erroAjax.classList.remove("invisible");
      }

    //xhr.responseText get the page's content

        });
    //send the the request
    xhr.send();
} );
