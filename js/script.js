// Get reference to the search bar container
const searchBarContainer = document.getElementById('search-bar-container');

// Add scroll event listener to window
window.addEventListener('scroll', () => {
    // Get the scroll position
    const scrollTop = window.scrollY;

    // If scroll position is between 0 and 240px, move the container up
    if (scrollTop <= 240) {
        searchBarContainer.style.top = 240 - scrollTop + 'px';
    }
    // If the scroll position is more than 240px, keep the container at 240px
    else {
        searchBarContainer.style.top = '0px';
    }
});
