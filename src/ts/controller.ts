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
  }

  private async newsHeadingHandler(event: any): Promise<void> {
    if (event.target.tagName === "A") {
      const newsHeadline: string = event.target.getAttribute("data-news");
      const country: string = this.View.country.value;
      const articles = await this.Model.headlineNewsSearch(
        newsHeadline,
        country
      );
      this.View.showNews(articles);
    }
  }
}

export { Controller };
