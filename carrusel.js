let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");

const showSlides = (n) => {
    slides.forEach((slide, index) => {
        slide.classList.remove('active'); 
    });
    slideIndex = (n + slides.length) % slides.length; 
    slides[slideIndex].classList.add('active'); 
};

const nextSlide = () => {
    showSlides(slideIndex + 1);
};

const prevSlide = () => {
    showSlides(slideIndex - 1);
};

document.querySelector(".carousel-next").addEventListener("click", nextSlide);
document.querySelector(".carousel-prev").addEventListener("click", prevSlide);

showSlides(slideIndex);

// Para el carrusel de blogs
let slideBlogIndex = 0;
const blogSlides = document.querySelectorAll(".carousel-blog-slide");

const showBlogSlides = (n) => {
    blogSlides.forEach((slide, index) => {
        slide.classList.remove('active');
    });
    slideBlogIndex = (n + blogSlides.length) % blogSlides.length;
    blogSlides[slideBlogIndex].classList.add('active');
};

const nextBlogSlide = () => {
    showBlogSlides(slideBlogIndex + 1);
};

const prevBlogSlide = () => {
    showBlogSlides(slideBlogIndex - 1);
};

document.querySelector(".carousel-blog-next").addEventListener("click", nextBlogSlide);
document.querySelector(".carousel-blog-prev").addEventListener("click", prevBlogSlide);

showBlogSlides(slideBlogIndex);