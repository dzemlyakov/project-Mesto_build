import {popupImage} from './constants'
import {popupImageFullsize} from './constants'

export class Popup {
    constructor(popup) {
        this.popup = popup;
        this.buttonClose = this.popup.querySelector('.popup__close');
        this.form = this.popup.querySelector('.popup__form');

        this.buttonClose.addEventListener('click', () => {
            this.closePopup()
        });
    }
    openPopup() {
        this.popup.classList.add('popup_is-opened');
    }
    closePopup() {
        this.popup.classList.remove('popup_is-opened');
        if(this.popup.classList.contains('popup_new-card')) {
            this.form.reset();
        }  
    }
    openImagePopup() {
        let image = event.target;
        image = image.style.backgroundImage.slice(5, -2);
        popupImage.classList.add('popup_is-opened');
        popupImageFullsize.src = image;
    }
}