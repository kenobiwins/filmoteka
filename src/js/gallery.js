import Notiflix from 'notiflix';
import { fetchTrendingMovies, fetchMovies } from './API/API';
import { refs } from './refs/refs';
import { renderCards, insertMarkup } from './render/renderCards';
import { showInfo } from './render/renderModal';

let PAGE = 1;
const mqMoreThanMobile = window.matchMedia('(min-width: 768px)').matches;

if (document.title === 'Filmoteka') {
  window.addEventListener('DOMContentLoaded', onLoad());
  refs.form.addEventListener('submit', onSearch);

  return;
} else {
  return;
}

async function onLoad() {
  Notiflix.Loading.standard();
  const response = await fetchTrendingMovies(PAGE);

  pagination(response.data.page, response.data.total_pages);
  insertMarkup(refs.mainContainer, await renderCards(response.data));
  Notiflix.Loading.remove();
  refs.pagination.addEventListener('click', paginationSelect);
  refs.mainContainer.addEventListener('click', showInfo);
}

async function onSearch(e) {
  e.preventDefault();

  const {
    target: { searchQuery },
    currentTarget,
  } = e;

  if (searchQuery.value === '') {
    Notiflix.Notify.info('Type something...');
    return;
  }
  Notiflix.Loading.standard('looking for movies');
  const response = await fetchMovies(searchQuery.value, PAGE);
  Notiflix.Loading.remove(500);
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

function pagination(page, pages) {
  let markup = '';

  PAGE = page;
  const beforeTwoPage = page - 2;
  const beforeOnePage = page - 1;
  const afterOnePage = page + 1;
  const afterTwoPage = page + 2;
  // &#129144;<
  // &#129146;>
  if (page > 1) {
    if (mqMoreThanMobile) {
      markup += `<li class='pagination__item' data-action='prev'>&#129144;</li>`;
      markup += `<li class='pagination__item'>1</li>`;
    } else {
      markup += `<li class='pagination__item' data-action='prev'>&#129144;</li>`;
    }
  }
  if (page > 4) {
    if (mqMoreThanMobile) {
      markup += `<li class='pagination__item'>...</li>`;
    }
  }
  if (!mqMoreThanMobile && page >= 3) {
    markup += `<li class='pagination__item'>${beforeTwoPage}</li>`;
  } else if (page > 3) {
    markup += `<li class='pagination__item'>${beforeTwoPage}</li>`;
  }
  if (!mqMoreThanMobile && page >= 2) {
    markup += `<li class='pagination__item'>${beforeOnePage}</li>`;
  } else if (page > 2) {
    markup += `<li class='pagination__item'>${beforeOnePage}</li>`;
  }
  markup += `<li class='pagination__item pagination__current-page'>${PAGE}</li>`;
  if (!mqMoreThanMobile && pages - 1 >= PAGE) {
    markup += `<li class='pagination__item'>${afterOnePage}</li>`;
  } else if (pages - 1 > PAGE) {
    markup += `<li class='pagination__item'>${afterOnePage}</li>`;
  }
  if (!mqMoreThanMobile && pages - 2 >= PAGE) {
    markup += `<li class='pagination__item'>${afterTwoPage}</li>`;
  } else if (pages - 2 > PAGE) {
    markup += `<li class='pagination__item'>${afterTwoPage}</li>`;
  }
  if (pages - 3 > PAGE) {
    if (mqMoreThanMobile) {
      markup += `<li class='pagination__item'>...</li>`;
    }
  }
  if (pages > PAGE) {
    if (mqMoreThanMobile) {
      markup += `<li class='pagination__item'>${pages}</li>`;
      markup += `<li class='pagination__item' data-action='next'>&#129146;</li>`;
    } else {
      markup += `<li class='pagination__item' data-action='next'>&#129146;</li>`;
    }
  }
  refs.pagination.innerHTML = markup;
}

async function paginationSelect(e) {
  const { target, currentTarget } = e;
  if (target === currentTarget || target === '...') {
    return;
  }
  if (target.dataset.action === 'next') {
    PAGE += 1;
    const response = await fetchTrendingMovies(PAGE);
    insertMarkup(refs.mainContainer, await renderCards(response.data));
    pagination(response.data.page, response.data.total_pages);
    return;
  }
  if (target.dataset.action === 'prev') {
    PAGE -= 1;
    const response = await fetchTrendingMovies(PAGE);
    insertMarkup(refs.mainContainer, await renderCards(response.data));
    pagination(response.data.page, response.data.total_pages);
    return;
  }
  PAGE = Number(target.textContent);
  const response = await fetchTrendingMovies(PAGE);
  insertMarkup(refs.mainContainer, await renderCards(response.data));
  pagination(response.data.page, response.data.total_pages);
}

async function paginationOnSearch(e) {
  const { target, currentTarget } = e;
  if (target === currentTarget || target === '...') {
    return;
  }
  if (target.dataset.action === 'next') {
    PAGE += 1;
    const response = await fetchMovies(refs.form.searchQuery.value, PAGE);
    insertMarkup(refs.mainContainer, await renderCards(response.data));
    pagination(response.data.page, response.data.total_pages);
    return;
  }
  if (target.dataset.action === 'prev') {
    PAGE -= 1;
    const response = await fetchMovies(refs.form.searchQuery.value, PAGE);
    insertMarkup(refs.mainContainer, await renderCards(response.data));
    pagination(response.data.page, response.data.total_pages);
    return;
  }
  PAGE = Number(target.textContent);
  const response = await fetchMovies(refs.form.searchQuery.value, PAGE);
  insertMarkup(refs.mainContainer, await renderCards(response.data));
  pagination(response.data.page, response.data.total_pages);
}
