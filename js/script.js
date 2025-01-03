const searchBar = document.getElementById('search-bar');
const searchBarContainer = document.getElementById('search-bar-container');

const containerHeight = 290;
const searchBarWidthMax = 400;
const searchBarBorderRadiusMax = 20;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const progress = scrollTop <= containerHeight ? scrollTop / containerHeight : 1;

    const translateYValue = Math.max(0, containerHeight - scrollTop);

    searchBarContainer.style.transform = `translateY(${translateYValue}px)`;
    searchBar.style.borderRadius = `${searchBarBorderRadiusMax - searchBarBorderRadiusMax * progress}px`;
    searchBar.style.width = `${350 + searchBarWidthMax * progress}px`;
});