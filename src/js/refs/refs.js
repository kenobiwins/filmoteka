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
  addWatchedBtn: document.querySelector('[data-value="watched"]'),
  addQueueBtn: document.querySelector('[data-value="queue"]'),
  getWatchedDataBtn: document.querySelector('.button-js[data-value="watched"]'),
  getQueueDataBtn: document.querySelector('.button-js[data-value="queue"]'),
};

export { refs };
