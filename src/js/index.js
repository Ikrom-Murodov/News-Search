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
    form: document.querySelector(".form"),
    menuNewsHeadlines: document.querySelector(".navigation-menu__wrapper-link"),
    buttonHamburger: document.querySelector(".menu__wrapper-hamburger-item"),
    navbarMenu: document.querySelector(".navigation-menu__wrapper-content")
});
const controller = new Controller({
    Model: model,
    View: view
});
//# sourceMappingURL=index.js.map