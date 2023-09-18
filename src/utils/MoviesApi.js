class MoviesApi {
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

  getMovies() {
    return fetch(`${this._url}`, {
      method: 'GET',
      headers: {
        'Content-Type':
          'application/json',
      },
    }).then((res) =>
      this._requestResult(res)
    );
  }
}

const moviesApi = new MoviesApi({
  url: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default moviesApi;
