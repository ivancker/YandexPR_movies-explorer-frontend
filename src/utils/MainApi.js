class Api {
  constructor({ url }) {
    this._url = url;
  }

  _responseResult(res) {
    if (res.ok) {
      return res.json();
    } else {
      Promise.reject(
        `Ошибка: ${res.status} ${res.statusText}`
      );
    }
  }

  registerUser(name, email, password) {
    return fetch(
      `${this._url}/signup`,
      {
        method: 'POST',
        headers: {
          'Content-Type':
            'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    ).then((res) =>
      this._responseResult(res)
    );
  }

  login(email, password) {
    return fetch(
      `${this._url}/signin`,
      {
        method: 'POST',
        headers: {
          'Content-Type':
            'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    ).then((res) =>
      this._responseResult(res)
    );
  }

  getUserInfo() {
    return fetch(
      `${this._url}/users/me`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem(
            'jwt'
          )}`,
        },
      }
    ).then((res) =>
      this._responseResult(res)
    );
  }

  updateUser(name, email) {
    return fetch(
      `${this._url}/users/me`,
      {
        method: 'PATCH',
        headers: {
          authorization: `Bearer ${localStorage.getItem(
            'jwt'
          )}`,
          'Content-Type':
            'application/json',
        },
        body: JSON.stringify({
          name,
          email,
        }),
      }
    ).then((res) =>
      this._responseResult(res)
    );
  }

  getSavedMovies() {
    return fetch(
      `${this._url}/movies`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem(
            'jwt'
          )}`,
        },
      }
    ).then((res) =>
      this._responseResult(res)
    );
  }

  addNewMovie(data) {
    return fetch(
      `${this._url}/movies`,
      {
        method: 'POST',
        headers: {
          authorization: `Bearer ${localStorage.getItem(
            'jwt'
          )}`,
          'Content-Type':
            'application/json',
        },
        body: JSON.stringify({
          country: data.country,
          director: data.director,
          duration: data.duration,
          year: data.year,
          description: data.description,
          image: data.image,
          trailerLink: data.trailerLink,
          thumbnail: data.thumbnail,
          movieId: data.id,
          nameRU: data.nameRU,
          nameEN: data.nameEN,
        }),
      }
    ).then((res) =>
      this._responseResult(res)
    );
  }

  deleteMovie(data) {
    return fetch(
      `${this._url}/movies/${data}`,
      {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${localStorage.getItem(
            'jwt'
          )}`,
        },
      }
    ).then((res) =>
      this._responseResult(res)
    );
  }
}

const mainApi = new Api({
  url: 'https://api.moviess.nomoredomainsicu.ru',
});

export default mainApi;
