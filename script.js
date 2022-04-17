"use strict";

var lastScrollTop = 0;
var navbar = document.getElementById("header");

window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-9.2rem";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});
