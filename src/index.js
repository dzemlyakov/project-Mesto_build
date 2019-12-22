import  './pages/index.css'
import {
  placesList,
    addCardButton,
    userName,
    userJob,
    newCardForm,
    newCardInputName,
    newCardInputLink, 
    newCardPopupButton,
    newCardErrorName,
    newCardErrorLink,
    editButton,
    editForm,
    editFormInputName,
    editFormInputAbout, 
    editSaveButton, 
    renderCards,
    newCardPop,
    editPop,
    imagePop,
    online, 
} from './scripts/constants.js'
import {noInternet} from './scripts/functions.js'
import {editInputHandler} from './scripts/functions.js'
import {inputHandler} from './scripts/functions.js'
import {infoEditPopup} from './scripts/functions.js'
import {disableButton} from './scripts/functions.js'
import {api} from './scripts/login.js'

const user = {};

api.getUserInfo()
.then((res)=> {
  for (let key in res) {
    if (res.hasOwnProperty(key)) {
      user[key] = res[key]
    } else console.log(`Ошибка ${key}`)
  }
  userName.textContent = res.name;
  userJob.textContent = res.about;
});

api.getInitialCards()
.then((res) => {
    res.forEach(item => {
        renderCards.addCard(item.name, item.link); 
      })
    
});

noInternet(online);

placesList.addEventListener('click', (event) => {
  if (event.target.classList.contains('place-card__image')) {
    imagePop.openImagePopup();
  }
});

newCardForm.addEventListener('input', inputHandler);
newCardForm.addEventListener('submit', (event) => {
  event.preventDefault();
  renderCards.addCard(newCardInputName.value, newCardInputLink.value);
  newCardPop.closePopup();
});

editForm.addEventListener('submit', (event) => {
  api.setUserInfo({
    name: editFormInputName.value,
    about: editFormInputAbout.value
  })
    .then(res => {
      userName.textContent = res.name;
      userJob.textContent = res.about;
    });
  editPop.closePopup();
  disableButton(editSaveButton);
  event.preventDefault();
  
});

editForm.addEventListener('input', editInputHandler);

addCardButton.addEventListener('click', () => {
  newCardPop.openPopup();
  newCardPopupButton.classList.add('popup__button_disabled');
  newCardErrorName.textContent = "";
  newCardErrorLink.textContent = "";
});

editButton.addEventListener('click', () => {
  editPop.openPopup();
  infoEditPopup()
  editSaveButton.classList.add('popup__button_disabled');
});

window.addEventListener('offline', () => {
  window.location.reload();
});

window.addEventListener('online', () => {
  window.location.reload();
});





