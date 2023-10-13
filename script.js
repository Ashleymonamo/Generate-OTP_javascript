console.log("running")
// let output=document.getElementById("outpt").value;
function OTPCode() {
    let opt=document.getElementById("pin").value
    if (opt=="Alpha-numeric") {
        const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let otp = '';
      let length=6;
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          otp += characters[randomIndex];
        }
        
        document.getElementById("outpt").value=otp;
      console.log(otp);   
    }
    else if (opt=="Numeric")
    {
        const otpLength=6;
        let optValue="";
        let i;
      
        for (i=0;i<otpLength;)
        {
            optValue +=Math.floor(Math.random()*9)
            i++;
    
        }
        document.getElementById("outpt").value=optValue;
        console.log(optValue);
    }
}