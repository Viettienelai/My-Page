// Lấy các phần tử DOM
const searchBarContainer = document.getElementById('search-bar-container');
const searchBar = document.getElementById('search-bar');

// Các hằng số cấu hình
const FIXED_POSITION_TOP = 10; // Khoảng cách từ đỉnh màn hình khi cố định
const INITIAL_WIDTH = 350; // Chiều rộng ban đầu
const EXPANDED_WIDTH = 400; // Chiều rộng khi mở rộng
const INITIAL_TOP = 240; // Vị trí ban đầu của container

// Trạng thái của thanh tìm kiếm
let isFixed = false;

// Hàm xử lý hiệu ứng cuộn
function handleScrollEffect() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (!isFixed && scrollTop > INITIAL_TOP - FIXED_POSITION_TOP) {
        // Khi cuộn xuống và thanh tìm kiếm cần cố định
        isFixed = true;

        searchBarContainer.style.transform = `translateY(${FIXED_POSITION_TOP - INITIAL_TOP}px)`;
        searchBar.style.width = `${EXPANDED_WIDTH}px`;
        searchBar.style.borderRadius = '20px';
    } else if (isFixed && scrollTop <= INITIAL_TOP - FIXED_POSITION_TOP) {
        // Khi cuộn lên và thanh tìm kiếm trở về trạng thái ban đầu
        isFixed = false;

        searchBarContainer.style.transform = `translateY(0)`;
        searchBar.style.width = `${INITIAL_WIDTH}px`;
        searchBar.style.borderRadius = '70px';
    }
}

// Tối ưu hóa sự kiện cuộn với requestAnimationFrame
let scrollRAF;
function optimizedScroll() {
    if (scrollRAF) cancelAnimationFrame(scrollRAF);
    scrollRAF = requestAnimationFrame(handleScrollEffect);
}

// Đăng ký sự kiện cuộn
window.addEventListener('scroll', optimizedScroll, { passive: true });

// Thêm hiệu ứng chuyển động mượt
searchBarContainer.style.transition = 'transform 0.3s ease';
searchBar.style.transition = 'width 0.3s ease, border-radius 0.3s ease';
