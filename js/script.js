// Lấy tham chiếu đến các thành phần
const searchBar = document.getElementById('search-bar');
const searchBarContainer = document.getElementById('search-bar-container');
const header = document.getElementById('header');

// Thêm trình nghe sự kiện cuộn (scroll) vào cửa sổ
window.addEventListener('scroll', () => {
    // Lấy vị trí cuộn trang
    const scrollTop = window.scrollY;

    // Nếu vị trí cuộn nằm trong khoảng từ 0 đến 300px, di chuyển container lên
    if (scrollTop <= 300) {
        searchBarContainer.style.top = 290 - scrollTop + 'px';
    } else {
        // Nếu vị trí cuộn lớn hơn 300px, giữ container ở vị trí cố định
        searchBarContainer.style.top = '-10px';
    }

    // Tính toán tỷ lệ thay đổi hiệu ứng 1 (từ 0 đến 1)
    const progress1 = Math.min(scrollTop / 300, 1);

    // Cập nhật thay đổi dựa trên progress1
    const newWidth = 350 + 50 * progress1;
    searchBar.style.borderRadius = `${20 - 20 * progress1}px`;
    searchBar.style.width = `${newWidth}px`;
    searchBar.style.height = `${50 + 10 * progress1}px`;

    // Tính toán tỉ lệ thay đổi hiệu ứng 2
    let progress2 = 0; // Khởi tạo giá trị mặc định
    if (scrollTop >= 260) {
        progress2 = Math.min((scrollTop - 260) / 40, 1);
    }

    // Cập nhật thay đổi dựa trên progress2
    searchBar.style.backgroundColor = `rgb(${255 - 4 * progress2}, ${255 - 28 * progress2}, ${255 - 64 * progress2})`;
    header.style.opacity = 1 - progress2;
});
