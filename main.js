const nav=document.querySelector("nav");
let lastScroll=0;
window.addEventListener("scroll",()=>{
    currentScroll=window.scrollY;
    if(currentScroll<=0){
        nav.classList.remove("scroll-up");
    }
    if(currentScroll>lastScroll && !nav.classList.contains("scroll-down")){
        nav.classList.add("scroll-down");
        nav.classList.add("scroll-up");
        
    }
    if(currentScroll<lastScroll && nav.classList.contains("scroll-down")){
        nav.classList.remove("scroll-down");
        nav.classList.add("scroll-up");
    
    }


    lastScroll=currentScroll;
})