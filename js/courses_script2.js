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


/*  Content  */

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".card-btn:first-of-type").forEach(button => {
        button.addEventListener("click", function () {
            const card = this.closest(".card-1");
            const cardWrap = card.nextElementSibling;
            const cardInnerWrap = cardWrap ? cardWrap.querySelector(".card-1-wrap") : null;
            
            if (cardWrap && cardWrap.classList.contains("card-wrap-main") && cardInnerWrap) {
                if (cardInnerWrap.classList.contains("active")) {
                    cardInnerWrap.classList.remove("active");
                    cardInnerWrap.style.maxHeight = "0";
                    setTimeout(() => {
                        cardInnerWrap.style.display = "none";
                        card.style.marginBottom = "0";
                    }, 300);
                } else {
                    cardInnerWrap.style.display = "block";
                    card.style.marginBottom = window.innerWidth <= 546 ? "20px" : "70px";
                    requestAnimationFrame(() => {
                        cardInnerWrap.classList.add("active");
                        cardInnerWrap.style.maxHeight = cardInnerWrap.scrollHeight + "px";
                    });
                }
                this.classList.toggle("active");
            }
        });
    });

    document.querySelectorAll(".card-1-wrap").forEach(cardInnerWrap => {
        cardInnerWrap.style.display = "none";
        cardInnerWrap.style.maxHeight = "0";
        cardInnerWrap.style.overflow = "hidden";
        cardInnerWrap.style.transition = "max-height 0.3s ease-in-out";
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

const btn9 = document.querySelectorAll('.card-btn-9');
const header = document.querySelector('.header-card-col-2');
const closeModal1 = document.getElementById('closeModal1')

btn9.forEach(button => {
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

document.addEventListener('DOMContentLoaded', function() { 
    const quizBtn = document.getElementById('openQuizBtn');
    const quizModal = document.getElementById('quizModal');
    const closeQuizBtn = document.getElementById('closeQuizBtn');
    const quizForm = document.getElementById('golfQuizForm');
    const steps = quizForm.querySelectorAll('.quiz-step');
    const resultBlock = quizForm.querySelector('.quiz-result');
    const resultText = document.getElementById('quizResultText');
    
    quizBtn.onclick = () => { quizModal.style.display = 'flex'; };
    closeQuizBtn.onclick = () => { quizModal.style.display = 'none'; quizForm.reset(); resetQuiz(); };
    window.onclick = e => { if (e.target === quizModal) closeQuizBtn.onclick(); };
    
    function updateQuizStepNum(step) {
      document.getElementById('quizStepNum').textContent = step;
    }

    function resetQuiz() {
      steps.forEach((step, i) => step.style.display = i === 0 ? 'block' : 'none');
      resultBlock.style.display = 'none';
      updateQuizStepNum(1);
    }

    quizForm.querySelectorAll('.quiz-next').forEach((btn, idx) => {
      btn.onclick = () => {
        const inputs = steps[idx].querySelectorAll('input[type=radio]');
        if ([...inputs].some(i => i.checked)) {
          steps[idx].style.display = 'none';
          steps[idx+1].style.display = 'block';
          updateQuizStepNum(idx + 2);
        }
      };
    });
    
    quizForm.onsubmit = function(e) {
      e.preventDefault();
      const level = quizForm.level.value;
      const format = quizForm.format.value;
      const duration = quizForm.duration.value;
      const goal = quizForm.goal.value;
    
      let course = '', url = '';
      if (format === 'online') {
        course = 'CoachNow - Online Lessons';
        url = '/courses.html#coachnow';
      } else if (level === 'beginner') {
        if (format === 'individual' && duration === 'short' && goal === 'technique') {
          course = 'St Andrews Links Lesson';
          url = '/courses.html#standrews-links-lesson';
        } else if (format === 'individual' && duration === 'short' && goal === 'shortgame') {
          course = 'SAM PuttLab – Putting Studio';
          url = '/courses.html#sam-puttlab';
        } else if (format === 'individual' && duration === 'short' && goal === 'all') {
          course = 'St Andrews Links Half Day Clinic';
          url = '/courses.html#halfday-clinic';
        } else if (format === 'group' && duration === 'long') {
          course = '5 Day Adult Golf School';
          url = '/courses.html#five-day-school';
        } else if (format === 'group' && duration === 'short') {
          // Добавьте подходящий групповой короткий курс
          course = '3 Day Adult Golf School';
          url = '/courses.html#three-day-school';
        }
      } else if (level === 'intermediate') {
        if (format === 'individual' && duration === 'short' && goal === 'technique') {
          course = 'St Andrews Links Lesson';
          url = '/courses.html#standrews-links-lesson';
        } else if (format === 'individual' && duration === 'short' && goal === 'shortgame') {
          course = 'Putting Master Class';
          url = '/courses.html#putting-master';
        } else if (format === 'individual' && duration === 'short' && goal === 'all') {
          course = 'St Andrews Links Half Day Clinic';
          url = '/courses.html#halfday-clinic';
        } else if (format === 'group' && duration === 'long') {
          course = '5 Day Adult Golf School';
          url = '/courses.html#five-day-school';
        } else if (format === 'group' && duration === 'short') {
          course = '3 Day Adult Golf School';
          url = '/courses.html#three-day-school';
        }
      } else if (level === 'advanced') {
        if (format === 'individual' && duration === 'short' && goal === 'technique') {
          course = 'St Andrews Links Lesson';
          url = '/courses.html#standrews-links-lesson';
        } else if (format === 'individual' && duration === 'short' && goal === 'shortgame') {
          course = 'Putting Master Class';
          url = '/courses.html#putting-master';
        } else if (format === 'individual' && duration === 'short' && goal === 'all') {
          course = 'St Andrews Links Half Day Clinic';
          url = '/courses.html#halfday-clinic';
        } else if (format === 'individual' && duration === 'long') {
          course = 'Ultimate Golf Academy Package';
          url = '/courses.html#ultimate-package';
        } else if (format === 'group' && duration === 'long') {
          course = '5 Day Adult Golf School';
          url = '/courses.html#five-day-school';
        } else if (format === 'group' && duration === 'short') {
          course = '3 Day Adult Golf School';
          url = '/courses.html#three-day-school';
        }
      }
      if (!course) {
        course = 'CoachNow - Online Lessons';
        url = '/courses.html#coachnow';
      }
    
      steps[3].style.display = 'none';
      resultBlock.style.display = 'block';
      updateQuizStepNum(4);
      resultText.innerHTML = `Вам идеально подходит: <a href="${url}" class="quiz-result-link">${course}</a>`;
      const resultLink = document.querySelector('.quiz-result-link');
      if (resultLink) {
        resultLink.onclick = function(e) {
          e.preventDefault();
          quizModal.style.display = 'none';
          const href = this.getAttribute('href');
          const hash = href.includes('#') ? href.substring(href.indexOf('#')) : '';
          if (hash) {
            // Сбросить фильтр на "All courses"
            const allCoursesBtn = Array.from(document.querySelectorAll('.golf-col-descr'))
              .find(btn => btn.textContent.trim() === 'All courses');
            if (allCoursesBtn && !allCoursesBtn.classList.contains('active')) {
              allCoursesBtn.click();
            }
            setTimeout(() => {
              const target = document.querySelector(hash);
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                history.replaceState(null, null, hash);
              } else {
                window.location.hash = hash;
              }
                }, 400); // увеличить задержку для надёжности
              }
            };
          }
        };
    });
      