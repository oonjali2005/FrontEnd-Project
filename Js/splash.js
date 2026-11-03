setTimeout(() => {
    const splash = document.querySelector(".splash");
    splash.style.opacity = "0";
    setTimeout(() => {
        window.location.href = "login.html";
    }, 800);
}, 3000);