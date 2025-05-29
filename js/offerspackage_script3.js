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

/*  Open  */
document.querySelectorAll('.link-btn-2').forEach(button => {
    button.addEventListener('click', function() {
        const contentWrap = this.closest('.link-card-2').querySelector('.card-wrap-main-1');
        const frElement = this.closest('.link-card-2').querySelector('.fr');
        const button = this;

        if (!contentWrap.hasAttribute('data-visible')) {
            contentWrap.style.display = 'none';
            contentWrap.setAttribute('data-visible', 'false');
        }

        button.classList.toggle('rotate');

        if (contentWrap.style.display === 'none' || contentWrap.getAttribute('data-visible') === 'false') {
            contentWrap.style.display = 'block';
            contentWrap.style.overflow = 'hidden';
            contentWrap.style.transform = 'scaleY(0)';
            contentWrap.style.transformOrigin = 'top';
            frElement.style.marginBottom = '20px';

            let duration = 500;
            let startTime = performance.now();

            function animateOpen() {
                let currentTime = performance.now();
                let timeElapsed = currentTime - startTime;
                let progress = Math.min(timeElapsed / duration, 1);

                contentWrap.style.transform = `scaleY(${progress})`;
                contentWrap.style.opacity = progress;

                if (progress < 1) {
                    requestAnimationFrame(animateOpen);
                } else {
                    contentWrap.setAttribute('data-visible', 'true');
                }
            }

            animateOpen();
        } else {
            let duration = 500;
            let startTime = performance.now();

            function animateClose() {
                let currentTime = performance.now();
                let timeElapsed = currentTime - startTime;
                let progress = Math.min(timeElapsed / duration, 1);

                contentWrap.style.transform = `scaleY(${1 - progress})`;
                contentWrap.style.opacity = 1 - progress;

                if (progress < 1) {
                    requestAnimationFrame(animateClose);
                } else {
                    contentWrap.style.display = 'none';
                    contentWrap.style.overflow = 'hidden';
                    contentWrap.setAttribute('data-visible', 'false');
                    frElement.style.marginBottom = '';
                }
            }

            animateClose();
            button.classList.remove('rotate');
        }
    });
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

const btn9 = document.querySelectorAll('.link-btn');
const btn10 = document.querySelectorAll('.link-btn-3');
const header = document.querySelector('.header-card-col-2');
const closeModal1 = document.getElementById('closeModal1')

btn9.forEach(button => {
    button.addEventListener('click', () => {
        header.style.display = 'flex'; 
        modalOverlay.style.display = 'block';
    });
});

btn10.forEach(button => {
    button.addEventListener('click', () => {
        header.style.display = 'flex'; 
        modalOverlay.style.display = 'block';
    });
});



closeModal1.addEventListener('click', () => {
    header.style.display = 'none';
    modalOverlay.style.display = 'none';
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

// пример для глобального обработчика клика в offerspackage_script3.js
document.addEventListener('click', function(event) {
    // Если клик произошёл внутри filterMenu, выходим из обработчика
    if (event.target.closest('#filterMenu')) {
        return;
    }
    // Остальной код обработчика, например закрываем модальное окно
    if (event.target === modalOverlay) { 
        modal.style.display = 'none'; 
        modalOverlay.style.display = 'none'; 
    }
});