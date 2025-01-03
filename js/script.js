window.addEventListener("scroll", function() {
    var scrollY = window.scrollY;  // Lấy vị trí scroll hiện tại
    var searchBarContainer = document.getElementById("search-bar-container");
    var searchBar = document.getElementById("search-bar");

    // Điều kiện khi scroll từ 0 đến 290px
    if (scrollY <= 290) {
        var translateY = (scrollY / 290) * 290;  // Tính giá trị translateY từ 0 đến 290
        searchBarContainer.style.transform = "translate(-50%, -" + translateY + "px)";

        // Tính toán width và border-radius cho search bar
        var newWidth = 350 + (scrollY / 290) * (400 - 350);  // Tăng dần width từ 350px đến 400px
        var newBorderRadius = 20 - (scrollY / 290) * 20;  // Giảm dần border-radius từ 20px xuống 0

        searchBar.style.width = newWidth + "px";
        searchBar.style.borderRadius = newBorderRadius + "px";
    }
});
