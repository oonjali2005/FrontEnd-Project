// ===========================
// COUNTDOWN TIMER
// ===========================

let hours = 2;
let minutes = 12;
let seconds = 35;

const timer = document.getElementById("countdown");

setInterval(() => {

    if (seconds > 0) {
        seconds--;
    } else {

        seconds = 59;

        if (minutes > 0) {
            minutes--;
        } else {

            minutes = 59;

            if (hours > 0) {
                hours--;
            }

        }

    }

    timer.innerHTML =
        String(hours).padStart(2, "0") +
        " : " +
        String(minutes).padStart(2, "0") +
        " : " +
        String(seconds).padStart(2, "0");

}, 1000);

// ===========================
// COPY COUPON
// ===========================

const copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach((button) => {

    button.addEventListener("click", function () {

        const coupon = this.previousElementSibling.innerText
            .replace("Coupon :", "")
            .trim();

        navigator.clipboard.writeText(coupon);

        this.innerHTML = "✅ Copied";

        this.style.background = "#4CAF50";
        this.style.color = "#fff";

        setTimeout(() => {

            this.innerHTML = "Copy Coupon";

            this.style.background = "#FFC107";
            this.style.color = "#000";

        }, 2000);

    });

});

// ===========================
// BOOK NOW BUTTON
// ===========================

const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach((button) => {

    button.addEventListener("click", () => {

        window.location.href = "explore.html";

    });

});

// ===========================
// OFFER CARD HOVER EFFECT
// ===========================

const cards = document.querySelectorAll(".offer-card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// ===========================
// SCROLL ANIMATION
// ===========================

window.addEventListener("scroll", () => {

    cards.forEach((card) => {

        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

});

// Initial State
cards.forEach((card) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.6s";

});

// ===========================
// PAGE LOADED
// ===========================

window.onload = () => {

    console.log("Welcome to VYORA Offers Page 🚗");

};