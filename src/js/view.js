class View {
    constructor(settings) {
        this.newsHeadlines = settings.newsHeadlines;
        this.country = settings.country;
        this.cardContainer = settings.cardContainer;
    }
    showNews(articles) {
        this.cardContainer.innerText = "";
        articles.map(elements => {
            this.cardContainer.appendChild(this.cardsTemplate(elements.urlToImage, elements.title, elements.description, elements.url));
        });
    }
    cardsTemplate(imgUrl, title, description, url) {
        const card = document.createElement("div");
        card.className = "card-news article__card-news";
        card.innerHTML = `
      <div class="card-news__wrapper-content">
        <div class="card-news__wrapper-img">
          <img class="card-news__img" src="${imgUrl}" alt=""/>
        </div>
        <div class="card-news__content">
          <div class="card-news__wrapper-title">
            <h3 class="card-news__title">${title || ""}</h3>
          </div>
          <hr style="width: 100%; margin-top: 1rem;" />
          <div class="card-news__wrapper-description">
            <p class="card-news__description">${description || ""}</p>
          </div>
          <div class="card-news__wrapper-link">
            <a href="${url}" target="_blank" class="card-news__link animation-button__link">Узнать больше</a>
          </div>
        </div>
      </div>`;
        return card;
    }
}
export { View };
//# sourceMappingURL=view.js.map