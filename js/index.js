// Nav
let links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
    })
});

links.forEach(link => {
    link.addEventListener(('mouseover'), (event) => {
        link.style.color = "royalblue";
    })
});

// Logo

let logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', (event) => {
    logo.style.backgroundImage = "-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) )";
    logo.style.backgroundImage = "gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) )";
    logo.style.color = "transparent";
    logo.style.WebkitBackgroundClip = "text";
    logo.style.backgroundClip = "text";
});


