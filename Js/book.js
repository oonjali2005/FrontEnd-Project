

const vehicles = {

    creta: {
        name: "Hyundai Creta",
        price: 250,
        image: "../assets/hyundai.webp"
    },

    seltos: {
        name: "Kia Seltos",
        price: 300,
        image: "../assets/kia.avif"
    },

    r15: {
        name: "Yamaha R15 V4",
        price: 120,
        image: "../assets/yr15.jpg"
    },

    duke: {
        name: "KTM Duke 390",
        price: 150,
        image: "../assets/ktm duke.jpg"
    },

    activa: {
        name: "Honda Activa 6G",
        price: 80,
        image: "../assets/scooty.jpg"
    },

    ntorq: {
        name: "TVS Ntorq 125",
        price: 90,
        image: "../assets/tvs.webp"
    }

};


const params = new URLSearchParams(window.location.search);

const vehicleKey = params.get("vehicle");

const vehicle = vehicles[vehicleKey];


if(vehicle){

    document.getElementById("vehicleImage").src = vehicle.image;

    document.getElementById("vehicleName").innerHTML = vehicle.name;

    document.getElementById("vehiclePrice").innerHTML =
    "₹" + vehicle.price + " / Hour";

    document.getElementById("summaryVehicle").innerHTML =
    vehicle.name;

    document.getElementById("summaryPrice").innerHTML =
    "₹" + vehicle.price + " / Hour";

}


const pickup = document.getElementById("pickupDate");

const drop = document.getElementById("returnDate");

function calculateAmount(){

    if(pickup.value && drop.value){

        let start = new Date(pickup.value);

        let end = new Date(drop.value);

        let days = (end - start) / (1000*60*60*24);

        if(days < 1){

            days = 1;

        }

        let total = days * 24 * vehicle.price;

        document.getElementById("totalAmount").innerHTML =
        "₹" + total;

    }

}

pickup.addEventListener("change",calculateAmount);

drop.addEventListener("change",calculateAmount);


document.getElementById("confirmBtn").addEventListener("click", function () {

    if(vehicle){

        localStorage.setItem("vehicleName", vehicle.name);
        localStorage.setItem("vehiclePrice", vehicle.price);

        localStorage.setItem("pickupDate",
            document.getElementById("pickupDate").value);

        localStorage.setItem("returnDate",
            document.getElementById("returnDate").value);

        window.location.href = "confirm.html";
    }

});