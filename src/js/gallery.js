import { fetchTrendingMovies, fetchGenres, fetchMovies } from './API/API';
import { refs } from './refs/refs';
import { renderCards, insertMarkup } from './render/renderCards';

let PAGE = 1;

window.addEventListener('DOMContentLoaded', onLoad);
refs.pagination.addEventListener('click', paginationSelect);
refs.form.addEventListener('submit', onSearch);

async function onLoad() {
  const response = await fetchTrendingMovies(PAGE);

  pagination(response.data.page, response.data.total_pages);
  insertMarkup(refs.mainContainer, await renderCards(response.data));
}

async function onSearch(e) {
  e.preventDefault();
  console.log(e.target.searchQuery.value);
  const response = await fetchMovies(e.target.searchQuery.value);
  console.log(response);
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
    markup += `<li data-action='prev'>&#129144;</li>`;
    markup += `<li>1</li>`;
  }
  if (page > 4) {
    markup += `<li>...</li>`;
  }
  if (page > 3) {
    markup += `<li>${beforeTwoPage}</li>`;
  }
  if (page > 2) {
    markup += `<li>${beforeOnePage}</li>`;
  }
  markup += `<li class='currentPage'>${PAGE}</li>`;
  if (pages - 1 > PAGE) {
    markup += `<li>${afterOnePage}</li>`;
  }
  if (pages - 2 > PAGE) {
    markup += `<li>${afterTwoPage}</li>`;
  }
  if (pages - 3 > PAGE) {
    markup += `<li>...</li>`;
  }
  if (pages > PAGE) {
    markup += `<li>${pages}</li>`;
    markup += `<li data-action='next'>&#129146;</li>`;
  }
  refs.pagination.innerHTML = markup;
}
