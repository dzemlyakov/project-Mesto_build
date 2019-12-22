import {
    newCardPopupButton,
    addCardButton,
    newCardInputName,
    newCardInputLink, 
    editButton,
    editSaveButton,
    editFormInputName,
    editFormInputAbout,
    userName,
    userJob,
    popupErrorName,
    popupErrorAbout,
    ERROR_REQUIRED_FIELD,
    ERROR_NOT_ENOUGH_SYMBOLS,
    ERROR_NOT_A_LINK,
    internet,
    noInternetImage
} from './constants'
  
  function disableButton(button) {
    button.setAttribute('disabled', true);
    button.classList.remove('popup__button_active');
    button.classList.add('popup__button_disabled');
  }
  function hiddenButton(button) {
  button.setAttribute("style", "display:none;");
  }
  function showConnectionError(int) {
  int.classList.add('internet-error_active');
  }
  function changePhotoInt(im) {
    im.setAttribute("style", "background-image: url(./images/no_conection.png)")
  } 

  function noInternet(bool) {
    if (!bool) {
      console.log('Нет подключения к сети');
      changePhotoInt(noInternetImage);
      showConnectionError(internet);
      hiddenButton(addCardButton);
      hiddenButton(editButton);
     } 
  }
  function infoEditPopup() {
    editFormInputName.value = userName.textContent;
    editFormInputAbout.value = userJob.textContent;
    popupErrorName.textContent = "";
    popupErrorAbout.textContent = "";
   }
  function enableButton(button) {
        button.removeAttribute('disabled');
        button.classList.remove('popup__button_disabled');
        button.classList.add('popup__button_active');
  }
  
  function inputHandler() {
    const fieldTitle = validateField(newCardInputName);
    const fieldLink = validateField(newCardInputLink);
   if (!fieldTitle || !fieldLink)  {
      disableButton(newCardPopupButton);
     }
      else enableButton(newCardPopupButton);
  }
  
  function editInputHandler() {
    const fieldName = validateField(editFormInputName);
    const fieldAbout = validateField(editFormInputAbout);
   if (!fieldName || !fieldAbout) {
     disableButton(editSaveButton);
    }
     else enableButton(editSaveButton);
  }
  
  function validateField(field) {
    const fieldError = field.nextElementSibling
    if (!field.value.length) {
      fieldError.textContent = ERROR_REQUIRED_FIELD; 
      return false;
    } else if (field.name !== 'link' && (field.value.length < 2 || field.value.length >= 30)) {
      fieldError.textContent = ERROR_NOT_ENOUGH_SYMBOLS;
      return false;
     } else if (field.name === 'link' && field.validity.typeMismatch) {
        fieldError.textContent = ERROR_NOT_A_LINK;
        return false;  
    }  else {
      fieldError.textContent = "";
      return true;
    }
  }
  export {disableButton}
  export {noInternet}
  export {editInputHandler}
  export {inputHandler}
  export {infoEditPopup}