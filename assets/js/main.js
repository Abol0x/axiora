const menuToggle = document.querySelector(".menu-toggle");

const navbar = document.querySelector(".navbar");


menuToggle.addEventListener("click",()=>{

    navbar.classList.toggle("active");

});

const reveals = document.querySelectorAll(".reveal");


window.addEventListener("scroll",()=>{


    reveals.forEach((element)=>{


        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 120;



        if(elementTop < windowHeight - revealPoint){

            element.classList.add("active");

        }


    });

});

const header = document.querySelector(".header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }


});

window.addEventListener("load",()=>{

    const loader = document.querySelector(".loader");


    setTimeout(()=>{

        loader.classList.add("hide");

    },1500);


});