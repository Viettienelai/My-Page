// Lấy phần tử cần theo dõi
const searchBarContainer = document.getElementById('search-bar-container');

// Lắng nghe sự kiện cuộn trang
window.addEventListener('scroll', function() {
    // Kiểm tra vị trí cuộn so với phần tử thanh tìm kiếm
    if (window.scrollY >= 150) {
        // Thêm lớp 'fixed' khi cuộn qua 150px
        searchBarContainer.classList.add('fixed');
    } else {
        // Loại bỏ lớp 'fixed' khi cuộn lên trên 150px
        searchBarContainer.classList.remove('fixed');
    }
});
