hi 
if (window.innerWidth <= 768) {
// Lấy tham chiếu đến các thành phần
const bar = document.getElementById('search-bar');
const inside = document.getElementById('bar-inside-color');
const barContainer = document.getElementById('bar-container');
const headerVideo = document.getElementById('header-video');
const icon = document.getElementById('search-icon');

// Thêm trình nghe sự kiện cuộn (scroll) vào cửa sổ
window.addEventListener('scroll', () => {
    // Lấy vị trí cuộn trang
    const scrollTop = window.scrollY;

    // Nếu vị trí cuộn nằm trong khoảng từ 0 đến 300px, di chuyển container lên
    if (scrollTop <= 290) {
        barContainer.style.top = 290 - scrollTop + 'px';
    } else {
        // Nếu vị trí cuộn lớn hơn 300px, giữ container ở vị trí cố định
        barContainer.style.top = '0px';
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
    let changeInsideWidth = 100 - minInsideWidth;

    // Cập nhật thay đổi dựa trên progress2
    bar.style.top = (0 + 10 * progress2) + 'px';
    bar.style.width = (minBarWidth + changeBarWidth * progress2) + '%';
    bar.style.height = (50 - 10 * progress2) + 'px';
    bar.style.borderRadius = (20 - 5 * progress2) + 'px';
    bar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, ' + (0.2 - 0.2 * progress2) + ')';
    inside.style.width = (minInsideWidth + changeInsideWidth * progress2) + '%';
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
    searchOptions.classList.toggle('active');
});

// Change search engine and placeholder
searchOptions.addEventListener('click', (event) => {
    const link = event.target.closest('a'); // Tìm phần tử <a>
    if (link) {
        event.preventDefault(); // Ngăn chuyển hướng

        const engine = link.getAttribute('data-engine');
        const icon = link.getAttribute('data-icon');

        // Cập nhật URL action
        searchForm.action = engine;

        // Cập nhật biểu tượng
        searchIcon.src = icon;

        // Cập nhật placeholder
        searchBar.placeholder = placeholders[engine] || "Search...";

        // Ẩn menu sau khi chọn
        searchOptions.classList.remove('active');
    }
});

// Close options when clicking outside
document.addEventListener('click', (event) => {
    if (!searchIcon.contains(event.target) && !searchOptions.contains(event.target)) {
        searchOptions.classList.remove('active');
    }
});

// Lắng nghe sự kiện submit form
document.getElementById('search-form').addEventListener('submit', function (e) {
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

document.querySelectorAll('.container1, .container2').forEach((container) => {
    const items = container.querySelectorAll('.bookmark-item');
    let previousRowDelay = 0; // Delay của hàng trước

    items.forEach((item, index) => {
        const rowTop = item.offsetTop; // Vị trí hàng của item hiện tại

        if (index === 0 || rowTop > items[index - 1].offsetTop) {
            // Nếu là item đầu tiên hoặc là item đầu tiên của hàng mới
            item.style.animationDelay = `${previousRowDelay + 0.1}s`;
            previousRowDelay = parseFloat(item.style.animationDelay); // Cập nhật delay của hàng
        } else {
            // Nếu là các item khác trong cùng hàng
            item.style.animationDelay = `${parseFloat(items[index - 1].style.animationDelay) + 0.1}s`;
        }
    });
});
} 











else {
const bar = document.getElementById('search-bar');
const inside = document.getElementById('bar-inside-color');
const barContainer = document.getElementById('bar-container');
const headerVideo = document.getElementById('header-video');
const icon = document.getElementById('search-icon');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    if (scrollTop <= 290) {
        barContainer.style.top = 290 - scrollTop + 'px';
    } else {
        barContainer.style.top = '0px';
    }

    let progress1 = Math.min(scrollTop / 230, 1);

    if (scrollTop <= 230) {
        headerVideo.style.top = 30 + 200 * progress1 + 'px';
    } else {
        headerVideo.style.top = '230px';
    }
    headerVideo.style.height = 250 - 200 * progress1 + 'px';
    headerVideo.style.width = 250 - 200 * progress1 + 'px';

    let progress2 = 0; 
    if (scrollTop >= 240) {
        progress2 = Math.min((scrollTop - 240) / 60, 1);
    }

    bar.style.top = (0 + 10 * progress2) + 'px';
    bar.style.width = (40 + 10 * progress2) + '%';
    bar.style.height = (50 - 10 * progress2) + 'px';
    bar.style.borderRadius = (20 - 5 * progress2) + 'px';
    bar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, ' + (0.2 - 0.2 * progress2) + ')';
    inside.style.width = (40 + 60 * progress2) + '%';
    inside.style.height = (50 + 10 * progress2) + 'px';
    inside.style.borderRadius = (100 - 100 * progress2) + 'px';
    icon.style.top = (10 + 5 * progress2) + 'px';
    icon.style.left = (32 - 5 * progress2) + '%';
});

const searchIcon = document.getElementById('search-icon');
const searchOptions = document.getElementById('search-options');
const searchForm = document.getElementById('search-form');
const searchBar = document.getElementById('search-bar');
const backgroundBlur = document.getElementById('background-blur');

const placeholders = {
    "https://www.google.com/search": "Search on Google...",
    "https://paulgo.io/search": "Search on SearXNG...",
    "https://search.brave.com/search": "Search on Brave...",
    "https://www.bing.com/search": "Search on Bing...",
    "https://duckduckgo.com/": "Search on DuckDuckGo"
};

// Toggle options visibility
searchIcon.addEventListener('click', () => {
    searchOptions.classList.toggle('active');
    backgroundBlur.classList.toggle('active');
});

// Change search engine and placeholder
searchOptions.addEventListener('click', (event) => {
    const link = event.target.closest('a'); // Tìm phần tử <a>
    if (link) {
        event.preventDefault(); // Ngăn chuyển hướng

        const engine = link.getAttribute('data-engine');
        const icon = link.getAttribute('data-icon');

        // Cập nhật URL action
        searchForm.action = engine;

        // Cập nhật biểu tượng
        searchIcon.src = icon;

        // Cập nhật placeholder
        searchBar.placeholder = placeholders[engine] || "Search...";

        // Ẩn menu sau khi chọn
        searchOptions.classList.remove('active');
        backgroundBlur.classList.remove('active');
    }
});

// Close options when clicking outside
document.addEventListener('click', (event) => {
    if (!searchIcon.contains(event.target) && !searchOptions.contains(event.target)) {
        searchOptions.classList.remove('active');
        backgroundBlur.classList.remove('active');
    }
});

// Lắng nghe sự kiện submit form
document.getElementById('search-form').addEventListener('submit', function (e) {
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

document.querySelectorAll('.container1, .container2').forEach((container) => {
    const items = container.querySelectorAll('.bookmark-item');
    let previousRowDelay = 0; // Delay của hàng trước

    items.forEach((item, index) => {
        const rowTop = item.offsetTop; // Vị trí hàng của item hiện tại

        if (index === 0 || rowTop > items[index - 1].offsetTop) {
            // Nếu là item đầu tiên hoặc là item đầu tiên của hàng mới
            item.style.animationDelay = `${previousRowDelay + 0.1}s`;
            previousRowDelay = parseFloat(item.style.animationDelay); // Cập nhật delay của hàng
        } else {
            // Nếu là các item khác trong cùng hàng
            item.style.animationDelay = `${parseFloat(items[index - 1].style.animationDelay) + 0.1}s`;
        }
    });
});
}
