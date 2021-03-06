interface IArticles {
  source: { id: string; name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface IView {
  country: HTMLSelectElement;
  newsHeadlines: HTMLDivElement;
  cardContainer: HTMLDivElement;
  newsSearchText: HTMLInputElement;
  form: HTMLFormElement;
  menuNewsHeadlines: HTMLDivElement;
  buttonHamburger: HTMLDivElement;
  navbarMenu: HTMLDivElement;
}

class View {
  readonly country: HTMLSelectElement;
  readonly newsHeadlines: HTMLDivElement;
  readonly newsSearchText: HTMLInputElement;
  readonly form: HTMLFormElement;
  readonly menuNewsHeadlines: HTMLDivElement;
  readonly buttonHamburger: HTMLDivElement;
  readonly navbarMenu: HTMLDivElement;
  private cardContainer: HTMLDivElement;

  constructor(settings: IView) {
    this.newsHeadlines = settings.newsHeadlines;
    this.country = settings.country;
    this.cardContainer = settings.cardContainer;
    this.form = settings.form;
    this.newsSearchText = settings.newsSearchText;
    this.menuNewsHeadlines = settings.menuNewsHeadlines;
    this.buttonHamburger = settings.buttonHamburger;
    this.navbarMenu = settings.navbarMenu;
  }

  public showNews(articles: Array<IArticles>): void {
    this.cardContainer.innerText = "";
    articles.map(elements => {
      this.cardContainer.appendChild(
        this.cardsTemplate(
          elements.urlToImage,
          elements.title,
          elements.description,
          elements.url
        )
      );
    });
  }

  private cardsTemplate(
    imgUrl: string,
    title: string,
    description: string,
    url: string
  ): HTMLDivElement {
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
