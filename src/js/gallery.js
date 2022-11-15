import { fetchTrendingMovies, fetchMovies } from './API/API';
import { refs } from './refs/refs';
import { renderCards, insertMarkup } from './render/renderCards';
import {
  pagination,
  paginationOnSearch,
  paginationSelect,
} from './helpers/pagination';
import { showInfo } from './render/renderModal';

let PAGE = 1;

if (document.title === 'Filmoteka') {
  window.addEventListener('DOMContentLoaded', onLoad());
  refs.form.addEventListener('submit', onSearch);

  return;
} else {
  return;
}

async function onLoad() {
  const response = await fetchTrendingMovies(PAGE);

  pagination(response.data.page, response.data.total_pages);
  insertMarkup(refs.mainContainer, await renderCards(response.data));

  refs.pagination.addEventListener('click', paginationSelect);
  refs.mainContainer.addEventListener('click', showInfo);
}

async function onSearch(e) {
  e.preventDefault();

  const {
    target: { searchQuery },
    currentTarget,
  } = e;

  const response = await fetchMovies(searchQuery.value, PAGE);

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
  refs.pagination.removeEventListener('click', paginationSelect);
  refs.pagination.addEventListener('click', paginationOnSearch);

  pagination(response.data.page, response.data.total_pages);
  insertMarkup(refs.mainContainer, await renderCards(response.data));
}

export { PAGE };
