export const PC_SCREEN_WIDTH = 1000;
export const TABLET_SCREEN_WIDTH = 768;
export const MOBILE_SCREEN_WIDTH = 550;
export const regExpUserName =
  /^[a-zA-Zа-яА-ЯёЁ\s-]{2,30}$/;
export const regExpEmail = /^\S+@\S+\.\S+$/;
export const regExpPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export const successMessages = {
  register: 'Регистрация завершена!',
  login: 'Добро пожаловать!',
  profileEditing:
    'Информация обновлена!',
};
export const errorMessages = {
  emailAlreadyExists:
    'Пользователь с таким E-mail уже существует',
  incorrectNameOrPass:
    'Неверный E-mail или пароль',
};
