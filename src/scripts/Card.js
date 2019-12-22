export class Card {
    constructor(name, link) {
        this.name = name;
        this.link = link;
        this.cardElement = this.create();

        this.cardLike = this.like.bind(this);
        this.cardDelete = this.remove.bind(this);

        this.deleteButton = this.cardElement.querySelector('.place-card__delete-icon');
        this.likeButton = this.cardElement.querySelector('.place-card__like-icon');

        this.likeButton.addEventListener('click', this.cardLike);
        if(!!this.deleteButton) {
        this.deleteButton.addEventListener('click', this.cardDelete);
    }
}
    remove() {
       this.cardElement.remove();
    }
    like() {
        this.likeButton.classList.toggle('place-card__like-icon_liked');
    }
    create() {
         const placeCard = document.createElement("div");
         placeCard.classList.add("place-card");
         placeCard.innerHTML = `
      <div class="place-card__image">
        <button class="place-card__delete-icon"></button>
      </div>
      <div class="place-card__description">
        <h3 class="place-card__name"></h3>
        <button class="place-card__like-icon"></button>
      </div>`;
        placeCard.querySelector(".place-card__name").textContent = this.name;
        placeCard.querySelector(".place-card__image").style.backgroundImage = `url(${this.link})`;
    
      
        return placeCard;
        
    }
}
