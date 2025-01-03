// Lấy tham chiếu đến thanh tìm kiếm và container
const searchBar = document.getElementById('search-bar');
const searchBarContainer = document.getElementById('search-bar-container');

// Thêm trình nghe sự kiện cuộn (scroll) vào cửa sổ
window.addEventListener('scroll', () => {
    // Lấy vị trí cuộn trang
    const scrollTop = window.scrollY;

    // Nếu vị trí cuộn nằm trong khoảng từ 0 đến 290px, di chuyển container lên
    if (scrollTop <= 290) {
        searchBarContainer.style.top = 300 - scrollTop + 'px';
    } else {
        // Nếu vị trí cuộn lớn hơn 290px, giữ container ở vị trí 0px
        searchBarContainer.style.top = '0px';
    }

    // Tính toán tỷ lệ thay đổi hiệu ứng (từ 0 đến 1)
    const progress = Math.min(scrollTop / 290, 1);

    // Cập nhật border-radius và width của thanh tìm kiếm
    searchBar.style.borderRadius = `${20 - 20 * progress}px`;
    searchBar.style.width = `${350 + 50 * progress}px`;
});
