import {Card} from './Card.js'
import {disableButton} from './functions.js'
import {newCardPopupButton} from './constants.js'

export class CardList {
    constructor(container) {
        this.container = container;
        
    }
    addCard(name, link) {
        const { cardElement } = new Card(name, link);
        this.container.appendChild(cardElement);
        disableButton(newCardPopupButton);
    }
}

