import {
  fetchTrendingMovies,
  fetchGenres,
  fetchMovies,
  fetchInfoMovieById,
} from './API/API';
import { refs } from './refs/refs';
import {
  renderCards,
  insertMarkup,
  IMAGES_URL,
  ALT_IMAGE_URL,
} from './render/renderCards';
import { pagination, paginationSelect } from './helpers/pagination';

let PAGE = 1;

window.addEventListener('DOMContentLoaded', onLoad);
refs.pagination.addEventListener('click', paginationSelect);
refs.form.addEventListener('submit', onSearch);

async function onLoad() {
  const response = await fetchTrendingMovies(PAGE);

  pagination(response.data.page, response.data.total_pages);
  insertMarkup(refs.mainContainer, await renderCards(response.data));

  refs.mainContainer.addEventListener('click', showInfo);
}

async function onSearch(e) {
  e.preventDefault();

  const {
    target: { searchQuery },
    currentTarget,
  } = e;

  const response = await fetchMovies(searchQuery.value);

  if (
    response.data.results === 0 ||
    !response.data.results ||
    response.data.results.length === 0
  ) {
    searchQuery.value = '';
    refs.formAlert.classList.remove('visually-hidden');
    setTimeout(() => {
      refs.formAlert.classList.add('visually-hidden');
    }, 3000);
    return;
  }

  pagination(response.data.page, response.data.total_pages);
  insertMarkup(refs.mainContainer, await renderCards(response.data));
}

async function showInfo(e) {
  e.preventDefault();

  const { target, currentTarget } = e;

  if (target === currentTarget) return;

  const cardId = target.closest('li').getAttribute('data-id');

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
  el.originalTitle.textContent = title || name;
  el.ratio.textContent = `${
    vote_average ? vote_average.toFixed(1) : "haven't ratio"
  }/${vote_count || ''}`;
  el.popularity.textContent = popularity ? popularity.toFixed(1) : '';
  el.refTitle.textContent = original_title || original_name;
  el.genres.textContent = genres.map(el => el['name']).join(', ');
  el.infoFilm.textContent = overview || "haven't overview";

  refs.buttonCloseModal.addEventListener('click', toggleModal);
  refs.backdrop.classList.remove('is-hidden');
}

function toggleModal(e) {
  refs.backdrop.classList.add('is-hidden');
  refs.buttonCloseModal.removeEventListener('click', toggleModal);
}
