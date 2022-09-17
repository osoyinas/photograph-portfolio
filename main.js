
let lastScroll=0;
window.addEventListener("scroll",()=>{
    currentScroll=window.scrollY;
    if(currentScroll<=0){
        nav.classList.remove("scroll-up");
    }
    if(currentScroll>lastScroll && !nav.classList.contains("scroll-down")){
        nav.removeAttribute("data-aos");
        nav.classList.add("scroll-down");
        nav.classList.remove("scroll-up");   
    }
    if(currentScroll<lastScroll && nav.classList.contains("scroll-down")){
        nav.classList.remove("scroll-down");
        nav.classList.add("scroll-up");
    
    }
    lastScroll=currentScroll;
});
const container=document.querySelector(".containerSabermas")
const btnSaberM=document.querySelector(".sabermasBtn")
btnSaberM.addEventListener('mouseenter',()=>{
    container.classList.add("levitate");
});
btnSaberM.addEventListener('mouseout',()=>{
    container.classList.remove("levitate");
});

let icon = document.querySelector(".menu_icon");
let menu = document.querySelector(".menu");

icon.addEventListener("click", () => {
  icon.classList.toggle("clicked");
  menu.classList.toggle("displayMenu");

});