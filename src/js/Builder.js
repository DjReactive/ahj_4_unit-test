import Banking, { banks } from './Banking';
import Checker from './Checker';

export default class Builder {
  constructor() {
    this.input = document.querySelector('.input');
    this.button = document.querySelector('.button');
    this.divCards = document.querySelector('.cards');
    this.errorSpan = document.querySelector('.message');
  }

  init() {
    this.visibleBankImage = this.visibleBankImage.bind(this);
    this.checkValidResult = this.checkValidResult.bind(this);
    this.input.addEventListener('input', (event) => {
      // console.log(event.currentTarget.value);
      Banking.checkInput(event.currentTarget.value, this.visibleBankImage);
    });
    this.button.addEventListener('click', () => Checker.validate(this.input.value, this.checkValidResult));

    this.createBankImages(banks);
  }

  createBankImages(images) {
    Object.values(images).forEach((img) => {
      const imgElement = document.createElement('img');
      imgElement.setAttribute('src', `images/${img}.png`);
      imgElement.setAttribute('id', `image-${img}`);
      imgElement.setAttribute('class', 'card_image');
      this.divCards.appendChild(imgElement);
    });
  }

  visibleBankImage(bank) {
    const images = this.divCards.getElementsByClassName('card_image');
    const bankImg = (bank !== '') ? document.getElementById(`image-${bank}`) : '';

    Array.from(images).forEach((image) => {
      if (image === bankImg) bankImg.classList.add('colorize');
      else image.classList.remove('colorize');
    });
  }

  checkValidResult(obj) {
    this.errorSpan.classList.remove((obj.error) ? 'succefull' : 'error');
    this.errorSpan.classList.add((!obj.error) ? 'succefull' : 'error');
    this.errorSpan.textContent = obj.message;
  }
}
