// Nav
let links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
    })
});



