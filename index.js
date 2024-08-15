document.addEventListener("DOMContentLoaded", () => {
    
    const qrcode = new QRCode(document.querySelector(".qrcode"),{
        width:200,
        height:200,

    }); // Initialize QRCode
    const button = document.getElementById("button");
    const input = document.getElementById("input");
    const heading = document.getElementById("heading");
    const savebtn = document.getElementById("savebtn");

    console.log("QRCode initialized:", qrcode);
    console.log("Button element:", button);
    console.log("Input element:", input);
    console.log("Heading element:", heading);

    qrcode.makeCode("Please enter URL before scanning");

    button.addEventListener("click", () => {
        const inputValue = input.value.trim();
        console.log("Button clicked. Input value:", inputValue);
        
        if (inputValue === "") {
            heading.textContent = "Enter some text !";
            console.log("Empty input. Heading updated.");
        } else {
            heading.textContent = "QR Code Created Successfully !"; // Reset heading text
            qrcode.makeCode(inputValue);
            console.log("QR Code generated for input:", inputValue);
        }
    });
    savebtn.addEventListener("click",()=>{
        const canvas = document.querySelector('.qrcode canvas');
        const link = document.createElement('a');
        link.href=canvas.toDataURL('image/png');
        link.download= 'qrcode.png';
        document.body.appendChild(link);
        link.click();
    });
});



