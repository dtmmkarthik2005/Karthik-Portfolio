// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// CLOSE MENU AFTER CLICK

document.querySelectorAll("nav ul li a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});

// SCROLL ANIMATION

const sections = document.querySelectorAll(".section");

function revealSections(){

    sections.forEach(section => {

        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < windowHeight - 100){

            section.style.opacity = "1";
            section.style.transform = "translateY(0px)";
        }

    });
}

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "all 1s ease";

});

window.addEventListener("scroll", revealSections);

revealSections();

// TYPING EFFECT

const textArray = [
    "Innovation Engineer",
    "Textile Technology Enthusiast",
    "Marketing Strategist",
    "Creative Project Developer"
];

let arrayIndex = 0;
let textIndex = 0;

const typingElement = document.querySelector(".intro");

function typeText(){

    if(textIndex < textArray[arrayIndex].length){

        typingElement.textContent +=
        textArray[arrayIndex].charAt(textIndex);

        textIndex++;

        setTimeout(typeText,100);

    }else{

        setTimeout(deleteText,1500);
    }
}

function deleteText(){

    if(textIndex > 0){

        typingElement.textContent =
        textArray[arrayIndex].substring(0,textIndex-1);

        textIndex--;

        setTimeout(deleteText,50);

    }else{

        arrayIndex++;

        if(arrayIndex >= textArray.length){
            arrayIndex = 0;
        }

        setTimeout(typeText,500);
    }
}

typingElement.textContent = "";

typeText();