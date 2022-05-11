let slideIndex = 1;
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}


function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".container");
    let testmonial = document.querySelectorAll(".container__text-testmonial")[1];
    testmonial.style.maxWidth = "63.5rem";

    if(n > slides.length) {slideIndex = 1}
    if(n < 1) {slideIndex = slides.length}

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "flex";
}
