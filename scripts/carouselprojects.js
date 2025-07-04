document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".projects .carousel-track");
    const cards = document.querySelectorAll(".projects .carousel-track .card");
    const nextBtn = document.querySelector(".projects .next");
    const prevBtn = document.querySelector(".projects .prev");
    const dots = document.querySelectorAll(".projects .dot");

    let currentIndex = 0;
    const visibleCards = 3;

    function updateCarousel(index) {
        const cardWidth = cards[0].offsetWidth + 24; // +20 por margen entre tarjetas
        const maxIndex = Math.ceil(cards.length / visibleCards) - 1;

        if (index > maxIndex) {
            index = 0;
        }
        if (index < 0) {
            index = maxIndex;
        }

        track.style.transform = `translateX(-${index * visibleCards * cardWidth}px)`;

        dots.forEach((dot) => dot.classList.remove("active"));
        if (dots[index]) dots[index].classList.add("active");

        currentIndex = index;
    }

    nextBtn.addEventListener("click", () => {
        updateCarousel(currentIndex + 1);
    });

    prevBtn.addEventListener("click", () => {
        updateCarousel(currentIndex - 1);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => updateCarousel(index));
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") {
            updateCarousel(currentIndex + 1);
        } else if (e.key === "ArrowLeft") {
            updateCarousel(currentIndex - 1);
        }
    });

    updateCarousel(0); // ✅ Inicializa correctamente al cargar
});

