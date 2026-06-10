let slideIndex = 1;

window.openModal = function () { // attach openModal function to window object manually
    document.getElementById("my-modal").style.display = "flex";

    const slides = document.getElementsByClassName("my-slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
};

window.closeModal = function () {
    document.getElementById("my-modal").style.display = "none";
};

window.plusSlides = function (n) {
    showSlides(slideIndex += n);
};

window.currentSlide = function (n) {
    showSlides(slideIndex = n);
};

function showSlides(n) {
    const slides = document.getElementsByClassName("my-slides");

    if (slides.length === 0) return;

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}