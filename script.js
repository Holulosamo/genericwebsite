const d = document,
    $menuBtn = d.querySelector('.menu-button'),
    $navBar = d.querySelector('.nav'),
    $menuItem = d.querySelectorAll('.menu__link');

d.addEventListener('click', (e) =>{
    if(e.target.matches(".button") || e.target.matches(".menu-button")){
        $navBar.classList.toggle("nav-show");
        $menuItem.forEach((el) => {
          el.classList.toggle("menu__link-show");
        });
    }

    if(e.target.matches(".menu__link") && $navBar.classList.contains('nav-show')){
        $navBar.classList.remove('nav-show');
        $menuItem.forEach((el) => {
          el.classList.remove("menu__link-show");
        });
    }
});

