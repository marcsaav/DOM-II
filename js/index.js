
// General Styles

let header = document.querySelector('.main-navigation');
document.addEventListener('wheel', (event) => {
    header.style.height = "10vh";
})

// Nav
let links = document.querySelectorAll('.nav-link');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
    })
});

links.forEach(link => {
    link.addEventListener('mouseover', (event) => {
        link.style.color = "royalblue";
    })
});


links[1].addEventListener('click', (event) => {
    event.stopPropagation();
    alert(`Sorry: Under Construction!`);
});
links[2].addEventListener('click', (event) => {
    event.stopPropagation();
    alert(`Sorry: Under Construction!`);
});
links[3].addEventListener('click', (event) => {
    event.stopPropagation();
    alert(`Sorry: Under Construction!`);
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

// Main Section

let mainContent = document.querySelectorAll('.content-section');
mainContent[0].addEventListener('mouseover', (event) => {
    mainContent[0].style.backgroundColor = "#F9E3CD";
});
mainContent[1].addEventListener('mouseover', (event) => {
    mainContent[1].style.backgroundColor = "#ADEEF8";
});

let destinationP = document.querySelectorAll('.destination p');
destinationP.forEach(destination => {
    destination.addEventListener('mouseover', (event) => {
        destination.style.color = "#4FB0D0";
    })
});

let destinationT = document.querySelectorAll('.destination h4');
destinationT.forEach(destination => {
    destination.addEventListener('mouseover', (event) => {
        destination.style.backgroundImage = "-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) )";
        destination.style.backgroundImage = "gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) )";
        destination.style.color = "transparent";
        destination.style.WebkitBackgroundClip = "text";
        destination.style.backgroundClip = "text";
    })
});

window.addEventListener('keydown', (event) => {
    if(event.key === "Tab") {
        alert(`You win the easter egg challenge!`);
    }
})

