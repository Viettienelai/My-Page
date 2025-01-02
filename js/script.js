// Lấy phần tử search-bar-container
const searchBarContainer = document.getElementById("search-bar-container");
const searchBar = document.getElementById("search-bar");

// Lắng nghe sự kiện cuộn
window.addEventListener("scroll", () => {
    // Lấy vị trí của search bar so với top
    const scrollTop = window.scrollY;
    const searchBarTop = searchBarContainer.getBoundingClientRect().top;

    // Kiểm tra nếu vị trí scroll vượt qua 150px
    if (scrollTop + 150 >= searchBarContainer.offsetTop) {
        // Thêm lớp cố định
        searchBarContainer.classList.add("fixed");
    } else {
        // Xóa lớp cố định
        searchBarContainer.classList.remove("fixed");
    }
});
