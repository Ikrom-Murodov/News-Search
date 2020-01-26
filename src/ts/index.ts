import "../sass/style";

import { Model } from "./model";

import { View } from "./view";

import { Controller } from "./controller";

const model: Model = new Model({});

const view: View = new View({
  newsHeadlines: document.querySelector(".navigation__wrapper-item-link"),
  country: document.querySelector(".form__select-country"),
  cardContainer: document.querySelector(".article__container")
});

const controller: Controller = new Controller({
  Model: model,
  View: view
});
