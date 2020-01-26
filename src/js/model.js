var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Model {
    constructor(settings) { }
    headlineNewsSearch(heading, country) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${heading}&apiKey=713381feb32347b99d21c75366519bd3`);
            const responseJSON = yield response.json();
            const articles = responseJSON.articles;
            return articles;
        });
    }
    newsSearch(text) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`https://newsapi.org/v2/everything?q=${text}&apiKey=713381feb32347b99d21c75366519bd3`);
            const responseJSON = yield response.json();
            const articles = responseJSON.articles;
            return articles;
        });
    }
}
export { Model };
//# sourceMappingURL=model.js.map