"use strict";

const slider = function () {
    //section slider 1 col
    const slides = document.querySelectorAll(".slide-1");
    const dotContainer = document.querySelector(".dots");
    const btnLeft_1 = document.querySelector(".slider__btn--left-1");
    const btnRight_1 = document.querySelector(".slider__btn--right-1");

    //section slider 2 cols
    const slidesLeft = document.querySelectorAll(".slide--left");
    const slidesRight = document.querySelectorAll(".slide--right");
    const btnLeft = document.querySelector(".slider__btn--left");
    const btnRight = document.querySelector(".slider__btn--right");

    let curSlide2cols = 0;
    let curSlide1col = 0;
    //length of 1 col
    const maxSlide1col = slides.length;
    //length slide of 2 cols
    const maxSlide2cols = slidesLeft.length;

    // Functions
    //1 col
    const createDots = function () {
        slides.forEach(function (_, i) {
            dotContainer.insertAdjacentHTML(
                "beforeend",
                `<button class="dots__dot" data-slide="${i}"></button>`
            );
        });
    };

    const activateDot = function (slide) {
        document
            .querySelectorAll(".dots__dot")
            .forEach((dot) => dot.classList.remove("dots__dot--active"));

        document
            .querySelector(`.dots__dot[data-slide="${slide}"]`)
            .classList.add("dots__dot--active");
    };

    // all (1 col/ 2 cols)

    const goToSlide = function (curSlide, optionSlide) {
        optionSlide.forEach(
            (s, i) =>
                (s.style.transform = `translateX(${100 * (i - curSlide)}%`)
        );
    };

    function numberCurSlideNext(curSlide, lengthSlide) {
        if (curSlide === lengthSlide - 1) {
            curSlide = 0;
        } else {
            curSlide++;
        }
        return curSlide;
    }

    function numberCurSlideBack(curSlide, lengthSlide) {
        if (curSlide === 0) {
            curSlide = lengthSlide - 1;
        } else {
            curSlide--;
        }
        return curSlide;
    }

    //slide of section 1 col
    const nextSlide1col = function () {
        curSlide1col = numberCurSlideNext(curSlide1col, maxSlide1col);
        goToSlide(curSlide1col, slides);
        activateDot(curSlide1col);
    };

    const prevSlide1col = function () {
        curSlide1col = numberCurSlideBack(curSlide1col, maxSlide1col);
        goToSlide(curSlide1col, slides);
        activateDot(curSlide1col);
    };

    //next slide of section 2 cols
    const nextSlide2cols = function () {
        curSlide2cols = numberCurSlideNext(curSlide2cols, maxSlide2cols);
        goToSlide(curSlide2cols, slidesLeft);
    };

    const prevSlide2cols = function () {
        curSlide2cols = numberCurSlideBack(curSlide2cols, maxSlide2cols);

        goToSlide(curSlide2cols, slidesLeft);
    };

    const init = function () {
        goToSlide(0, slides);
        goToSlide(0, slidesLeft);
        createDots();
        activateDot(0);
    };
    init();

    // Event handlers
    //section 1 col
    btnRight_1.addEventListener("click", nextSlide1col);
    btnLeft_1.addEventListener("click", prevSlide1col);
    dotContainer.addEventListener("click", function (e) {
        if (e.target.classList.contains("dots__dot")) {
            const { slide } = e.target.dataset;
            goToSlide(slide, slides);
            activateDot(slide);
        }
    });

    //section 2 cols
    btnRight.addEventListener("click", nextSlide2cols);
    btnLeft.addEventListener("click", prevSlide2cols);
    slidesRight.forEach((mov, i) => {
        mov.addEventListener("click", function (e) {
            if (e.target.classList.contains("slide--right")) {
                const { slideright } = e.target.dataset;
                goToSlide(slideright, slidesLeft);
            }
        });
    });
};
slider();
