'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 25;
const userDialog = document.querySelector(`.setup`);
const userDialogOpen = document.querySelector(`.setup-open`);
const userDialogClose = document.querySelector(`.setup-close`);
// открытие/закрытие окна выбора персонажа
const onPopupEscPress = (evt) => {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    closePopup();
  }
};
const openPopup = () => {
  userDialog.classList.remove(`hidden`);
  document.addEventListener(`keydown`, onPopupEscPress);
};
const closePopup = () => {
  userDialog.classList.add(`hidden`);
  document.addEventListener(`keydown`, onPopupEscPress);
};

userDialogOpen.addEventListener(`click`, () => {
  openPopup();
});
userDialogOpen.addEventListener(`keydown`, (evt) => {
  if (evt.key === `Enter`) {
    openPopup();
  }
});
userDialogClose.addEventListener(`click`, () => {
  closePopup();
});
userDialogClose.addEventListener(`keydown`, (evt) => {
  if (evt.key === `Enter`) {
    closePopup();
  }
});

const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);

function getRandom(max) {
  return Math.floor(Math.random() * max);
}
const wizards = [
  {
    name: `${WIZARD_NAMES[getRandom(WIZARD_NAMES.length)]} ${WIZARD_SURNAMES[getRandom(WIZARD_SURNAMES.length)]}`,
    coatColor: COAT_COLORS[getRandom(COAT_COLORS.length)],
    eyesColor: EYES_COLORS[getRandom(EYES_COLORS.length)]
  },
  {
    name: `${WIZARD_NAMES[getRandom(WIZARD_NAMES.length)]} ${WIZARD_SURNAMES[getRandom(WIZARD_SURNAMES.length)]}`,
    coatColor: COAT_COLORS[getRandom(COAT_COLORS.length)],
    eyesColor: EYES_COLORS[getRandom(EYES_COLORS.length)]
  },
  {
    name: `${WIZARD_NAMES[getRandom(WIZARD_NAMES.length)]} ${WIZARD_SURNAMES[getRandom(WIZARD_SURNAMES.length)]}`,
    coatColor: COAT_COLORS[getRandom(COAT_COLORS.length)],
    eyesColor: EYES_COLORS[getRandom(EYES_COLORS.length)]
  },
  {
    name: `${WIZARD_NAMES[getRandom(WIZARD_NAMES.length)]} ${WIZARD_SURNAMES[getRandom(WIZARD_SURNAMES.length)]}`,
    coatColor: COAT_COLORS[getRandom(COAT_COLORS.length)],
    eyesColor: EYES_COLORS[getRandom(EYES_COLORS.length)]
  }
];
const renderWizard = (wizard) => {
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
// валидация формы имени создания персонажа
const usernameInput = document.querySelector(`.setup-user-name`);

usernameInput.addEventListener(`input`, () => {
  const valueLength = usernameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    usernameInput.setCustomValidity(`'Ещё ${(MIN_NAME_LENGTH - valueLength)} симв.`);
  } else if (valueLength > MIN_NAME_LENGTH) {
    usernameInput.setCustomValidity(`Удалите лишние ${(valueLength - MAX_NAME_LENGTH)} симв.`);
  } else {
    usernameInput.setCustomValidity(``);
  }
  usernameInput.reportValidity();
});
// смена цветов по клику на волшебника
const setupWizard = document.querySelector(`.setup-wizard`);
const setupPlayer = document.querySelector(`.setup-player`);
const wizardCoat = setupWizard.querySelector(`.wizard-coat`);
const wizardCoatInput = setupPlayer.querySelector(`[name="coat-color"]`);
const wizardEyes = setupWizard.querySelector(`.wizard-eyes`);
const wizardEyesInput = setupPlayer.querySelector(`[name="eyes-color"]`);
const wizardFireball = document.querySelector(`.setup-fireball-wrap`);
const wizardFireballInput = wizardFireball.querySelector(`input`);

const getRandomFromArray = (array) => {
  return array[getRandom(array.length - 1)];
};

const setWizardColors = (wizardElement, wizardInput, array, field = `fill`) => {
  const color = getRandomFromArray(array);
  wizardElement.style[field] = color;
  wizardInput.value = color;
};

wizardCoat.addEventListener(`click`, () => setWizardColors(wizardCoat, wizardCoatInput, COAT_COLORS));
wizardEyes.addEventListener(`click`, () => setWizardColors(wizardEyes, wizardEyesInput, EYES_COLORS));
wizardFireball.addEventListener(`click`, () => setWizardColors(wizardFireball, wizardFireballInput, FIREBALL_COLORS, `backgroundColor`));
