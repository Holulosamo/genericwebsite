const d = document,
    $menuBtn = d.querySelector('.menu-button'),
    $navBar = d.querySelector('.nav'),
    $menuItem = d.querySelectorAll('.menu__link');

$menuBtn.addEventListener('click', (e) =>{
    $navBar.classList.toggle("nav-show");
    $menuItem.forEach(el => {
        el.classList.toggle("menu__link-show");
    })
});