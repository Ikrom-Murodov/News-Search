var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Controller {
    constructor(settings) {
        this.Model = settings.Model;
        this.View = settings.View;
        this.init();
    }
    init() {
        this.View.newsHeadlines.addEventListener("click", this.newsHeadingHandler.bind(this));
        this.View.form.addEventListener("submit", this.formHandler.bind(this));
        this.View.menuNewsHeadlines.addEventListener("click", this.newsHeadingHandler.bind(this));
        this.View.buttonHamburger.addEventListener("click", this.navigationMenuHandler.bind(this));
    }
    newsHeadingHandler(event) {
        return __awaiter(this, void 0, void 0, function* () {
            if (event.target.tagName === "A") {
                this.navigationMenuHandler(event);
                const newsHeadline = event.target.getAttribute("data-news");
                const country = this.View.country.value;
                const articles = yield this.Model.headlineNewsSearch(newsHeadline, country);
                this.View.showNews(articles);
            }
        });
    }
    formHandler(event) {
        return __awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            const text = this.View.newsSearchText.value;
            if (text === "") {
                return;
            }
            else {
                const articles = yield this.Model.newsSearch(text);
                this.View.showNews(articles);
                this.View.newsSearchText.value = "";
            }
        });
    }
    navigationMenuHandler(event) {
        this.View.navbarMenu.classList.toggle("show");
    }
}
export { Controller };
//# sourceMappingURL=controller.js.map