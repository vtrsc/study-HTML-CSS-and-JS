function media() {
    let nom = window.prompt("qual o nome do aluno")
    let n1 = Number(window.prompt ("qual o primeira nota "  + nom + " ?"  ))
    let n2 = Number(window.prompt( "alem de " + n1 + " qual foi a sedunfa nota de " + nom ))
    var med = (n1 + n2)  / 2

    let res = document.getElementById("situacao")
    res.innerHTML = <p>  a media final de  <mark> nom</mark></p>
}
