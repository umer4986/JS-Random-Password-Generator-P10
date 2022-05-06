const generateEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");


generateEl.addEventListener("click", ()=>{
    createPassword(); 
});

copyIconEl.addEventListener("click", () => {
   copyPassword();
   if(inputEl.value){
        alertContainerEl.classList.remove("active");
        
        setTimeout(()=>{
            alertContainerEl.classList.add("active");
        },2000);
    }
});

function createPassword(){
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?:{}[";
    const passLen = 14;
    let pass = "";
        
        for(let i = 0 ; i < passLen ; i++){
            const randNum = Math.floor(Math.random() * chars.length);
            pass += chars.substring(randNum, randNum+1);
        }

        inputEl.value = pass;
        alertContainerEl.innerText = pass + " Copied! =)";
}

function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0,9999);
    navigator.clipboard.writeText(inputEl.value);   
}