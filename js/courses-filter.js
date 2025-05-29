document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.golf-col-descr');
    const cards = document.querySelectorAll('.card-1');
    const wraps = document.querySelectorAll('.play-content-wrap');

    const filterMap = {
        'All courses': null,
        'Individual lessons': 'individual',
        'Group lessons': 'group',
        'Online lessons': 'online',
        'Golf school': 'school'
    };

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');

            const filter = filterMap[this.textContent.trim()];
            cards.forEach(card => {
                if (!filter || card.dataset.category.split(',').map(s=>s.trim()).includes(filter)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });

            // Скрываем play-content-wrap, если внутри нет видимых .card-1
            wraps.forEach(wrap => {
                const visibleCard = wrap.querySelector('.card-1:not([style*="display: none"])');
                wrap.style.display = visibleCard ? '' : 'none';
            });
        });
    });
});