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
form.addEventListener("click", async (e) => {
    e.preventDefault();
    var name = document.querySelector(".form form input[name='name']");
    var email = document.querySelector(".form form input[name='email']");
    var message = document.querySelector(".form form textarea[name='message']");
    var formData = new FormData();
    formData.append('name', name.value);
    formData.append('email', email.value);
    formData.append('message', message.value);
    const response = await fetch('./assests/php/form.php',{
                    method:"POST",
                    // headers:{
                    //     'Content-Type': 'application/json',
                    //     'Accept': 'application/json'
                    // },
                    body: formData
                })
        .then(res => res.json())
        .then(data => {
            var modal = document.querySelector(".modal");
            var modalBtn = modal.querySelector("button");
            modal.querySelector("h3").innerText = data["res"];
            modal.querySelector("p").innerText = data["content"];
            modal.classList.add("show", data["res"]);
            modalBtn.addEventListener("click", () => {
                modal.classList.remove("show", data["res"]);
            });
            if(data["res"]=="Success"){
                name.value="";
                email.value="";
                message.value="";
            }
        })
        .catch((err) => console.log(err));
});

///////////////////////////////////////

var navs = document.querySelectorAll("header .cont div ul li");

var home = document.querySelector(".landing"),
    features = document.querySelector(".features"),
    portfolio = document.querySelector(".portfolio"),
    contact = document.querySelector(".contact"),
    policies = document.querySelector(".policies"),
    rates = document.querySelector(".rates"),
    about = document.querySelector(".about");

window.onscroll = () => {
    changeNavs = (n) => {
        navs.forEach((e) => {
            e.classList.remove("active");
        });
        navs[n].classList.add("active");
    };
    if (
        scrollY >= home.offsetTop - 200 &&
        scrollY <= features.offsetTop + features.scrollHeight
    ) {
        changeNavs(0);
    }
    if (
        scrollY >= portfolio.offsetTop - 200 &&
        scrollY <= portfolio.offsetTop + portfolio.scrollHeight
    ) {
        changeNavs(1);
    }
    if (
        scrollY >= contact.offsetTop - 200 &&
        scrollY <= policies.offsetTop + policies.scrollHeight
    ) {
        changeNavs(2);
    }
    if (
        scrollY >= rates.offsetTop - 200 &&
        scrollY <= rates.offsetTop + rates.scrollHeight
    ) {
        changeNavs(3);
    }
    if (scrollY >= about.offsetTop - 200) {
        changeNavs(4);
    }
};
