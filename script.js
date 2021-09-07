const d = document,
    menuBtn = d.querySelector('.menu-button'),
    navBar = d.querySelector('.nav');

menuBtn.addEventListener('click', (e) =>{
    navBar.classList.toggle("nav-show");
});