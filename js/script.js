// Lấy tham chiếu đến các thành phần
const searchBar = document.getElementById('search-bar');
const inside = document.getElementById('bar-inside-color');
const searchBarContainer = document.getElementById('search-bar-container');
const header = document.getElementById('header');

// Thêm trình nghe sự kiện cuộn (scroll) vào cửa sổ
window.addEventListener('scroll', () => {
    // Lấy vị trí cuộn trang
    const scrollTop = window.scrollY;

    // Nếu vị trí cuộn nằm trong khoảng từ 0 đến 300px, di chuyển container lên
    if (scrollTop <= 290) {
        searchBarContainer.style.top = 290 - scrollTop + 'px';
    } else {
        // Nếu vị trí cuộn lớn hơn 300px, giữ container ở vị trí cố định
        searchBarContainer.style.top = '0px';
    }

    // Tính toán tỉ lệ thay đổi hiệu ứng
    let progress = 0; // Khởi tạo giá trị mặc định
    if (scrollTop >= 260) {
        progress = Math.min((scrollTop - 260) / 40, 1);
    }

    // Cập nhật thay đổi dựa trên progress
    searchBar.style.width = 350 + 30 * progress;
    searchBar.style.height = `${50 - 10 * progress}px`;
    inside.style.width = 350 + 50 * progress;
    inside.style.backgroundColor = `rgb(${255 - 4 * progress2}, ${255 - 28 * progress2}, ${255 - 64 * progress2})`;
    header.style.opacity = 1 - progress2;
});
