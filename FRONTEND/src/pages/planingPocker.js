
window.onload=function(){
    let imgs=document.querySelectorAll(".wrapper");
    for ( let img of imgs){
        img.style.width="20%";
        img.style.height="20%";
        img.addEventListener("click",function(){
            document.querySelector(".cara img").setAttribute("src",this.getAttribute("src"));
        });
    }
}
