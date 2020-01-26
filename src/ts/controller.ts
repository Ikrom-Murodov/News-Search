import { Model } from "./model";
import { View } from "./view";

interface IController {
  Model: Model;
  View: View;
}

class Controller {
  private Model: Model;
  private View: View;

  constructor(settings: IController) {
    this.Model = settings.Model;
    this.View = settings.View;

    this.init();
  }

  private init() {
    this.View.newsHeadlines.addEventListener(
      "click",
      this.newsHeadingHandler.bind(this)
    );
    this.View.form.addEventListener("submit", this.formHandler.bind(this));
    this.View.menuNewsHeadlines.addEventListener(
      "click",
      this.newsHeadingHandler.bind(this)
    );
    this.View.buttonHamburger.addEventListener(
      "click",
      this.navigationMenuHandler.bind(this)
    );
  }

  private async newsHeadingHandler(event: any): Promise<void> {
    if (event.target.tagName === "A") {
      this.navigationMenuHandler(event);

      const newsHeadline: string = event.target.getAttribute("data-news");
      const country: string = this.View.country.value;
      const articles = await this.Model.headlineNewsSearch(
        newsHeadline,
        country
      );
      this.View.showNews(articles);
    }
  }
  private async formHandler(event: Event): Promise<void> {
    event.preventDefault();
    const text: string = this.View.newsSearchText.value;
    if (text === "") {
      return;
    } else {
      const articles = await this.Model.newsSearch(text);
      this.View.showNews(articles);
      this.View.newsSearchText.value = "";
    }
  }

  navigationMenuHandler(event: Event): void {
    this.View.navbarMenu.classList.toggle("show");
  }
}

export { Controller };
