

function toggel(){
    const hidden=document.getElementById("hidden");
    if(hidden.classList.contains("hidden")){
        hidden.classList.replace("hidden","block");
    }else if(hidden.classList.contains("block")){
        hidden.classList.replace("block","hidden");
    }
}
const menu=document.getElementById("menu").addEventListener("click",toggel);

const cancel=document.getElementById("cancel").addEventListener("click",toggel);