// Lấy phần tử search-bar-container
const searchBarContainer = document.getElementById("search-bar-container");
const searchBar = document.getElementById("search-bar");

// Lắng nghe sự kiện cuộn (scroll)
window.addEventListener("scroll", () => {
    // Lấy vị trí của search-bar-container so với trên cùng của trang
    const scrollTop = window.scrollY;

    // Kiểm tra nếu vị trí scroll vượt qua 50px
    if (scrollTop >= 50) {
        // Thêm lớp "fixed" khi người dùng cuộn đến vị trí đó
        searchBarContainer.classList.add("fixed");
    } else {
        // Xóa lớp "fixed" khi người dùng cuộn lên trên
        searchBarContainer.classList.remove("fixed");
    }
});
