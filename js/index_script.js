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

const buttons = document.querySelectorAll('.got-btn');
const descr = document.querySelectorAll('.got-wrap-descr');
const title = document.querySelectorAll('.got-wrap-title')
const title1 = document.querySelectorAll('.got-wrap-title-1')

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (descr[index].style.display === 'none' || descr[index].style.display === '') {
            button.classList.add('active');
            descr[index].style.display = 'block'; 
            title[index].style.marginBottom = '35px'; 
            title1[index].style.marginBottom = '20px'; 
        } else {
            button.classList.remove('active');
            descr[index].style.display = 'none'; 
            title[index].style.marginBottom = '0'; 
            title1[index].style.marginBottom = '0'; 
        }
    });
});

/*  modal */

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

const houseCardBtn = document.querySelector('.house-card-btn');

houseCardBtn.addEventListener('click', function() {
    modal.style.display = 'flex';
    modalOverlay.style.display = 'block';
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

