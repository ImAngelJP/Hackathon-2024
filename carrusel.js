let slideIndex = 0;

const showSlides = (n) => {
    const slides = document.querySelectorAll(".carousel-slide");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide, index) => {
        slide.style.display = "none";
    });
    slides[slideIndex].style.display = "block";
}

const nextSlide = () => {
    showSlides(++slideIndex);
}

const prevSlide = () => {
    showSlides(--slideIndex);
}

document.querySelector(".carousel-next").addEventListener("click", nextSlide);
document.querySelector(".carousel-prev").addEventListener("click", prevSlide);

showSlides(slideIndex);
