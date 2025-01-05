// Lấy tham chiếu đến các thành phần
const Bar = document.getElementById('search-bar');
const inside = document.getElementById('bar-inside-color');
const BarContainer = document.getElementById('bar-container');
const headerVideo = document.getElementById('header-video');

// Thêm trình nghe sự kiện cuộn (scroll) vào cửa sổ
window.addEventListener('scroll', () => {
// Lấy vị trí cuộn trang
    const scrollTop = window.scrollY;

// Nếu vị trí cuộn nằm trong khoảng từ 0 đến 300px, di chuyển container lên
    if (scrollTop <= 290) {
        BarContainer.style.top = 290 - scrollTop + 'px';
    } else {
    // Nếu vị trí cuộn lớn hơn 300px, giữ container ở vị trí cố định
        BarContainer.style.top = '0px';
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

// Tính toán tỉ lệ thay đổi hiệu ứng 2
    let progress2 = 0; // Khởi tạo giá trị mặc định
    if (scrollTop >= 240) {
        progress2 = Math.min((scrollTop - 240) / 60, 1);
    }

    let minBarWidth = (100 * 350 / 390);
    let maxBarWidth = (100 * 370 / 390);
    let changeBarWidth = maxBarWidth - minBarWidth;

    let minInsideWidth = (100 * 350 / 390); 
    let remainingInsideWidth = 100 - minInsideWidth;

// Cập nhật thay đổi dựa trên progress2
    Bar.style.top = (0 + 10 * progress2) + 'px';
    Bar.style.width = (minBarWidth + changeBarWidth * progress2) + '%';
    Bar.style.height = (50 - 10 * progress2) + 'px';
    Bar.style.borderRadius = (20 - 5 * progress2) + 'px';
    Bar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, ' + (0.1 - 0.1 * progress2) + ')';
    inside.style.width = (minInsideWidth + remainingInsideWidth * progress2) + '%';
    inside.style.height = (50 + 10 * progress2) + 'px';
    inside.style.backgroundColor = 'rgb(' + (255 - 4 * progress1) + ', ' + (255 - 28 * progress1) + ', ' + (255 - 64 * progress1) + ')';
    inside.style.borderRadius = (100 - 100 * progress2) + 'px';
});
