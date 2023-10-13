console.log("running")
function OTPCode() {
    const otpLength=6;
    let optValue="";
    let i;
    let pin=document.getElementById("otp");
    for (i=0;i<otpLength;)
    {
        optValue +=Math.floor(Math.random()*9)
        i++;

    }
    console.log(optValue);
    pin=optValue;
    return optValue;
    
}