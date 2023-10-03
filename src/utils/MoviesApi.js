import { checkResponse } from './MainApi';

const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

export const getAllMovies = () => {
  return fetch(`${BASE_URL}`).then((res) => checkResponse(res));
};
