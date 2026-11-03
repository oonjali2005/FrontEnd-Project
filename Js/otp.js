const inputs = document.querySelectorAll(".otp-inputs input");
const savedOTP = localStorage.getItem("otp");
const mobile = localStorage.getItem("mobile");
document.getElementById("mobileNumber").innerText = "+91 " + mobile;
inputs.forEach((input,index)=>{
    input.addEventListener("input",()=>{
        if(input.value.length==1 && index<inputs.length-1){
            inputs[index+1].focus();
        }
    });
    input.addEventListener("keydown",(e)=>{
        if(e.key==="Backspace" && input.value==="" && index>0){
            inputs[index-1].focus();
        }
    });
});
document.getElementById("verifyBtn").addEventListener("click",()=>{
    let enteredOTP="";
    inputs.forEach(input=>{
        enteredOTP+=input.value;
    });
    if(enteredOTP===savedOTP){
        alert("OTP Verified Successfully ✅");
        window.location.href="home.html";
    }
    else{
        alert("Invalid OTP ❌");
    }
});
document.getElementById("resendOtp").addEventListener("click",(e)=>{
    e.preventDefault();
    const newOTP=Math.floor(100000+Math.random()*900000);
    localStorage.setItem("otp",newOTP);
    alert("New OTP : "+newOTP);
});