export default NetflixResultView(el, model) {
  constructor(el, model) {
    this.el = el;
    this.model = model;

    this.element = document.createElement('div');
    this.element.classList.add('result');
    this.element.innerHTML = `
    <div class="result-content">
      <div class="result-content__item">
        <div class="result-content__item--text">
          <h2 class="result-title"></h2>
          <h5 class="result-category"></h5>
          <h3 class="result-rating"><span class="fa fa-star"></span></h3>
          </div>
          <img src="" alt="" class="result-img"/>
      </div>
        <h2>Summary</h2>
        <p class="result-summary"></p>
        <h2>Actors</h2>
        <p class="result-actors"></p>
      </div>
    `
  }
  render() {
    this.el.querySelector('.result-title').innerText = this.model.show_title;
    this.el.querySelector('.result-category').innerText = this.model.category;
    this.el.querySelector('.result-rating').innerText = this.model.rating;
    this.el.querySelector('.result-img').src = this.model.poster;
    this.el.querySelector('.result-summary').innerText = this.model.summary;
    this.el.querySelector('.result-actors').innerText = this.model.show_cast;
  }
}
