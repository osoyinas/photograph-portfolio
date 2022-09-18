// ELEMENTS
const container = document.querySelector(".containerSabermas")
const btnSaberM = document.querySelector(".sabermasBtn")
const icon = document.querySelector(".menu_icon");
const menu = document.querySelector(".menu");
const options = document.querySelectorAll(".option");
const nav = document.querySelector("nav");
const imgs=document.querySelectorAll(".image-container .image img") 
document.querySelector(".popup-image").addEventListener('click', () => {
    document.querySelector(".popup-image").style.display = 'none';
    nav.classList.toggle('hide');
    enableScroll();

});

document.querySelectorAll(".image-container .image").forEach(image => {
    image.classList.add("fade-in");
});
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');
const appearOptions = {
    threshold: 0,
    // rootMargin: "0px 0px -150px 0px"

};
//  VARIABLES
let blocked = false;

let lastScroll = 0;
// ANIMATIONS
// NAV SCROLL ANIMATION
window.addEventListener("scroll", () => {
    currentScroll = window.scrollY;
    if (currentScroll <= 0) {
        nav.classList.remove("scroll-up");
    }
    if (currentScroll > lastScroll && !nav.classList.contains("scroll-down")) {
        nav.removeAttribute("data-aos");
        nav.classList.add("scroll-down");
        nav.classList.remove("scroll-up");
    }
    if (currentScroll < lastScroll && nav.classList.contains("scroll-down")) {
        nav.classList.remove("scroll-down");
        nav.classList.add("scroll-up");

    }
    lastScroll = currentScroll;
});
// LEVITATE
btnSaberM.addEventListener('mouseenter', () => {
    container.classList.add("levitate");
});
btnSaberM.addEventListener('mouseout', () => {
    container.classList.remove("levitate");
});

// EVENTS
icon.addEventListener("click", () => {
    icon.classList.toggle("clicked");
    menu.classList.toggle("displayMenu");

    if (blocked == true) {
        enableScroll();
        blocked=false;
    }
    else {
        disableScroll();
        blocked = true;
    }
});
imgs.forEach(image => {
    image.addEventListener('click', () => {
        document.querySelector(".popup-image").style.display = 'block';
        document.querySelector(".popup-image img").src = image.getAttribute('src');
        nav.classList.toggle('hide');
        disableScroll();
    })
});

// SCROLL BLOCK FOR RESPONSIVE MENU
options.forEach((option) => {
    option.addEventListener('click', () => {
        icon.classList.toggle("clicked");
        menu.classList.toggle("displayMenu");
        enableScroll();
        blocked=false;
    })
})

// OBSERVERS
const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

// SLIDERS & FADERS
faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
})

// FUNCTIONS


function preventDefault(e) {
    e.preventDefault();
}
function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}
var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
    }));
} catch (e) { }

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}