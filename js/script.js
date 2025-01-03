// Lấy tham chiếu đến container của thanh tìm kiếm
const searchBarContainer = document.getElementById('search-bar-container');

// Thêm trình nghe sự kiện cuộn (scroll) vào cửa sổ
window.addEventListener('scroll', () => {
    // Lấy vị trí cuộn trang
    const scrollTop = window.scrollY;

    // Nếu vị trí cuộn nằm trong khoảng từ 0 đến 240px, di chuyển container lên
    if (scrollTop <= 240) {
        searchBarContainer.style.top = 240 - scrollTop + 'px';
    }
    // Nếu vị trí cuộn lớn hơn 240px, giữ container ở vị trí 240px
    else {
        searchBarContainer.style.top = '0px';
    }
});
