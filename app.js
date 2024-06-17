


//payment scetion

const image = document.querySelectorAll(".img");
const payment = document.querySelector(".payment");
const clos = document.querySelector(".close");

image.forEach((value) => {
    value.onclick = (event) => {
        payment.style.display="flex"
        console.log(event)
    
        payment.style.top = event.pageY + "px";
    }
})

clos.addEventListener("click",() => {
    payment.style.display="none"
});


//login page
const login= document.querySelector(".login")
const lodpage = document.querySelector(".lodpage")
const closee = document.querySelector(".closee")
const logbutton = document.querySelector(".logbutton")

login.addEventListener("click",()=>{
    lodpage.style.display="flex"
}) ;

closee.addEventListener("click",()=>{
    lodpage.style.display="none"
});

logbutton.onclick = () => {
    validateForm();
};


//login validation
function validateForm() {
    const form = document.getElementById("myform");
    const emai = document.getElementById("emai").value;
    const pas = document.getElementById("pas").value;

    let ea = document.getElementById("ea");
    let pa = document.getElementById("pa");

    const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailres = false;
    let passres = false;
   
   if( emai === ""){
    ea.innerText = "Please enter email";
   
   }
    else if (!emai.match(emailpattern)) {
         ea.innerText = "Please enter valid email";
    }
    else{
        ea.innerText = "";
        emailres = true;
    }


    if(pas ===""){
        pa.innerText = "Please enter password";
    }
    else if (pas.length < 6) {
        pa.innerText = "Minimum length should be 6 charactor";
    }
    else{
        pa.innerText = "";
        passres = true;
    }
     
    
     if( emailres == true && passres == true){

        lodpage.style.display="none"

        emai.value.innerText ="";
        pas.value.innertext = "";
      
     }
};
