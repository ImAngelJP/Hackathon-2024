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

let slideBlogIndex = 0;

const showSlidesBlog = (n) => {
    const slides = document.querySelectorAll(".carousel-blog-slide");
    if (n >= slides.length) {
        slideBlogIndex = 0;
    }
    if (n < 0) {
        slideBlogIndex = slides.length - 1;
    }
    slides.forEach((slide, index) => {
        slide.style.display = "none";
    });
    slides[slideBlogIndex].style.display = "block";
}

const nextSlideBlog = () => {
    showSlidesBlog(++slideBlogIndex);
}

const prevSlideBlog = () => {
    showSlidesBlog(--slideBlogIndex);
}

document.querySelector(".carousel-next").addEventListener("click", nextSlide);
document.querySelector(".carousel-prev").addEventListener("click", prevSlide);
document.querySelector(".carousel-blog-next").addEventListener("click", nextSlideBlog);
document.querySelector(".carousel-blog-prev").addEventListener("click", prevSlideBlog);

showSlides(slideIndex);
showSlidesBlog(slideBlogIndex);
