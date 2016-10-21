import 'whatwg-fetch';
import NetflixResultView from './views/netflix-result';

// Create Variables for the search form, search input, and search result
const searchBar = document.querySelector('.search-bar');
const resultEl = document.querySelector('.result');

const resultView = new NetflixResultView(resultEl, {});

fetch('http://netflixroulette.net/api/api.php?title=Scrubs')
  .then((res) => res.json())
  .then((data) => {
    resultView.model = data;
    resultView.render();
  });

// debugger;
// const view = new NetflixResultView(r, data);
  // function afterData(shows) {
  //   fillResultsList(r, shows);
  // }

  // function afterClick() {
  //   data(i.value)
  // .then(afterData);
  // }

// f.addEventListener('click', afterClick);
