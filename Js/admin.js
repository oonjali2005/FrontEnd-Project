const adminLoginForm = document.getElementById("adminLoginForm");

adminLoginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email =
        document.getElementById("adminEmail").value;

    const password =
        document.getElementById("adminPassword").value;


    // Demo Admin Credentials

    const adminEmail = "admin@vyora.com";
    const adminPassword = "admin123";


    if (
        email === adminEmail &&
        password === adminPassword
    ) {

        localStorage.setItem("adminLoggedIn", "true");

        alert("Admin Login Successful!");

        window.location.href = "admindash.html";

    }

    else {

        alert("Invalid Admin Email or Password.");

    }

});