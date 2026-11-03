// ===============================
// CONTACT PAGE - VYORA
// ===============================

// Contact Form

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();

    if(name==="" || email==="" || subject==="" || message===""){

        alert("Please fill all the fields.");

        return;

    }

    alert(
        "✅ Message Sent Successfully!\n\n" +
        "Thank you " + name + ".\n" +
        "Our team will contact you soon."
    );

    form.reset();

});

// ===============================
// INPUT ANIMATION
// ===============================

const inputs = document.querySelectorAll("input, textarea");

inputs.forEach((input)=>{

    input.addEventListener("focus",()=>{

        input.style.transform="scale(1.02)";

    });

    input.addEventListener("blur",()=>{

        input.style.transform="scale(1)";

    });

});

// ===============================
// SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(

".contact-info,.contact-form,.map"

);

function reveal(){

    revealElements.forEach((element)=>{

        const top = element.getBoundingClientRect().top;

        if(top < window.innerHeight-120){

            element.style.opacity="1";

            element.style.transform="translateY(0)";

        }

    });

}

revealElements.forEach((element)=>{

    element.style.opacity="0";

    element.style.transform="translateY(60px)";

    element.style.transition=".8s ease";

});

window.addEventListener("scroll",reveal);

reveal();

// ===============================
// ICON HOVER EFFECT
// ===============================

const icons = document.querySelectorAll(".info i");

icons.forEach((icon)=>{

    icon.addEventListener("mouseenter",()=>{

        icon.style.transform="rotate(360deg) scale(1.1)";

        icon.style.transition=".5s";

    });

    icon.addEventListener("mouseleave",()=>{

        icon.style.transform="rotate(0deg) scale(1)";

    });

});

// ===============================
// ACTIVE NAV LINK
// ===============================

const navLinks = document.querySelectorAll(".navbar ul li a");

navLinks.forEach((link)=>{

    link.addEventListener("click",function(){

        navLinks.forEach((item)=>{

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});

// ===============================
// PAGE LOADED
// ===============================

window.onload = ()=>{

    console.log("Welcome to VYORA Contact Page 🚗");

};