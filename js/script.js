document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '3bedd9928df34d2792927e58fd0b9406'; // Thay thế bằng API key của bạn
    const newsContainer = document.getElementById('news-container');
    const searchBar = document.getElementById('search-bar');

    // Hàm lấy tin tức
    const fetchNews = async (query = '') => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
        if (query) {
            url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
        }
        try {
            const response = await fetch(url);
            const data = await response.json();
            displayNews(data.articles);
        } catch (error) {
            console.error('Lỗi khi lấy tin tức:', error);
        }
    };

    // Hàm hiển thị tin tức
    const displayNews = (articles) => {
        newsContainer.innerHTML = '';
        articles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.classList.add('news-article');
            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.description || 'Không có mô tả.'}</p>
                <a href="${article.url}" target="_blank">Đọc thêm</a>
            `;
            newsContainer.appendChild(articleElement);
        });
    };

    // Lấy tin tức mặc định khi tải trang
    fetchNews();

    // Lấy tin tức khi người dùng nhập từ khóa tìm kiếm
    searchBar.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchBar.value.trim();
            if (query) {
                fetchNews(query);
            }
        }
    });
});
