const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("header .cont > div");
menuBtn.onclick = () => {
    menuBtn.classList.toggle("menu-btn");
    menu.classList.toggle("menu");
};
///////////////////////////////

var slider = document.querySelector(".pics img");
var indicators = document.querySelector(".btns");
var images = document.querySelectorAll(".btns img");

for (var i = 0; i < images.length; i++) {
    images[i].setAttribute("data-index", i);
    images[i].addEventListener("click", (e) => {
        change(e.currentTarget.getAttribute("data-index"));
    });
}

function change(n) {
    for (var i = 0; i < images.length; i++) {
        images[i].classList.remove("active");
        if (images[i].getAttribute("data-index") == n) {
            images[i].classList.add("active");
            slider.setAttribute("src", images[i].getAttribute("src"));
        }
    }
}

///////////////////////////////

const form = document.querySelector(".form form input[type=submit]");
form.addEventListener("click", (e) => {
    e.preventDefault();
    var name = document.querySelector(".form form input[name='name']");
    var email = document.querySelector(".form form input[name='email']");
    var message = document.querySelector(".form form textarea[name='message']");
    const response = fetch(
        `./assests/php/form.php?name=${name.value}&email=${email.value}&message=${message.value}`
    )
        .then((res) => res.json())
        .then((data) => {
            var modal = document.querySelector(".modal");
            var modalBtn = modal.querySelector("button");
            modal.querySelector("h3").innerText = data["res"];
            modal.querySelector("p").innerText = data["content"];
            modal.classList.add("show", data["res"]);
            modalBtn.addEventListener("click", () => {
                modal.classList.remove("show", data["res"]);
            });
        })
        .catch((err) => console.log(err));
});

///////////////////////////////////////

var navs = document.querySelectorAll("header .cont div ul li");

var home = document.querySelector(".landing"),
    features = document.querySelector(".features"),
    portfolio = document.querySelector(".portfolio"),
    contact = document.querySelector(".contact"),
    prices = document.querySelector(".prices"),
    policies = document.querySelector(".policies"),
    rates = document.querySelector(".rates"),
    about = document.querySelector(".about");


window.onscroll = () =>{

    if((scrollY>=home.offsetTop) && (scrollY<=(features.offsetTop+features.scrollHeight))){
        navs.forEach(e => {
            e.classList.remove("active")
        });
        navs[0].classList.add("active")
    }
    if((scrollY>=portfolio.offsetTop) && (scrollY<=(portfolio.offsetTop+portfolio.scrollHeight))){
        navs.forEach(e => {
            e.classList.remove("active")
        });
        navs[1].classList.add("active")
    } 
    if((scrollY>=contact.offsetTop) && (scrollY<=(policies.offsetTop+policies.scrollHeight))){
        navs.forEach(e => {
            e.classList.remove("active")
        });
        navs[2].classList.add("active")
    } 
    if((scrollY>=rates.offsetTop+80) && (scrollY<=(rates.offsetTop+80+rates.scrollHeight))){
        navs.forEach(e => {
            e.classList.remove("active")
        });
        navs[3].classList.add("active")
    } 
    if((scrollY>=about.offsetTop+80)){
        navs.forEach(e => {
            e.classList.remove("active")
        });
        navs[4].classList.add("active")
    }

}
