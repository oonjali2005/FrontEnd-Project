

// Welcome Message
window.onload = function () {
    console.log("Welcome to VYORA 🚗");
};


const searchBtn = document.querySelector(".filter-box button");

searchBtn.addEventListener("click", function () {

    const vehicle = document.querySelector("select").value;
    const date = document.querySelector('input[type="date"]').value;

    if (date === "") {
        alert("Please select your booking date.");
        return;
    }

    alert("Showing available " + vehicle + " for " + date);

});





const bookButtons=document.querySelectorAll(".book-btn");

bookButtons.forEach(function(btn){

    btn.addEventListener("click",function(){

        const card=this.closest(".vehicle-card");

        const vehicleName=card.querySelector("h3").innerText;

        const price=card.querySelector("h4").innerText;

        localStorage.setItem("vehicleName",vehicleName);
        localStorage.setItem("vehiclePrice",price);

        window.location.href="booking.html";

    });

});


const searchInput=document.querySelector(".search-bar input");

searchInput.addEventListener("keyup",function(){

    let value=searchInput.value.toLowerCase();

    let cards=document.querySelectorAll(".vehicle-card");

    cards.forEach(function(card){

        let name=card.querySelector("h3").innerText.toLowerCase();

        if(name.includes(value)){

            card.style.display="block";

        }

        else{

            card.style.display="none";

        }

    });

});


const filter=document.querySelector(".filter-box select");

filter.addEventListener("change",function(){

    const value=this.value.toLowerCase();

    const cards=document.querySelectorAll(".vehicle-card");

    cards.forEach(function(card){

        const name=card.querySelector("h3").innerText.toLowerCase();

        if(value==="all vehicles"){

            card.style.display="block";

        }

        else if(name.includes("creta") || name.includes("seltos")){

            if(value==="cars")
                card.style.display="block";
            else
                card.style.display="none";

        }

        else if(name.includes("r15") || name.includes("duke")){

            if(value==="bikes")
                card.style.display="block";
            else
                card.style.display="none";

        }

        else{

            if(value==="scooters")
                card.style.display="block";
            else
                card.style.display="none";

        }

    });

});