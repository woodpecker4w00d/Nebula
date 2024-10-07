const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');
const customizeButton = document.getElementById('customize-button');

searchBar.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const searchQuery = searchBar.value.trim();
    if (searchQuery !== '') {
      window.location.href = `https://www.google.com/search?q=${searchQuery}`;
    }
  }
});

searchButton.addEventListener('click', () => {
  const searchQuery = searchBar.value.trim();
  if (searchQuery !== '') {
    window.location.href = `https://www.google.com/search?q=${searchQuery}`;
  }
});

customizeButton.addEventListener('click', () => {
  
  alert('Button Not Availabe Right Now');
});
