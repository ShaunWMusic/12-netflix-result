import 'whatwg-fetch';
import NetflixResultView from './views/netflix-result';

// Create Variables for the search form, search input, and search result
const form = document.querySelector('.search-bar');
const input = document.querySelector('.search');
const resultEl = document.querySelector('.result');

const resultView = new NetflixResultView(resultEl, {});

function startSearch(term) {
  fetch(`http://netflixroulette.net/api/api.php?title=${term}`)
    .then((res) => res.json())
    .then((data) => {
      resultView.model = data;
      resultView.render();
    });
}

form.addEventListener('submit', (ev) => {
  ev.preventDefault();

  startSearch(input.value);
});

startSearch('Scrubs');
