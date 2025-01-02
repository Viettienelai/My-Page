// Lấy các phần tử
const searchBarContainer = document.getElementById('search-bar-container');
const searchBar = document.getElementById('search-bar');

// Khoảng cách từ đỉnh trang đến khi thanh tìm kiếm cố định
const fixedPositionTop = 50;

// Hàm kiểm tra và áp dụng hiệu ứng
function handleScroll() {
  // Lấy vị trí cuộn hiện tại của trang
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Kiểm tra nếu đã cuộn đến vị trí cần cố định
  if (scrollTop >= searchBarContainer.offsetTop - fixedPositionTop) {
    searchBarContainer.style.position = 'fixed';
    searchBarContainer.style.top = fixedPositionTop + 'px';
    searchBar.style.width = '400px';
    searchBar.style.borderRadius = '0';
  } else {
    searchBarContainer.style.position = 'absolute';
    searchBarContainer.style.top = '240px';
    searchBar.style.width = '350px';
    searchBar.style.borderRadius = '70px';
  }
}

// Gọi hàm khi cuộn
window.addEventListener('scroll', handleScroll);