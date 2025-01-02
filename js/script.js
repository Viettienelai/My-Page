window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var headerHeight = header.offsetHeight; // Lấy chiều cao của header
    var scrollPosition = window.scrollY; // Lấy vị trí cuộn hiện tại

    // Tính toán độ mờ opacity dựa trên vị trí cuộn
    var opacity = 1 - Math.min((scrollPosition - headerHeight + 100) / 100, 1);
    
    // Áp dụng độ mờ cho header
    header.style.opacity = opacity;
});
