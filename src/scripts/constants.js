import {Popup} from './Popup.js'
import {CardList} from './CardList.js'

const placesList = document.querySelector('.places-list');
const addCardButton = document.querySelector('.user-info__button');
const userName = document.querySelector('.user-info__name');
const userJob = document.querySelector('.user-info__job');

const newCardForm = document.forms.new;
const newCardInputName = newCardForm.elements.name;
const newCardInputLink = newCardForm.elements.link; 
const newCardPopup = document.querySelector('.popup_new-card');
const newCardClose = newCardPopup.querySelector('.popup__close');
const newCardPopupButton = newCardPopup.querySelector('.popup__button');
      newCardPopupButton.setAttribute('disabled', true);
const newCardErrorName = newCardInputName.nextElementSibling;
const newCardErrorLink = newCardInputLink.nextElementSibling;
      
   
const editButton = document.querySelector('.user-info__button-edit');
const editPopup = document.querySelector('.popup_edit-info');
const editClosePopup = editPopup.querySelector('.popup__close');
const editForm = document.forms.edit;
const editFormInputName = editForm.elements.name;
const editFormInputAbout = editForm.elements.about;    
const editSaveButton = editForm.querySelector('.popup__button');
      editSaveButton.setAttribute('disabled', true);
const popupErrorName = editFormInputName.nextElementSibling;
const popupErrorAbout = editFormInputAbout.nextElementSibling;
    

const popupImage = document.querySelector('.popup_image');
const closeImageButton = popupImage.querySelector('.popup__close');
const popupImageFullsize = popupImage.querySelector('.popup__image-fullsize');      
 
const ERROR_REQUIRED_FIELD = 'Это обязательное поле';
const ERROR_NOT_ENOUGH_SYMBOLS = 'Должно быть от 2 до 30 символов';
const ERROR_NOT_A_LINK = 'Здесь должна быть ссылка';

const renderCards = new CardList(placesList);
const newCardPop = new Popup(newCardPopup);
const editPop = new Popup(editPopup);
const imagePop = new Popup(popupImage);

const online = window.navigator.onLine;
const internet = document.querySelector('.internet-error');
const noInternetImage = document.querySelector('.user-info__photo');
  
export {
    placesList,
    addCardButton,
    userName,
    userJob,
    newCardForm,
    newCardInputName,
    newCardInputLink, 
    newCardPopup,
    newCardClose,
    newCardPopupButton,
    newCardErrorName,
    newCardErrorLink,
    editButton,
    editPopup,
    editClosePopup,
    editForm,
    editFormInputName,
    editFormInputAbout, 
    editSaveButton, 
    popupErrorName,
    popupErrorAbout,
    popupImage,
    closeImageButton,
    popupImageFullsize,
    ERROR_REQUIRED_FIELD,
    ERROR_NOT_ENOUGH_SYMBOLS,
    ERROR_NOT_A_LINK,
    renderCards,
    newCardPop,
    editPop,
    imagePop,
    online, 
    internet,
    noInternetImage
}



