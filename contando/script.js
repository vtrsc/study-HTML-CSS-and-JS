function contar() {
let ini = document.getElementById('texti')
   let fim = document.getElementById('textf')  
   let passo = document.getElementById('textp')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("ERRO 404")
    }else{
        alert("tudo ok")
    }

}