const menuBurger = document.querySelector('.nav__burger');

menuBurger.addEventListener('click', function() {
    const navMenuMobile = document.querySelector('.nav__menu-mobile');
    menuBurger.classList.toggle('active');
    navMenuMobile.classList.toggle('active');
});

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2
            },
            900: {
                items: 4
            }
        }
    });
});