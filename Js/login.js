
const form = document.getElementById("loginForm");
form.addEventListener("submit", function(e){
    e.preventDefault();
    const mobile = document.getElementById("mobile").value;
    if(mobile.length !== 10){
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }
    const otp = Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem("otp", otp);
    localStorage.setItem("mobile", mobile);
    alert("Your OTP is : " + otp);
    window.location.href = "otp.html";

});