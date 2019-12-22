export class Api {
    constructor(options) {
        this.url = options.URL_BASE;
        this.headers = options.headers;
    }
    sendRequest(url, method, body) {
        return fetch(`${this.url}${url}`, {
                method: method.toUpperCase(), 
                headers: this.headers,
          body: JSON.stringify(body)
            })
        .then(res => {
            if(res.ok) {
              return Promise.resolve(res.json())
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch((err)=> {
            console.log(`Ошибка: ${err.status}`);
        })
      }
    
    getInitialCards() {
        return this.sendRequest('/cards','GET'); 
      }
    
    getUserInfo() {
        return this.sendRequest('/users/me', 'GET');
      }
  
    setUserInfo(body) {
        return this.sendRequest('/users/me', 'PATCH', body);
    }    
}









