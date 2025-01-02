// Lấy phần tử thanh tìm kiếm và container của nó
const searchBarContainer = document.getElementById("search-bar-container");
const searchBar = document.getElementById("search-bar");

// Lắng nghe sự kiện cuộn
window.addEventListener("scroll", () => {
    // Vị trí cuộn của trang
    const scrollTop = window.scrollY;

    // Kiểm tra nếu thanh tìm kiếm đã đến vị trí cách top 150px
    if (scrollTop + 150 >= searchBarContainer.offsetTop) {
        // Thêm lớp cố định
        searchBarContainer.classList.add("fixed");
    } else {
        // Xóa lớp cố định
        searchBarContainer.classList.remove("fixed");
    }
});
