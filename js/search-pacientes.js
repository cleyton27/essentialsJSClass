var botaoAdicionar = document.querySelector("#buscar-paciente");

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

    //xhr.responseText get the page's content
      var resposta = xhr.responseText;
      console.log(resposta);
      var pacientes = JSON.parse(resposta);
      pacientes.forEach(function(paciente){
        adiconaPacienteNaTabela(paciente);
      })

        });
    //send the the request
    xhr.send();
} );
