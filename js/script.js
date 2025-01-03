// Lấy phần tử container cần thay đổi vị trí
const searchBarContainer = document.getElementById('search-bar-container');

// Xử lý sự kiện cuộn trang
window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY; // Lấy số pixel cuộn từ trên xuống

    // Kiểm tra nếu cuộn xuống đến 240px
    if (scrollTop >= 240) {
        searchBarContainer.style.transform = 'translateY(240px)';
    } else {
        searchBarContainer.style.transform = `translateY(${scrollTop}px)`;
    }
});
