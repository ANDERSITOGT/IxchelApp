// Script for navigation bar
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const Close = document.getElementById('Close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (Close) {
    Close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

// Cambiar la imagen grande con las miniaturas (solo si existen)
const mainImg = document.getElementById("mainImg");
const smallImg = document.getElementsByClassName("small-img");

if (mainImg && smallImg.length > 0) {
    Array.from(smallImg).forEach((img) => {
        img.addEventListener("click", () => {
            mainImg.src = img.src;
        });
    });
}

// Slider de la página principal (solo si hay slides)
const slides = document.querySelectorAll('.slide');
const btns = document.querySelectorAll('.btn');
let currentSlide = 1;

if (slides.length > 0 && btns.length > 0) {
    // Navegación manual
    const manualNav = function (manual) {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });

        btns.forEach((btn) => {
            btn.classList.remove('active');
        });

        slides[manual].classList.add('active');
        btns[manual].classList.add('active');
    };

    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            manualNav(i);
            currentSlide = i;
        });
    });

    // Autoplay
    const repeat = function () {
        let i = 1;

        const repeater = () => {
            setTimeout(function () {
                const active = document.querySelectorAll('.slide.active, .btn.active');

                active.forEach((el) => {
                    el.classList.remove('active');
                });

                slides[i].classList.add('active');
                btns[i].classList.add('active');
                i++;

                if (i >= slides.length) {
                    i = 0;
                }

                repeater();
            }, 10000);
        };

        repeater();
    };

    repeat();
}
