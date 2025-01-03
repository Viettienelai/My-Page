window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    
    const container = document.getElementById('search-bar-container');
    const searchBar = document.getElementById('search-bar');

    // Thay đổi top của container và width của search bar dựa trên scroll
    if (scrollY <= 240) {
        // Tính toán tỷ lệ thay đổi
        const topValue = (scrollY / 240) * 240;
        const widthValue = 400 + (scrollY / 240) * (350 - 400); // Từ 400px tới 350px
        const borderRadiusValue = (scrollY / 240) * 50; // Từ 50px tới 0px

        container.style.top = `${topValue}px`;
        container.style.width = `${widthValue}px`;
        container.style.borderRadius = `${borderRadiusValue}px`;

        // Cập nhật độ rộng và border radius cho search bar
        searchBar.style.width = `${widthValue - 50}px`; // Giảm bớt padding của search bar
        searchBar.style.borderRadius = `${borderRadiusValue}px`;
    }
});
