//Brand animation

var brand = document.querySelector(".navbar-brand");

brand.addEventListener("mouseover", function () {
    let intero = document.querySelector(".interogation-mark");
    intero.style.transform = "rotate(0.5turn)";
    intero.style.transition = "transform 400ms";
    brand.style.transform = "scale(1.1)";
    brand.style.transition = " transform 400ms";
});

brand.addEventListener("mouseout", function () {
    let intero = document.querySelector(".interogation-mark");
    intero.style.transform = "rotate(0turn)";
    intero.style.transition = "transform 400ms";
    brand.style.transform = "scale(1)";
    brand.style.transition = " transform 400ms";
});

//navbar animation on scroll
$(function () {
    var scroll = $(document).scrollTop();
    var navheight = $(".navbar").outerHeight();
    $(window).scroll(function () {
        var scrolled = $(document).scrollTop();
        if (scrolled > 1) {
            $(".navbar").addClass("isVisible");
        } else {
            $(".navbar").removeClass("isVisible");
        }
        if (scrolled > navheight) {
            $(".navbar").addClass("animate");
        } else {
            $(".navbar").removeClass("animate");
        }

        if (scrolled > scroll) {
            $(".navbar").removeClass("sticky");
        } else {
            $(".navbar").addClass("sticky");
        }

        scroll = $(document).scrollTop();
    });
});

//symbole animation
