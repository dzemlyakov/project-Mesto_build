import {Api} from './Api.js'
const serverUrl = NODE_ENV === 'development' ? 'http://praktikum.tk/cohort5' : 'https://praktikum.tk/cohort5'
const url = {
    URL_BASE: serverUrl,
    TOKEN: '83481d9c-7872-40df-af71-ec567ff51fc9',
}
const api = new Api({
  URL_BASE: url.URL_BASE,
  headers: {
    authorization: url.TOKEN,
    'Content-Type': 'application/json'
  }
});

export {api}