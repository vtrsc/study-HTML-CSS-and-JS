const btnincrementar$ = document.getElementById("btn_incrementar");
const decrementar = document.getElementById("decrementar")
const p$ = document.getElementById("contador");
const zerar = document.getElementById('zerar');
let contador = 0;
p$.innerHTML = contador;
btnincrementar$.addEventListener('click' , function() {
    contador++
    p$.innerHTML = contador;
})


decrementar.addEventListener('click' , function () {
    contador--
    p$.innerHTML = contador;
})

zerar.addEventListener('click' , function() {
    contador = 0;
    p$.innerHTML = contador;
} )






