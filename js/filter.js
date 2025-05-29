document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleFilter');
    const filterMenu = document.getElementById('filterMenu');

    if (!toggleButton || !filterMenu) return;

    toggleButton.addEventListener('click', function (e) {
        e.stopPropagation();
        if (filterMenu.style.display === 'none' || filterMenu.style.display === '') {
            filterMenu.style.display = 'block';
            toggleButton.classList.add('rotate');
        } else {
            filterMenu.style.display = 'none';
            toggleButton.classList.remove('rotate');
        }
    });

    filterMenu.addEventListener('click', function (e) {
        e.stopPropagation();
    });

    document.addEventListener('click', function () {
        filterMenu.style.display = 'none';
        toggleButton.classList.remove('rotate');
    });
});

