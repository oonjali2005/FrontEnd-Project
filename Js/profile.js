// Get Elements

const profileImage = document.getElementById("profileImage");
const imageUpload = document.getElementById("imageUpload");

const nameInput = document.getElementById("name");
const mobileInput = document.getElementById("mobile");
const emailInput = document.getElementById("email");
const addressInput = document.getElementById("address");

const username = document.getElementById("username");
const userEmail = document.getElementById("userEmail");

const editBtn = document.getElementById("editBtn");
const saveBtn = document.getElementById("saveBtn");


// -------------------------
// Load Saved Data
// -------------------------

window.onload = function () {

    if(localStorage.getItem("profileName")){
        nameInput.value = localStorage.getItem("profileName");
        username.innerText = localStorage.getItem("profileName");
    }

    if(localStorage.getItem("profileMobile")){
        mobileInput.value = localStorage.getItem("profileMobile");
    }

    if(localStorage.getItem("profileEmail")){
        emailInput.value = localStorage.getItem("profileEmail");
        userEmail.innerText = localStorage.getItem("profileEmail");
    }

    if(localStorage.getItem("profileAddress")){
        addressInput.value = localStorage.getItem("profileAddress");
    }

    if(localStorage.getItem("profileImage")){
        profileImage.src = localStorage.getItem("profileImage");
    }

};


// -------------------------
// Save Profile
// -------------------------

saveBtn.addEventListener("click", function(){

    localStorage.setItem("profileName", nameInput.value);

    localStorage.setItem("profileMobile", mobileInput.value);

    localStorage.setItem("profileEmail", emailInput.value);

    localStorage.setItem("profileAddress", addressInput.value);

    username.innerText = nameInput.value;

    userEmail.innerText = emailInput.value;

    alert("✅ Profile Updated Successfully!");

});


// -------------------------
// Change Profile Picture
// -------------------------

editBtn.addEventListener("click", function(){

    imageUpload.click();

});

imageUpload.addEventListener("change", function(){

    const file = this.files[0];

    if(file){

        const reader = new FileReader();

        reader.onload = function(e){

            profileImage.src = e.target.result;

            localStorage.setItem("profileImage", e.target.result);

        }

        reader.readAsDataURL(file);

    }

});