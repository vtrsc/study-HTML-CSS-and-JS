function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")

if(fano.value.length == 0 || fano.value > ano){
    window.alert("verifique os dados")
}else {
    var fsex = document.getElementsByName("radsex")
    var idade = ano - Number(fano.value)    
   var genero = ""
   if(fsex[0].checked){
    genero = "homen"
   }else if (fsex[1].checked){
       genero = "mulher"
   }
   res.innerHTML = "detectamos  "  +genero + " com " + idade + " anos";
}
}