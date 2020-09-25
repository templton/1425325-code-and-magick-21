'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];

const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

const wizards = [
  {
    name: WIZARD_NAMES[getRandom(7)] + ` ` + WIZARD_SURNAMES[getRandom(7)],
    coatColor: COAT_COLORS[getRandom(6)],
    eyesColor: EYES_COLORS[getRandom(5)]
  },
  {
    name: WIZARD_NAMES[getRandom(7)] + ` ` + WIZARD_SURNAMES[getRandom(7)],
    coatColor: COAT_COLORS[getRandom(6)],
    eyesColor: EYES_COLORS[getRandom(5)]
  },
  {
    name: WIZARD_NAMES[getRandom(7)] + ` ` + WIZARD_SURNAMES[getRandom(7)],
    coatColor: COAT_COLORS[getRandom(6)],
    eyesColor: EYES_COLORS[getRandom(5)]
  },
  {
    name: WIZARD_NAMES[getRandom(7)] + ` ` + WIZARD_SURNAMES[getRandom(7)],
    coatColor: COAT_COLORS[getRandom(6)],
    eyesColor: EYES_COLORS[getRandom(5)]
  }
];

const renderWizard = function (wizard) {
  const wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;
  return wizardElement;
};

const fragment = document.createDocumentFragment();
for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
