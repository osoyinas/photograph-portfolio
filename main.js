
let lastScroll = 0;
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
const container = document.querySelector(".containerSabermas")
const btnSaberM = document.querySelector(".sabermasBtn")
btnSaberM.addEventListener('mouseenter', () => {
    container.classList.add("levitate");
});
btnSaberM.addEventListener('mouseout', () => {
    container.classList.remove("levitate");
});
let blocked = false;
let icon = document.querySelector(".menu_icon");
let menu = document.querySelector(".menu");
let options = document.querySelectorAll(".option");
icon.addEventListener("click", () => {
    icon.classList.toggle("clicked");
    menu.classList.toggle("displayMenu");
    if (blocked == true) {
        enableScroll();
    }
    else {
        disableScroll();
        blocked = true;
    }

});

options.forEach((option) => {
    option.addEventListener('click', () => {
        icon.classList.toggle("clicked");
        menu.classList.toggle("displayMenu");
        enableScroll();
    })
})

// FUNCTIONS
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

// modern Chrome requires { passive: false } when adding event
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