function somar(){
    var tn1 = window.document.getElementById("txtn1") 
    var tn2 = window.document.querySelector( "input#txtn2")
    var res = window.document.getElementById("res")
    var n1= Number(tn1.value)
    var n2=Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = " soma é" + n1 + "é igual" + n2 + (s)
}