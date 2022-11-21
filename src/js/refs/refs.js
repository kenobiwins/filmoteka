import { doc } from 'firebase/firestore';

const refs = {
  mainContainer: document.querySelector('.movie-gallery'),
  libraryContainer: document.querySelector('.library__movie-gallery'),
  movieCard: document.getElementsByClassName('movie-card'),
  pagination: document.querySelector('.pagination'),
  form: document.querySelector('.form'),
  formAlert: document.querySelector('.form__alert'),
  modalInfo: document.querySelector('.modal'),
  backdrop: document.querySelector('.backdrop'),
  buttonCloseModal: document.querySelector('[data-modal-close]'),
  addWatchedBtn: document.querySelector('.modal__button[data-value="watched"]'),
  addQueueBtn: document.querySelector('.modal__button[data-value="queue"]'),
  getWatchedDataBtn: document.querySelector('.button-js[data-value="watched"]'),
  getQueueDataBtn: document.querySelector('.button-js[data-value="queue"]'),
  buttonsWrapper: document.querySelector('.form__buttons-wrapper'),
  headerBtnGroup: document.querySelector('.header__button-group'),
  posterWrapper: document.querySelector('.modal__img-wrapper'),
  signUpBtn: document.querySelector('.link[data-action="sign-up"]'),
  backdropRegister: document.querySelector('.backdrop[data-value="sign-up"]'),
  modalRegister: document.querySelector('.modal[data-value="sign-up"]'),
  formRegister: document.querySelector('.signup'),
  formLogin: document.querySelector('.login[data-value="login"]'),
  buttonCloseRegister: document.querySelector(
    '.button-close[data-value="sign-up"]'
  ),
  buttonLogin: document.querySelector('.modal__button[data-action="login"]'),
  buttonLoginWithGoogle: document.querySelector(
    '.modal__button[data-action="login-with-google"]'
  ),
  buttonLogout: document.querySelector('.modal__button[data-action="logout"]'),
  headerNav: document.querySelector('.header__navigation'),
};

export { refs };
