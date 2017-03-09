export default class NetflixResultView {
  constructor(el, model) {
    this.el = el;
    this.model = model;
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
