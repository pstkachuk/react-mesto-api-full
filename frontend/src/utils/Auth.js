class Auth {
  constructor({baseUrl}) {
    this._baseUrl = baseUrl;
  }

  _requestIsOk(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка - ${res.status}`);
  }

  registration(email, password) {
    return fetch(
      `${this._baseUrl}/signup`,
      {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
          email,
          password
        })
      }
    )
    .then(this._requestIsOk);
  }

  authorization(email, password) {
    return fetch(
      `${this._baseUrl}/signin`,
      {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        credentials: 'include',
        body: JSON.stringify({
          email,
          password
        })
      }
    )
    .then(this._requestIsOk);
  }

  logout() {
    return fetch(
      `${this._baseUrl}/signout`,
      {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        credentials: 'include',       
      }
    )
    .then(this._requestIsOk);
  }

  tokenCheck() {
    return fetch(
      `${this._baseUrl}/users/me`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      }
    )
    .then(this._requestIsOk);
  }
}

const auth = new Auth({baseUrl: 'http://localhost:3000'});

export default auth;