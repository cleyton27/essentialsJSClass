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
      console.log(xhr.responseText);
    });
    //send the the request
    xhr.send();
} );
