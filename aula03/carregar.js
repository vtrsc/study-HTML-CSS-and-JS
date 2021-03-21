function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = "agora sao" + hora + "horas"
    if (hora >= 0 && hora < 12) {
        //bom dia
          img.src = "fotomanha.jpg"
    }else if (hora >= 12 && hora < 18) {
        //boa tarde
         img.src = 'fototarde.jpg'
    } else {
        // boa noite
         img.src = 'fotonoite.jpg'
    }
}
