const searchButton = document.getElementById('searchButton');
const searchTerm = document.getElementById('searchTerm');
const gifArea = document.getElementById('gifArea');
const apiKey = 'FTz79gPukEVuE0W8nQnMwKrqASSG1ome';

searchButton.addEventListener('click', () => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm.value}&api_key=${apiKey}&limit=10`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Clear previous results
      gifArea.innerHTML = '';

      data.data.forEach((gif) => {
        const img = document.createElement('img');
        img.src = gif.images.downsized.url;
        gifArea.appendChild(img);
      });
    })
    .catch((error) => console.error(error));
});

resetButton.addEventListener('click', () => {
  // Clear all GIFs
  gifArea.innerHTML = '';
});

searchButton.addEventListener('click', () => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm.value}&api_key=${apiKey}&limit=10`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.data.forEach((gif) => {
        const img = document.createElement('img');
        img.src = gif.images.downsized.url;
        gifArea.appendChild(img);
      });
    })
    .catch((error) => console.error(error));
});
