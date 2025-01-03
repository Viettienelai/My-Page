const searchBar = document.getElementById('search-bar');
const searchBarContainer = document.getElementById('search-bar-container');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    if (scrollTop <= 290) {
        searchBarContainer.style.transform = `translateY(${290 - scrollTop}px) translateX(-50%)`;
    } else {
        searchBarContainer.style.transform = 'translateY(0) translateX(-50%)';
    }

    const progress = Math.min(scrollTop / 290, 1);

    searchBar.style.borderRadius = `${20 - 20 * progress}px`;
    searchBar.style.width = `${350 + 50 * progress}px`;
});