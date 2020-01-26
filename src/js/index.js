import "../sass/style";
import { Model } from "./model";
import { View } from "./view";
import { Controller } from "./controller";
const model = new Model({});
const view = new View({
    newsHeadlines: document.querySelector(".navigation__wrapper-item-link"),
    country: document.querySelector(".form__select-country"),
    cardContainer: document.querySelector(".article__container"),
    newsSearchText: document.querySelector(".form__input-text"),
    form: document.querySelector(".form")
});
const controller = new Controller({
    Model: model,
    View: view
});
//# sourceMappingURL=index.js.map