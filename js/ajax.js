console.log("dentro do ajax");
var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://www.linhadecodigo.com.br/artigo/3585/ajax-basico-introducao.aspx");

xhr.addEventListener("load", function(){
  console.log("bla tabela");

//xhr.responseText get the page's content
  var resposta = xhr.responseText;

  console.log(resposta);
  var pacientes = JSON.parse(resposta);
  console.log(pacientes);
});
