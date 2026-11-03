
const vehicles = {

    creta: {
        name: "Hyundai Creta",
        rating: "4.8",
        price: "₹250 / Hour",
        fuel: "Petrol",
        transmission: "Automatic",
        seats: "5",
        color: "White",
        mileage: "18 km/l",
        location: "Coimbatore",
        image: "../assets/hyundai.webp",
        description: "The Hyundai Creta is a premium SUV with spacious interiors and excellent comfort."
    },

    seltos: {
        name: "Kia Seltos",
        rating: "4.9",
        price: "₹300 / Hour",
        fuel: "Diesel",
        transmission: "Automatic",
        seats: "5",
        color: "Grey",
        mileage: "17 km/l",
        location: "Coimbatore",
        image: "../assets/kia.avif",
        description: "The Kia Seltos offers premium styling and advanced technology."
    },

    r15: {
        name: "Yamaha R15 V4",
        rating: "4.7",
        price: "₹120 / Hour",
        fuel: "Petrol",
        transmission: "Manual",
        seats: "2",
        color: "Blue",
        mileage: "45 km/l",
        location: "Coimbatore",
        image: "../assets/yr15.jpg",
        description: "Yamaha R15 V4 is a high-performance sports bike."
    },

    duke: {
        name: "KTM Duke 390",
        rating: "4.8",
        price: "₹150 / Hour",
        fuel: "Petrol",
        transmission: "Manual",
        seats: "2",
        color: "Orange",
        mileage: "30 km/l",
        location: "Coimbatore",
        image: "../assets/ktm duke.jpg",
        description: "KTM Duke 390 is a powerful street bike."
    },

    activa: {
        name: "Honda Activa 6G",
        rating: "4.6",
        price: "₹80 / Hour",
        fuel: "Petrol",
        transmission: "Automatic",
        seats: "2",
        color: "Blue",
        mileage: "55 km/l",
        location: "Coimbatore",
        image: "../assets/scooty.jpg",
        description: "Honda Activa 6G is perfect for daily commuting."
    },

    ntorq: {
        name: "TVS Ntorq 125",
        rating: "4.7",
        price: "₹90 / Hour",
        fuel: "Petrol",
        transmission: "Automatic",
        seats: "2",
        color: "Grey",
        mileage: "50 km/l",
        location: "Coimbatore",
        image: "../assets/tvs.webp",
        description: "TVS Ntorq 125 is a sporty smart scooter."
    }

};

const params = new URLSearchParams(window.location.search);
const vehicleKey = params.get("vehicle");

console.log("Vehicle Key :", vehicleKey);

const vehicle = vehicles[vehicleKey];

console.log(vehicle);

if (vehicle) {
    document.getElementById("vehicleImage").src = vehicle.image;
    document.getElementById("vehicleName").textContent = vehicle.name;
    document.getElementById("vehicleRating").textContent = vehicle.rating;
    document.getElementById("vehiclePrice").textContent = vehicle.price;
    document.getElementById("vehicleFuel").textContent = vehicle.fuel;
    document.getElementById("vehicleTransmission").textContent = vehicle.transmission;
    document.getElementById("vehicleSeats").textContent = vehicle.seats;
    document.getElementById("vehicleColor").textContent = vehicle.color;
    document.getElementById("vehicleMileage").textContent = vehicle.mileage;
    document.getElementById("vehicleLocation").textContent = vehicle.location;
    document.getElementById("vehicleDescription").textContent = vehicle.description;
} else {
    alert("Vehicle not found!");
}
document.getElementById("bookBtn").onclick = function () {

    if (vehicle) {
       window.location.href = "book.html?vehicle=" + vehicleKey;
    }
};
const img = document.getElementById("vehicleImage");

img.onmouseover = function () {
    img.style.transform = "scale(1.05)";
    img.style.transition = "0.4s";
}

img.onmouseout = function () {
    img.style.transform = "scale(1)";
}