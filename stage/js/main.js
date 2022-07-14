const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("header .cont > div");
menuBtn.onclick = () => {
    menuBtn.classList.toggle("menu-btn")
    menu.classList.toggle("menu")
}
///////////////////////////////

var slider = document.querySelector(".pics img");
var indicators = document.querySelector(".btns");
var images = document.querySelectorAll(".btns img");

for(var i=0;i<images.length;i++){
    images[i].setAttribute("data-index",i)
    images[i].addEventListener("click" , (e)=>{
        change(e.currentTarget.getAttribute("data-index"))
    })
}

function change(n){
    for(var i=0;i<images.length;i++){
        images[i].classList.remove("active")
        if(images[i].getAttribute("data-index")==n){
            images[i].classList.add("active")
            slider.setAttribute("src",images[i].getAttribute("src"))
        }
    };
}
