// ===========================
// ABOUT PAGE JAVASCRIPT
// ===========================

// Welcome Message

window.onload = () => {

    console.log("Welcome to VYORA About Page 🚗");

};

// ===========================
// SMOOTH SCROLL ANIMATION
// ===========================

const sections = document.querySelectorAll(
".story, .mission, .stats, .values, .cta"
);

const revealSection = () => {

    sections.forEach((section) => {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 120) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

};

sections.forEach((section) => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "0.8s ease";

});

window.addEventListener("scroll", revealSection);

revealSection();

// ===========================
// STATS COUNTER ANIMATION
// ===========================

const counters = document.querySelectorAll(".stat-box h1");

counters.forEach((counter) => {

    const text = counter.innerText;

    if (text.includes("K+")) {

        const target = parseInt(text);

        let count = 0;

        const updateCounter = () => {

            if (count < target) {

                count++;

                counter.innerText = count + "K+";

                setTimeout(updateCounter, 150);

            }

        };

        updateCounter();

    }

});

// ===========================
// MISSION CARD EFFECT
// ===========================

const missionCards = document.querySelectorAll(".mission-card");

missionCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.05)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// ===========================
// VALUE CARD EFFECT
// ===========================

const valueCards = document.querySelectorAll(".value-card");

valueCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) rotate(2deg)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) rotate(0deg)";

    });

});

// ===========================
// CTA BUTTON
// ===========================

const exploreBtn = document.querySelector(".cta button");

exploreBtn.addEventListener("click", () => {

    window.location.href = "explore.html";

});

// ===========================
// NAVBAR ACTIVE LINK
// ===========================

const navLinks = document.querySelectorAll(".navbar ul li a");

navLinks.forEach((link) => {

    link.addEventListener("click", function () {

        navLinks.forEach((item) => {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});