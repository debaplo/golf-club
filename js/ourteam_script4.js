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

(function() {
 
  const btn = document.querySelectorAll('.card-btn');  
  const btn2 = document.querySelectorAll('.card-btn-1'); 
  const top = document.querySelectorAll('.wrap-top');  
  const bottom = document.querySelectorAll('.club-card');  
  const img = document.querySelectorAll('.card-img');  

  
  const contentWrap2 = document.querySelector('.wrap-top-2');
  const contentWrap3 = document.querySelector('.wrap-top-3');
  const contentWrap4 = document.querySelector('.wrap-top-4');
  const contentWrap5 = document.querySelector('.wrap-top-5');
  const contentWrap6 = document.querySelector('.wrap-top-6');
  const contentWrap7 = document.querySelector('.wrap-top-7');
  const contentWrap8 = document.querySelector('.wrap-top-8');
  const contentWrap9 = document.querySelector('.wrap-top-9');
  const cardWrap = document.querySelector('.wrap-top'); 

 
  const hideAllContentWraps = () => {
    contentWrap2.style.display = 'none';
    contentWrap3.style.display = 'none';
    contentWrap4.style.display = 'none';
    contentWrap5.style.display = 'none';
    contentWrap6.style.display = 'none';
    contentWrap7.style.display = 'none';
    contentWrap8.style.display = 'none';
    contentWrap9.style.display = 'none';
  };

  
  img.forEach(image => {
    image.style.marginBottom = '10px';  
  });

  
  top.forEach(t => {
    t.style.display = 'flex'; 
    t.style.alignItems = 'center'; 
    t.style.backgroundColor = '#fefcf6'; 
    t.style.padding = '35px'; 
  });

  btn.forEach((button, index) => {
    button.addEventListener('click', () => {
      hideAllContentWraps();  

      
      if (index === 0) {
        cardWrap.style.display = 'none';
        contentWrap2.style.display = 'flex'; 
      } else if (index === 1) {
        cardWrap.style.display = 'none';
        contentWrap3.style.display = 'flex'; 
      } else if (index === 2) {
        cardWrap.style.display = 'none';
        contentWrap4.style.display = 'flex';  
      } else if (index === 3) {
        cardWrap.style.display = 'none';
        contentWrap5.style.display = 'flex'; 
      } else if (index === 4) {
        cardWrap.style.display = 'none';
        contentWrap6.style.display = 'flex';  
      } else if (index === 5) {
        cardWrap.style.display = 'none';
        contentWrap7.style.display = 'flex'; 
      } else if (index === 6) {
        cardWrap.style.display = 'none';
        contentWrap8.style.display = 'flex';  
      } else if (index === 7) {
        cardWrap.style.display = 'none';
        contentWrap9.style.display = 'flex';  
      }

     
      const activeWrap = [contentWrap2, contentWrap3, contentWrap4, contentWrap5, contentWrap6, contentWrap7, contentWrap8, contentWrap9][index];
      activeWrap.style.display = 'flex'; 
      activeWrap.style.flexWrap = 'npwrap';  
      activeWrap.style.padding = '35px';  
      activeWrap.style.backgroundColor = '#fefcf6';  
    });
  });

  
  btn2.forEach((button, index) => {
    button.addEventListener('click', () => {
      hideAllContentWraps(); 

     
      if (index === 0) {
        cardWrap.style.display = 'none';
        contentWrap2.style.display = 'flex';
      } else if (index === 1) {
        cardWrap.style.display = 'none';
        contentWrap3.style.display = 'flex';
      } else if (index === 2) {
        cardWrap.style.display = 'none';
        contentWrap4.style.display = 'flex';
      } else if (index === 3) {
        cardWrap.style.display = 'none';
        contentWrap5.style.display = 'flex';
      } else if (index === 4) {
        cardWrap.style.display = 'none';
        contentWrap6.style.display = 'flex';
      } else if (index === 5) {
        cardWrap.style.display = 'none';
        contentWrap7.style.display = 'flex';
      } else if (index === 6) {
        cardWrap.style.display = 'none';
        contentWrap8.style.display = 'flex';
      } else if (index === 7) {
        cardWrap.style.display = 'none';
        contentWrap9.style.display = 'flex';
      }

      
      const activeWrap = [contentWrap2, contentWrap3, contentWrap4, contentWrap5, contentWrap6, contentWrap7, contentWrap8, contentWrap9][index];
      activeWrap.style.display = 'flex';  
      activeWrap.style.flexWrap = 'wrap'; 
      activeWrap.style.padding = '35px'; 
      activeWrap.style.backgroundColor = '#fefcf6'; 

    
      cardWrap.style.display = 'none';
    });
  });

  
  const applyFlexWrap = () => {
    
    const wraps = [
      ...document.querySelectorAll('.wrap-top'),
      ...document.querySelectorAll('.wrap-top-2'),
      ...document.querySelectorAll('.wrap-top-3'),
      ...document.querySelectorAll('.wrap-top-4'),
      ...document.querySelectorAll('.wrap-top-5'),
      ...document.querySelectorAll('.wrap-top-6'),
      ...document.querySelectorAll('.wrap-top-7'),
      ...document.querySelectorAll('.wrap-top-8'),
      ...document.querySelectorAll('.wrap-top-9')
    ];
  
    if (window.innerWidth <= 588) {
      wraps.forEach(wrap => {
        wrap.style.flexWrap = 'wrap'; 
      });
    } else {
      wraps.forEach(wrap => {
        wrap.style.flexWrap = 'nowrap'; 
      });
    }
  };
  

 
  applyFlexWrap();
  window.addEventListener('resize', applyFlexWrap);

})();


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