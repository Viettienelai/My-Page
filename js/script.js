// Lấy các phần tử DOM
const searchBarContainer = document.getElementById('search-bar-container');
const searchBar = document.getElementById('search-bar');

// Các hằng số cấu hình
const FIXED_POSITION_TOP = 10; // Khoảng cách từ đỉnh màn hình khi cố định
const INITIAL_WIDTH = 350; // Chiều rộng ban đầu
const EXPANDED_WIDTH = 400; // Chiều rộng khi mở rộng
const INITIAL_TOP = 240; // Vị trí ban đầu của container

// Trạng thái của thanh tìm kiếm
let searchBarState = {
    isFixed: false,
    initialScrollPosition: 0
};

// Hàm xử lý sự kiện cuộn
function handleScrollEffect() {
    // Lấy vị trí cuộn hiện tại
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Tính toán vị trí của container search bar so với đỉnh trang
    const searchBarContainerTop = searchBarContainer.getBoundingClientRect().top + scrollTop;

    // Kiểm tra hướng cuộn
    const isScrollingDown = scrollTop > searchBarState.initialScrollPosition;
    const isScrollingUp = scrollTop < searchBarState.initialScrollPosition;

    // Điều kiện cố định thanh tìm kiếm khi cuộn xuống
    if (isScrollingDown && scrollTop >= searchBarContainerTop - FIXED_POSITION_TOP) {
        if (!searchBarState.isFixed) {
            // Lưu vị trí cuộn ban đầu
            searchBarState.initialScrollPosition = scrollTop;

            // Chuyển sang trạng thái cố định
            searchBarContainer.style.position = 'fixed';
            searchBarContainer.style.top = `${FIXED_POSITION_TOP}px`;
            
            // Thay đổi thuộc tính của thanh tìm kiếm
            searchBar.style.width = `${EXPANDED_WIDTH}px`;
            searchBar.style.borderRadius = '0';
            
            searchBarState.isFixed = true;
        }
    } 
    // Điều kiện đảo ngược khi cuộn lên
    else if (isScrollingUp && searchBarState.isFixed) {
        // Trở về trạng thái ban đầu
        searchBarContainer.style.position = 'absolute';
        searchBarContainer.style.top = `${INITIAL_TOP}px`;
        
        // Khôi phục thuộc tính ban đầu
        searchBar.style.width = `${INITIAL_WIDTH}px`;
        searchBar.style.borderRadius = '70px';
        
        searchBarState.isFixed = false;
        searchBarState.initialScrollPosition = scrollTop;
    }
}

// Tối ưu hóa sự kiện cuộn với requestAnimationFrame
let scrollRAF;
function optimizedScroll() {
    // Hủy animation frame trước đó nếu tồn tại
    if (scrollRAF) {
        cancelAnimationFrame(scrollRAF);
    }
    
    // Đăng ký animation frame mới
    scrollRAF = requestAnimationFrame(handleScrollEffect);
}

// Đăng ký sự kiện cuộn
window.addEventListener('scroll', optimizedScroll, { passive: true });

// Thêm hiệu ứng chuyển động mượt
searchBarContainer.style.transition = 'all 1s ease';
searchBar.style.transition = 'all 1s ease';