import { fetchGenres } from '../API/API';

const ALT_IMAGE_URL =
  'https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg';
const IMAGES_URL = 'https://image.tmdb.org/t/p/w500';
// let imageUrl = '';

async function renderCards(data) {
  try {
    const response = await fetchGenres();
    if (response.status !== 200) throw new Error(response.status);
    if (response.data === undefined) {
      throw new Error(response.data, 'undefined');
    }

    return data.results.reduce(
      (
        acc,
        {
          poster_path,
          title,
          genre_ids = "haven't genres",
          vote_average,
          name,
          id,
        }
      ) => {
        const genres = response.data.genres.reduce((acc, el) => {
          if (genre_ids.includes(el['id'])) {
            acc.push(el['name']);
          }
          return acc;
        }, []);

        if (
          typeof poster_path === 'undefined' ||
          typeof poster_path === 'object'
        ) {
          poster_path = ALT_IMAGE_URL;
        } else {
          poster_path = IMAGES_URL + poster_path;
        }
        acc += `<li class="movie-card"  data-id='${id}'>
  <img src='${poster_path}' loading='lazy'/>
<div class="movie-card__wrapper">
  <h3 class="movie-card__name">${title.toUpperCase() || name.toUpperCase()}</h3>
  <p class="movie-card__genres">
    ${
      genres.length === 0 ? "haven't genre" : genres.join(', ')
    } <span class="movie-card__ratio">${
          vote_average ? vote_average.toFixed(1) : "haven't ratio"
        }</span>
  </p>
</div>
</li>`;
        return acc;
      },
      ''
    );
  } catch (error) {
    console.log(error);
  }
}

function insertMarkup(refOnContainer, markup) {
  return (refOnContainer.innerHTML = markup);
}

export { renderCards, insertMarkup, imageUrl, ALT_IMAGE_URL, IMAGES_URL };
