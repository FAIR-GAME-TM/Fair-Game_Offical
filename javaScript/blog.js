let slideIndex = 0;

function showSlides() {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    const slidesToShow = 3;
    const slideWidthPercentage = 100 / slidesToShow;

    slides.style.transform = 'translateX(' + (-slideIndex * slideWidthPercentage) + '%)';

    if (slideIndex >= totalSlides - slidesToShow) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - slidesToShow;
    }
}

function moveSlides(n) {
    slideIndex += n;
    showSlides();
}

showSlides();