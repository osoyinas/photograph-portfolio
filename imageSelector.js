document.querySelectorAll(".image-container .image img").forEach(image => {
    image.addEventListener('click',() => {
        document.querySelector(".popup-image").style.display = 'block';
        document.querySelector(".popup-image img").src = image.getAttribute('src');
    }) 
});
document.querySelector(".close").addEventListener('click',() => {
    document.querySelector(".popup-image").style.display = 'none';
});
document.querySelector(".popup-image img").addEventListener('click',() => {
    document.querySelector(".popup-image").style.display = 'none';
})