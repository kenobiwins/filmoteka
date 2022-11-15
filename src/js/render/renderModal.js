import { refs } from '../refs/refs';
import { fetchInfoMovieById, fetchGenres } from '../API/API';
import { IMAGES_URL, ALT_IMAGE_URL } from './renderCards';

const el = {
  img: refs.modalInfo.querySelector('.modal__img-wrapper img'),
  originalTitle: refs.modalInfo.querySelector('.modal__title'),
  ratio: refs.modalInfo.querySelector(
    '.modal__ratio-info-list [data-value="ratio"]'
  ),
  popularity: refs.modalInfo.querySelector(
    '.modal__ratio-info-list [data-value="popularity"]'
  ),
  refTitle: refs.modalInfo.querySelector(
    '.modal__ratio-info-list [data-value="original-title"]'
  ),
  genres: refs.modalInfo.querySelector(
    '.modal__ratio-info-list [data-value="genre"]'
  ),
  infoFilm: document.querySelector('.modal__full-info'),
};

async function showInfo(e) {
  e.preventDefault();

  const { target, currentTarget } = e;

  if (target === currentTarget) return;

  const cardId = target.closest('li').getAttribute('data-id');

  if (!cardId) return;

  const response = await fetchInfoMovieById(cardId);
  if (response === undefined || response === null) {
    return;
  }

  const {
    title,
    name,
    vote_average,
    vote_count,
    popularity,
    original_title,
    original_name,
    overview,
    genres,
    poster_path,
  } = response.data;

  el.img.src = IMAGES_URL + poster_path || ALT_IMAGE_URL;
  el.originalTitle.textContent = title.toUpperCase() || name.toUpperCase();
  el.ratio.firstElementChild.textContent = vote_average
    ? vote_average.toFixed(1)
    : "haven't ratio";
  el.ratio.lastElementChild.textContent = vote_count || '';

  el.popularity.textContent = popularity ? popularity.toFixed(1) : '';
  el.refTitle.textContent = title.toUpperCase() || name.toUpperCase();
  el.genres.textContent = genres.map(el => el['name']).join(', ');
  el.infoFilm.textContent = overview || "haven't overview";

  refs.buttonCloseModal.addEventListener('click', closeModalOnBtn);
  refs.backdrop.addEventListener('click', closeModalOnBackdropClick);

  refs.backdrop.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');

  window.addEventListener('keydown', closeModalOnBackdropClick);
}

function closeModalOnBtn(e) {
  refs.buttonCloseModal.removeEventListener('click', closeModalOnBtn);
  refs.backdrop.removeEventListener('click', closeModalOnBtn);
  removeStyles();
  window.removeEventListener('keydown', closeModalOnBackdropClick);
}
function closeModalOnBackdropClick(e) {
  const { target, currentTarget, code } = e;
  if (target === currentTarget) {
    removeStyles();
  }
  if (code === 'Escape') {
    removeStyles();
  }

  window.removeEventListener('keydown', closeModalOnBackdropClick);
}

function removeStyles() {
  refs.backdrop.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
  el.img.src = '#';
}

export { showInfo, closeModalOnBtn, closeModalOnBackdropClick };
