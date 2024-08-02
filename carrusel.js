// Carrusel de Videos
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

const showSlide = (index) => {
    slideIndex = (index + slides.length) % slides.length;
    document.querySelector('.carousel-container').style.transform = `translateX(${-slideIndex * 100}%)`;
};

nextButton.addEventListener('click', () => {
    showSlide(slideIndex + 1);
});

prevButton.addEventListener('click', () => {
    showSlide(slideIndex - 1);
});

showSlide(slideIndex);

// Carrusel de Blogs
let blogSlideIndex = 0;
const blogSlides = document.querySelectorAll('.carousel-blog-slide');
const blogPrevButton = document.querySelector('.carousel-blog-prev');
const blogNextButton = document.querySelector('.carousel-blog-next');

const showBlogSlide = (index) => {
    blogSlideIndex = (index + blogSlides.length) % blogSlides.length;
    document.querySelector('.carousel-blog-container').style.transform = `translateX(${-blogSlideIndex * 100}%)`;
};

blogNextButton.addEventListener('click', () => {
    showBlogSlide(blogSlideIndex + 1);
});

blogPrevButton.addEventListener('click', () => {
    showBlogSlide(blogSlideIndex - 1);
});

showBlogSlide(blogSlideIndex);
