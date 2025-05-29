document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.what-content-wrap');
    const cards = Array.from(container.querySelectorAll('.what-card-1'));
    const prevBtn = document.querySelector('.what-button-col .what-btn-1');
    const nextBtn = document.querySelector('.what-button-col .what-btn-2');
    let flipped = false;

    function swapCards() {
        if (flipped) {
            container.insertBefore(cards[1], cards[0]);
        } else {
            container.insertBefore(cards[0], cards[1]);
        }
    }

    // Всегда показываем обе карточки
    cards[0].style.display = 'block';
    cards[1].style.display = 'block';

    swapCards();

    function onClick() {
        flipped = !flipped;
        swapCards();
    }

    if (prevBtn) prevBtn.addEventListener('click', onClick);
    if (nextBtn) nextBtn.addEventListener('click', onClick);
});