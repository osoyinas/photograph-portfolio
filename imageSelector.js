document.querySelectorAll(".image-container .image img").forEach(image => {
    image.addEventListener('click', () => {
        document.querySelector(".popup-image").style.display = 'block';
        document.querySelector(".popup-image img").src = image.getAttribute('src');
    })
});
document.querySelector(".close").addEventListener('click', () => {
    document.querySelector(".popup-image").style.display = 'none';
});
document.querySelector(".popup-image img").addEventListener('click', () => {
    document.querySelector(".popup-image").style.display = 'none';
})


document.querySelectorAll(".image-container .image").forEach(image=>{
    image.classList.add("fade-in");
})
const faders = document.querySelectorAll('.fade-in');
const sliders=document.querySelectorAll('.slide-in');
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -150px 0px"

};
const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
) {
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider=>{
    appearOnScroll.observe(slider);
})
