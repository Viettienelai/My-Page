// Lấy phần tử container cần thay đổi vị trí
const searchBarContainer = document.getElementById('search-bar-container');

// Xử lý sự kiện cuộn trang
window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    // Điều chỉnh vị trí cho phần tử di chuyển lên xuống khi cuộn
    if (scrollTop >= 240) {
        searchBarContainer.style.transform = 'translate(-50%, 240px)';
    } else {
        searchBarContainer.style.transform = `translate(-50%, ${scrollTop}px)`;
    }
});
