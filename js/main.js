let button = document.querySelector(".nav__icon");
let links = document.getElementById("links");
let show = document.querySelector(".show");
let contador = 0;

button.addEventListener("click",function(){
    if(contador == 0){
        links.className = ('nav__links show');
        contador = 1;
    }else{
        links.classList.remove('show');
        links.className = ('nav__links');
        contador = 0;
    }
})