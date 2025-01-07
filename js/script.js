// Lấy tham chiếu đến các thành phần
const Bar = document.getElementById('search-bar');
const inside = document.getElementById('bar-inside-color');
const BarContainer = document.getElementById('bar-container');
const headerVideo = document.getElementById('header-video');
const icon = document.getElementById('search-icon');

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
    inside.style.borderRadius = (100 - 100 * progress2) + 'px';
    icon.style.top = (10 + 5 * progress2) + 'px';
    icon.style.left = (9 - 2 * progress2) + '%';
});

const searchIcon = document.getElementById('search-icon');
const searchOptions = document.getElementById('search-options');
const searchForm = document.getElementById('search-form');
const searchBar = document.getElementById('search-bar');

// Placeholder mặc định theo công cụ tìm kiếm
const placeholders = {
    "https://www.google.com/search": "Search on Google...",
    "https://paulgo.io/search": "Search on SearXNG...",
    "https://search.brave.com/search": "Search on Brave...",
    "https://www.bing.com/search": "Search on Bing...",
    "https://duckduckgo.com/": "Search on DuckDuckGo"
};

// Toggle options visibility
searchIcon.addEventListener('click', () => {
    searchOptions.style.display = searchOptions.style.display === 'block' ? 'none' : 'block';
});

// Change search engine and placeholder
searchOptions.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        const engine = event.target.getAttribute('data-engine');
        const icon = event.target.getAttribute('data-icon');
        
        // Cập nhật URL action
        searchForm.action = engine;

        // Cập nhật biểu tượng
        searchIcon.src = icon;

        // Cập nhật placeholder
        searchBar.placeholder = placeholders[engine] || "Search...";

        // Ẩn menu sau khi chọn
        searchOptions.style.display = 'none';
    }
});

// Close options when clicking outside
document.addEventListener('click', (event) => {
    if (!document.getElementById('search-icon').contains(event.target)) {
        searchOptions.style.display = 'none';
    }
});






// Lắng nghe sự kiện submit form
document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var query = searchBar.value.trim();

    // Biểu thức chính quy kiểm tra URL (đã cải tiến)
    var urlRegex = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/i;

    if (urlRegex.test(query)) {
        // Nếu là URL hợp lệ, chuyển hướng đến URL đó
        if (!/^https?:\/\//i.test(query)) {
            query = 'https://' + query; // Thêm "https://" để đảm bảo an toàn
        }
        window.location.href = query;
    } else {
        // Nếu không phải URL, tìm kiếm theo công cụ đã chọn
        var searchEngineUrl = searchForm.action;
        window.location.href = searchEngineUrl + '?q=' + encodeURIComponent(query);
    }
});
