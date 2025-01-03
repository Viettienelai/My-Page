// Lấy các phần tử
const searchBarContainer = document.getElementById('search-bar-container');
const searchBar = document.getElementById('search-bar');

// Cấu hình các giai đoạn
const SCROLL_PHASE_ONE = 240; // Giai đoạn đầu đến 240px
const SCROLL_PHASE_TWO = 1000; // Giai đoạn tiếp theo đến 1000px

const INITIAL_TOP = 240; // Vị trí ban đầu
const TARGET_TOP = 250; // Mục tiêu của top ở giai đoạn đầu
const FINAL_TOP = 1250; // Mục tiêu top ở giai đoạn cuối (sau 240px cuộn)

const INITIAL_WIDTH = 350; // Chiều rộng ban đầu của search bar
const TARGET_WIDTH = 400; // Chiều rộng mục tiêu ở giai đoạn đầu
const INITIAL_RADIUS = 70; // Border-radius ban đầu
const TARGET_RADIUS = 0; // Border-radius mục tiêu

let scrollRAF; // Biến để lưu trữ requestAnimationFrame

// Hàm xử lý di chuyển
function handleScroll() {
    const scrollY = window.scrollY;

    if (scrollY <= SCROLL_PHASE_ONE) {
        // Giai đoạn 1: Thay đổi dần vị trí và kích thước
        const progress = scrollY / SCROLL_PHASE_ONE; // Tiến độ từ 0 đến 1

        // Tính toán giá trị mới
        const newTop = INITIAL_TOP + (TARGET_TOP - INITIAL_TOP) * progress;
        const newWidth = INITIAL_WIDTH + (TARGET_WIDTH - INITIAL_WIDTH) * progress;
        const newRadius = INITIAL_RADIUS + (TARGET_RADIUS - INITIAL_RADIUS) * progress;

        // Áp dụng các thay đổi
        searchBarContainer.style.top = `${newTop}px`;
        searchBar.style.width = `${newWidth}px`;
        searchBar.style.borderRadius = `${newRadius}px`;
    } else if (scrollY > SCROLL_PHASE_ONE && scrollY <= SCROLL_PHASE_TWO) {
        // Giai đoạn 2: Di chuyển container dựa trên scroll từ 240px đến 1000px
        const progress = (scrollY - SCROLL_PHASE_ONE) / (SCROLL_PHASE_TWO - SCROLL_PHASE_ONE); // Tiến độ từ 0 đến 1

        // Tính toán top trong giai đoạn 2
        const newTop = TARGET_TOP + (FINAL_TOP - TARGET_TOP) * progress;

        // Áp dụng các thay đổi
        searchBarContainer.style.top = `${newTop}px`;
    }
}

// Tối ưu hóa sự kiện cuộn với requestAnimationFrame
function optimizedScroll() {
    // Hủy bỏ các animation frame trước đó
    if (scrollRAF) {
        cancelAnimationFrame(scrollRAF);
    }

    // Đăng ký animation frame mới
    scrollRAF = requestAnimationFrame(handleScroll);
}

// Đăng ký sự kiện cuộn
window.addEventListener('scroll', optimizedScroll, { passive: true });
