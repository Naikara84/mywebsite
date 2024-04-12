let header =document.querySelector('header');
let menu =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');
let popup = document.getElementById('.popup')

window.addEventListener('scroll', ()=> {
    header.classList.toggle('shadow',window.scrollY >0);
});
menu.onclick =() =>{
    navbar.classList.toggle('active');
}
window.onscroll =() =>{
    navbar.classList.remove('active');
}

function openPopup() {
    popup.classList.add('open-popup')
}
function closePopup() {
    popup.classList.remove('open-popup')
}

var typingEffect = new Typed(".typedText",{
    strings:["Software Developer","Designer", "Illustrator"],
    loop:true,
    typeSpeed:100,
    backSpeed:80,
    backDelay:2000,

});

const sr = ScrollReveal({
    origin:"top",
    distance:"80px",
    duration: "2000",
    reset: "true",

});
sr.reveal(".social-icons", {});
sr.reveal(".featured-name", {delay: 200});
sr.reveal(".hello", {delay: 200});
sr.reveal(".featured-text-info", {delay: 200});
sr.reveal(".featured-image", {delay: 200});
sr.reveal(".heading", {delay: 200});
sr.reveal(".sevices-content", {interval: 200});


const srLeft = ScrollReveal({
    origin:"left",
    distance:"80px",
    duration:2000,
    reset:true
});

srLeft.reveal(".about-container", {delay: 200});
srLeft.reveal(".contact-form", {delay: 100});

const srRight = ScrollReveal({
    origin:"right",
    distance:"80px",
    duration:2000,
    reset:true
});

srRight.reveal(".portfolio-content", {delay: 200});
srRight.reveal(".skill", {delay: 100});

