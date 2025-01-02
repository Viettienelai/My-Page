// Phần thay đổi header và search bar khi cuộn
const header = document.getElementById('header');
const searchBarContainer = document.getElementById('search-bar-container');
const content = document.getElementById('content');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Thay đổi độ mờ và vị trí của header
    if (scrollY > 110) {
        header.style.opacity = Math.max(0, 1 - (scrollY - 110) / 80);
        document.body.classList.add('scrolled');
    } else {
        header.style.opacity = 1;
        document.body.classList.remove('scrolled');
    }
});

// Xử lý tìm kiếm Google
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const query = searchBar.value.trim();
        if (query) {
            window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
        }
    }
});

// Tải tin tức từ Google News API (thay YOUR_API_KEY bằng khóa API hợp lệ)
async function fetchNews() {
    const apiKey = '3bedd9928df34d2792927e58fd0b9406'; // Thay bằng API key thực tế của bạn
    const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=${apiKey}`);
    const data = await response.json();

    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = data.articles
        .map(article => `
            <div class="news-article">
                <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
                <p>${article.description || 'No description available'}</p>
            </div>
        `)
        .join('');
}

// Gọi hàm fetchNews khi tải trang
fetchNews();
