interface IModel {}

interface IResponseJSON {
  status: string;
  totalResults: number;
  articles: Array<IArticles>;
}

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

class Model {
  constructor(settings: IModel) {}

  public async headlineNewsSearch(
    heading: string,
    country: string
  ): Promise<Array<IArticles>> {
    const response: Response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${heading}&apiKey=713381feb32347b99d21c75366519bd3`
    );
    const responseJSON: IResponseJSON = await response.json();
    const articles: Array<IArticles> = responseJSON.articles;
    return articles;
  }
}

export { Model };
