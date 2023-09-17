export const BASE_URL =
  'https://api.moviess.nomoredomainsicu.ru';

const getResponse = (res) => {
  return res.ok
    ? res.json()
    : Promise.reject(
        `Ошибка: ${res.status}`
      );
};

export const register = (
  email,
  password,
  name
) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type':
        'application/json',
    },
    body: JSON.stringify({
      email,
      password,
      name,
    }),
  }).then(getResponse);
};

export const login = (
  email,
  password
) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type':
        'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then(getResponse);
};

export const getUserInfo = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type':
        'application/json',
      Authorization: token,
    },
  }).then(getResponse);
};

export const updateUserInfo = (
  token,
  userData
) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type':
        'application/json',
      Authorization: token,
    },
    body: JSON.stringify(userData),
  }).then(getResponse);
};

export const getSavedMovies = (
  token
) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type':
        'application/json',
      Authorization: token,
    },
  }).then(getResponse);
};

export const saveMovie = (
  token,
  movie
) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type':
        'application/json',
      Authorization: token,
    },
    body: JSON.stringify(movie),
  }).then(getResponse);
};

export const deleteSavedMovie = (
  token,
  id
) => {
  return fetch(
    `${BASE_URL}/movies/${id}`,
    {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type':
          'application/json',
        Authorization: token,
      },
    }
  ).then(getResponse);
};