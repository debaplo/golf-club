document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.golf-col-descr');
    const cards = document.querySelectorAll('.link-card');

    const filterMap = {
        'All': null,
        'Group packages': 'group-packages',
        'Golf packages': 'golf-packages',
        'Golf offers': 'golf-offers'
    };

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');

            const filter = filterMap[this.textContent.trim()];
            cards.forEach(card => {
                if (!filter || card.dataset.category === filter) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});