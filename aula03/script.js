function carregar (){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('foto')
var data = new Date()
//var hora = data.getHours()//
var hora = 22;
msg.innerHTML = "agora sao" + hora + "horas"
if(hora >= 0 && hora < 12){
    //bom dia
    img.src ="fotomanha.png"
}else if(hora >= 12 && hora < 18 ){
    //boa tarde
    img.src="fototarde.png"
}else{
    // boa noite
    img.src="fotonoite.png"
}
}
