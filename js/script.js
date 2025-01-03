// Lấy tham chiếu đến thanh tìm kiếm và container
const searchBar = document.getElementById('search-bar');
const searchBarContainer = document.getElementById('search-bar-container');

// Thêm trình nghe sự kiện cuộn (scroll) vào cửa sổ
window.addEventListener('scroll', () => {
    // Lấy vị trí cuộn trang
    const scrollTop = window.scrollY;

    // Tính toán dịch chuyển của container theo chiều dọc (Y)
    let translateYValue = Math.max(290 - scrollTop, 0);
    
    // Tính toán dịch chuyển của container theo chiều ngang (X)
    const windowWidth = window.innerWidth;
    const containerWidth = searchBarContainer.offsetWidth;
    const translateXValue = (windowWidth - containerWidth) / 2; // Căn giữa container theo chiều ngang
    
    // Áp dụng transform translateY và translateX
    searchBarContainer.style.transform = `translateY(${translateYValue}px) translateX(${translateXValue}px)`;

    // Tính toán tỷ lệ thay đổi hiệu ứng (từ 0 đến 1)
    const progress = Math.min(scrollTop / 290, 1);

    // Cập nhật border-radius và width của thanh tìm kiếm
    searchBar.style.borderRadius = `${20 - 20 * progress}px`;
    searchBar.style.width = `${350 + 50 * progress}px`;
});
