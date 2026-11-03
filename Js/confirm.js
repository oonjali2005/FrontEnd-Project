document.getElementById("vehicle").innerHTML =
localStorage.getItem("vehicleName");

document.getElementById("price").innerHTML =
"₹" + localStorage.getItem("vehiclePrice") + " / Hour";

document.getElementById("pickup").innerHTML =
localStorage.getItem("pickupDate");

document.getElementById("return").innerHTML =
localStorage.getItem("returnDate");