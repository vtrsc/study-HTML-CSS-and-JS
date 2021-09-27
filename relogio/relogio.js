function relogio(){

var data = new Date();
var hora = new data.getHours();
var min = data.getMinutes();
var seg = data.getSeconds();
var tempo_total = hora + ":" +  min + ":" + seg ;
var tempo = window.document.getElementById("relogio");
tempo.innerHTML(relogio);

}