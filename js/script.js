// Lấy tham chiếu đến các thành phần
const searchBar = document.getElementById('search-bar');
const inside = document.getElementById('bar-inside-color');
const searchBarContainer = document.getElementById('search-bar-container');
const header = document.getElementById('header');
const headerVideo = document.getElementById('header-video');

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
    
// Tính toán tỉ lệ thay đổi hiệu ứng 1
    let progress1 = Math.min(scrollTop / 230, 1);

    if (scrollTop <= 230) {
        headerVideo.style.top = 30 + 200 * progress1 + 'px';
    } else {
        headerVideo.style.top = '230px';
    }
// Cập nhật thay đổi dựa trên progress1
    headerVideo.style.height = 250 - 200 * progress1 + 'px';
    headerVideo.style.width = 250 - 200 * progress1 + 'px';
    headerVideo.style.left = 55 - 5 * progress1 + '%';

// Tính toán tỉ lệ thay đổi hiệu ứng 2
    let progress2 = 0; // Khởi tạo giá trị mặc định
    if (scrollTop >= 240) {
        progress2 = Math.min((scrollTop - 240) / 60, 1);
    }

// Cập nhật thay đổi dựa trên progress2
    searchBar.style.width = (350 + 20 * progress2) + 'px';
    searchBar.style.height = (50 - 10 * progress2) + 'px';
    searchBar.style.borderRadius = (20 - 5 * progress2) + 'px';
    inside.style.width = (350 + 50 * progress2) + 'px';
    inside.style.backgroundColor = 'rgb(' + (255 - 4 * progress2) + ', ' + (255 - 28 * progress2) + ', ' + (255 - 64 * progress2) + ')';
    inside.style.borderRadius = (100 - 100 * progress2) + 'px';
    header.style.opacity = (1 - progress2) + '';
});
