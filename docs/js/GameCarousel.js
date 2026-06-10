document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const items = document.querySelectorAll('.game-carousel .game');
    const totalItems = items.length;
    const itemsPerView = 2;

    document.querySelector('.next-button').addEventListener('click', () => {
        if (currentIndex < totalItems - itemsPerView) {
            currentIndex += itemsPerView;
            if (currentIndex > totalItems - itemsPerView) {
                currentIndex = totalItems - itemsPerView;
            }
            updateCarousel();
        }
    });

    document.querySelector('.prev-button').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= itemsPerView;
            if (currentIndex < 0) {
                currentIndex = 0;
            }
            updateCarousel();
        }
    });

    function updateCarousel() {
        const carouselContainer = document.querySelector('.game-carousel');
        const itemStyle = getComputedStyle(items[0]);
        const itemMargin = parseFloat(itemStyle.marginLeft) + parseFloat(itemStyle.marginRight);
        const itemWidth = items[0].offsetWidth + itemMargin;
        const translateXValue = currentIndex * itemWidth;

        carouselContainer.style.transform = `translateX(-${translateXValue}px)`;

        document.querySelector('.prev-button').disabled = currentIndex === 0;
        document.querySelector('.next-button').disabled = currentIndex >= totalItems - itemsPerView;
    }

    // Touch support
    const carouselContainer = document.querySelector('.game-carousel');
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let isDragging = false;

    carouselContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        carouselContainer.style.transition = 'none';
    });

    carouselContainer.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const deltaX = e.touches[0].clientX - startX;
        currentTranslate = prevTranslate + deltaX;
        carouselContainer.style.transform = `translateX(${currentTranslate}px)`;
    });

    carouselContainer.addEventListener('touchend', () => {
        isDragging = false;
        const itemStyle = getComputedStyle(items[0]);
        const itemMargin = parseFloat(itemStyle.marginLeft) + parseFloat(itemStyle.marginRight);
        const itemWidth = items[0].offsetWidth + itemMargin;
        const threshold = itemWidth / 2;
        const movedBy = currentTranslate - prevTranslate;

        if (movedBy > threshold && currentIndex > 0) {
            currentIndex -= itemsPerView;
        } else if (movedBy < -threshold && currentIndex < totalItems - itemsPerView) {
            currentIndex += itemsPerView;
        }

        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex > totalItems - itemsPerView) currentIndex = totalItems - itemsPerView;

        updateCarousel();
        prevTranslate = -currentIndex * itemWidth;
    });

    window.addEventListener('resize', updateCarousel);

    // Initialize
    updateCarousel();
});