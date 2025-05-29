const burger = document.getElementById('burger');
const headercol = document.querySelector('.header-burger-col');
const headerlist = document.querySelector('.header-list-1');
const burger2 = document.getElementById('burger-1');
const body = document.body;

burger.addEventListener('click', function() {

    if (headercol.style.display === 'flex') {
        headercol.style.display = 'none';
        headerlist.style.display = 'none';
    } else {
        headercol.classList.toggle('open');
        headercol.style.display = 'flex';
        headerlist.style.display = 'flex';
        body.classList.add('no-scroll'); 
    }
});

burger2.addEventListener('click', function() {
    headercol.style.display = 'none';
    headerlist.style.display = 'none';
    body.classList.remove('no-scroll');
});

/*  Slide  */

document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.getElementById('custom-progress');
    const totalWidth = 1300; 
    const slidesWrapper = document.querySelector('.slides-wrapper'); 
    const slides = document.querySelector('.slides');
    const slideCards = document.querySelectorAll('.slide-card');
    const indicators = document.querySelectorAll('.indicator');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    let currentIndex = 0;
    let containerWidth = slidesWrapper.offsetWidth; 
    let initialFillWidth = containerWidth * 0.385; 
    progressBar.style.width = `${Math.min(initialFillWidth, containerWidth)}px`; 

    function updateSlider() {
        const totalSlides = slideCards.length;

        if (totalSlides === 0) {
            progressBar.style.width = "0";
            return;
        }

        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });

        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === totalSlides - 1;

        const progressPercentage = (currentIndex / (totalSlides - 1)) * (containerWidth - initialFillWidth); 
        progressBar.style.transition = "width 1s ease-in-out";
        progressBar.style.width = `${Math.min(initialFillWidth + progressPercentage, containerWidth)}px`; 
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < slideCards.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });

    if (window.innerWidth <= 768) {
        slidesWrapper.style.overflowX = 'auto';
        slidesWrapper.style.scrollBehavior = 'smooth'; 
    }

    let isTouching = false;
    let startX = 0;
    let moveX = 0;
    slidesWrapper.addEventListener('touchstart', (e) => {
        isTouching = true;
        if (e.touches.length === 1) {
            startX = e.touches[0].pageX;
        }
    });

    slidesWrapper.addEventListener('touchmove', (e) => {
        if (!isTouching) return;
        moveX = e.touches[0].pageX;
        const diffX = startX - moveX;
        if (Math.abs(diffX) > 10) {
            const totalSlides = slideCards.length;
            const slideWidth = containerWidth;
            const movePercent = diffX / slideWidth;
            let newIndex = currentIndex - Math.round(movePercent);
            newIndex = Math.max(0, Math.min(totalSlides - 1, newIndex));
            
            if (newIndex !== currentIndex) {
                currentIndex = newIndex;
                updateSlider();
                startX = moveX;
            }
        }
    });

    slidesWrapper.addEventListener('touchend', () => {
        isTouching = false;
    });

    let isMouseDown = false;
    slidesWrapper.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        startX = e.pageX;
    });

    slidesWrapper.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return;
        moveX = e.pageX;
        const diffX = startX - moveX;
        if (Math.abs(diffX) > 10) {
            const totalSlides = slideCards.length;
            const slideWidth = containerWidth;
            const movePercent = diffX / slideWidth;
            let newIndex = currentIndex - Math.round(movePercent);
            newIndex = Math.max(0, Math.min(totalSlides - 1, newIndex));

            if (newIndex !== currentIndex) {
                currentIndex = newIndex;
                updateSlider();
                startX = moveX;
            }
        }
    });

    slidesWrapper.addEventListener('mouseup', () => {
        isMouseDown = false;
    });

    slidesWrapper.addEventListener('mouseleave', () => {
        isMouseDown = false;
    });

    function updateProgressBar() {
        const totalSlides = slideCards.length;
        const totalScrollWidth = slidesWrapper.scrollWidth - containerWidth;
        const scrollPercentage = slidesWrapper.scrollLeft / totalScrollWidth;
        const progressPercentage = scrollPercentage * (containerWidth - initialFillWidth); // Здесь тоже containerWidth
        progressBar.style.width = `${Math.min(initialFillWidth + progressPercentage, containerWidth)}px`; // Ограничение по ширине контейнера

        const index = Math.round(scrollPercentage * (totalSlides - 1));
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    slidesWrapper.addEventListener('scroll', updateProgressBar);

    function adjustProgressBar() {
        containerWidth = slidesWrapper.offsetWidth;
        initialFillWidth = containerWidth * 0.385;
        progressBar.style.width = `${Math.min(initialFillWidth, containerWidth)}px`; // Прогресс-бар не выходит за пределы контейнера
        updateSlider();
    }

    window.addEventListener('resize', adjustProgressBar);

    updateSlider();
    adjustProgressBar();
});

/*  Modal  */

const openModalButton = document.querySelector('.header-btn');
const modal = document.querySelector('.header-card-col-1');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModalButton = document.getElementById('closeModal');

openModalButton.addEventListener('click', function() {
  modal.style.display = 'flex'; 
  modalOverlay.style.display = 'block'; 
});


closeModalButton.addEventListener('click', function() {
  modal.style.display = 'none'; 
  modalOverlay.style.display = 'none'; 
});


window.addEventListener('click', function(event) {
  if (event.target === modalOverlay) { 
    modal.style.display = 'none'; 
    modalOverlay.style.display = 'none'; 
  }
});

const mobileBookBtn = document.querySelector('.header-btn-2');

if (mobileBookBtn) {
    mobileBookBtn.addEventListener('click', function() {
        // Здесь вставьте логику, которая выполняется при нажатии
        // Например, показать модальное окно:
        modal.style.display = 'flex';
        modalOverlay.style.display = 'block';
    });
}