// Lấy các phần tử cần thay đổi
const container = document.getElementById('search-bar-container');
const searchBar = document.getElementById('search-bar');

// Thêm sự kiện lắng nghe scroll
window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;

    // Giai đoạn 1: Khi scroll từ 0px đến 240px
    if (scrollPosition <= 240) {
        let topValue = 250 * (scrollPosition / 240); // Tính toán top thay đổi dần
        let widthValue = 400 * (scrollPosition / 240); // Tính toán width thay đổi dần
        let borderRadiusValue = 70 - (70 * (scrollPosition / 240)); // Tính toán border-radius thay đổi dần

        // Áp dụng các thay đổi vào container và search bar
        container.style.top = topValue + 'px';
        container.style.width = widthValue + 'px';
        searchBar.style.width = (widthValue - 50) + 'px'; // Giảm 50px cho search bar để tạo khoảng cách
        searchBar.style.borderRadius = borderRadiusValue + 'px';
    }
    // Giai đoạn 2: Khi scroll từ 240px đến 1000px
    else if (scrollPosition > 240 && scrollPosition <= 1000) {
        let translateYValue = (scrollPosition - 240) * (1000 / 760); // Tính toán translateY thay đổi từ 0px đến 1000px
        container.style.transform = `translateY(${translateYValue}px)`;
    }
    // Reset khi scroll vượt quá 1000px
    else {
        container.style.transform = `translateY(1000px)`;
    }
});
