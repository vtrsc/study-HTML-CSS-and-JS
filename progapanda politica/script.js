const  btnmobile = document.getElementById("btn-mobile");
function toggleMenu (){
    const nav = document.getElementById("nav");
    nav.classList.toggle('active');
}
btnmobile.addEventListener("click" ,toggleMenu);