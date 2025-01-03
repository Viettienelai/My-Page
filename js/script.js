// Lấy các phần tử
const searchBarContainer = document.getElementById('search-bar-container');
const searchBar = document.getElementById('search-bar');

// Cấu hình các giai đoạn
const SCROLL_PHASE_ONE = 240; // Giai đoạn đầu đến 240px

const INITIAL_TOP = 240; // Vị trí ban đầu
const TARGET_TOP = 250; // Mục tiêu của top ở giai đoạn đầu
const INITIAL_WIDTH = 350; // Chiều rộng ban đầu của search bar
const TARGET_WIDTH = 400; // Chiều rộng mục tiêu ở giai đoạn đầu
const INITIAL_RADIUS = 70; // Border-radius ban đầu
const TARGET_RADIUS = 0; // Border-radius mục tiêu

// Xử lý sự kiện scroll
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY <= SCROLL_PHASE_ONE) {
        // Giai đoạn 1: Thay đổi dần vị trí và kích thước
        const progress = scrollY / SCROLL_PHASE_ONE; // Tiến độ từ 0 đến 1

        // Tính toán giá trị mới
        const newTop = INITIAL_TOP + (TARGET_TOP - INITIAL_TOP) * progress;
        const newWidth = INITIAL_WIDTH + (TARGET_WIDTH - INITIAL_WIDTH) * progress;
        const newRadius = INITIAL_RADIUS + (TARGET_RADIUS - INITIAL_RADIUS) * progress;

        // Áp dụng các thay đổi
        searchBarContainer.style.transform = `translateY(${newTop}px)`; // Sử dụng translateY thay vì top
        searchBar.style.width = `${newWidth}px`;
        searchBar.style.borderRadius = `${newRadius}px`;
    }
});
