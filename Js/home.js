// ===============================
// LOGIN / WELCOME
// ===============================

const mobile = localStorage.getItem("mobile");

if (mobile) {

    alert("Welcome to VYORA!\nLogged in as +91 " + mobile);

    localStorage.removeItem("mobile");

}


// ===============================
// SEARCH VEHICLES
// ===============================

const searchInput = document.querySelector(".search-bar input");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const cards = document.querySelectorAll(".vehicle-card");

        cards.forEach(function (card) {

            const vehicleName =
                card.querySelector("h3").innerText.toLowerCase();

            if (vehicleName.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}


// ===============================
// FEATURED VEHICLE BUTTONS
// ===============================

const buttons = document.querySelectorAll(".vehicle-card button");

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        const card = this.closest(".vehicle-card");

        const vehicleName =
            card.querySelector("h3").innerText;

        // Vehicle key based on name

        let vehicleKey = "";

        if (vehicleName.includes("Creta")) {

            vehicleKey = "creta";

        } else if (vehicleName.includes("R15")) {

            vehicleKey = "r15";

        } else if (vehicleName.includes("Activa")) {

            vehicleKey = "activa";

        }

        if (vehicleKey) {

            window.location.href =
                "details.html?vehicle=" + vehicleKey;

        }

    });

});


// ===============================
// MY BOOKINGS
// ===============================

const bookingBtn = document.querySelector("nav button");

if (bookingBtn) {

    bookingBtn.addEventListener("click", function () {

        alert("No bookings yet!");

    });

}


// ===============================
// SOS BUTTON
// ===============================

const sosBtn = document.getElementById("sosBtn");

const sosPopup = document.getElementById("sosPopup");

const closeSos = document.getElementById("closeSos");


// Open SOS popup

if (sosBtn && sosPopup) {

    sosBtn.addEventListener("click", function () {

        sosPopup.style.display = "flex";

    });

}


// Close SOS popup

if (closeSos && sosPopup) {

    closeSos.addEventListener("click", function () {

        sosPopup.style.display = "none";

    });

}


// Close popup when clicking outside

if (sosPopup) {

    sosPopup.addEventListener("click", function (event) {

        if (event.target === sosPopup) {

            sosPopup.style.display = "none";

        }

    });

}


// ===============================
// CALL EMERGENCY
// ===============================

function callEmergency() {

    alert(
        "🚨 Emergency Support\n\n" +
        "Emergency assistance has been requested!"
    );

}


// ===============================
// SHARE LOCATION
// ===============================

function shareLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            function (position) {

                const latitude = position.coords.latitude;

                const longitude = position.coords.longitude;

                alert(
                    "📍 Location Captured!\n\n" +
                    "Latitude: " + latitude +
                    "\nLongitude: " + longitude
                );

            },

            function () {

                alert(
                    "Unable to access your location."
                );

            }

        );

    } else {

        alert(
            "Location is not supported by this browser."
        );

    }

}