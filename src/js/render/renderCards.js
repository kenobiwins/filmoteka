import { fetchGenres } from '../API/API';
// 'https://kor.ill.in.ua/m/610x385/1711470.jpg';
const IMAGES_URL = 'https://image.tmdb.org/t/p/w500/';
// const RE = /null\/$/g;

async function renderCards(data) {
  try {
    const response = await fetchGenres();
    if (response.status !== 200) throw new Error(response.status);
    if (response.data === undefined) {
      throw new Error(response.data, 'undefined');
    }
    console.log(data.results);
    return data.results.reduce(
      (
        acc,
        {
          poster_path = 'ss',
          title = 'sd',
          genre_ids = 'df',
          vote_average = '0',
          name,
        }
      ) => {
        const genres = response.data.genres.reduce((acc, el) => {
          // if (genre_ids === undefined) {
          //   console.log(response);
          // }
          console.log(poster_path, title, genre_ids, vote_average, name);
          if (genre_ids.includes(el['id'])) {
            acc.push(el['name']);
          }

          return acc;
        }, []);

        acc += `<li class="movie-card">
  <img src='${IMAGES_URL + poster_path}' loading='lazy'/>
  <h3 class="movie-card__name">${title || name}</h3>
  <p class="movie-card__genres">
    ${
      genres.length === 0 ? "haven't genre" : genres
    } <span class="movie-card__ratio">${vote_average.toFixed(1)}</span>
  </p>
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

export { renderCards, insertMarkup };
