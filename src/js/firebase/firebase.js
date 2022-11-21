import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase-init';
import { refs } from '../refs/refs';
import { closeModalOnBtn, showInfoFromFirebase } from '../render/renderModal';
import { ALT_IMAGE_URL, insertMarkup } from '../render/renderCards';
import Notiflix from 'notiflix';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, handleSignOut } from './firebase-auth';

// collection ref
let colRefWatched = collection(db, 'watched/');
let colRefQueue = collection(db, 'queue/');
let USER_ID = '';

onAuthStateChanged(auth, user => {
  if (user) {
    USER_ID = user.uid;
    colRefWatched = collection(db, `${user.uid}/watched/movies/`);
    colRefQueue = collection(db, `${user.uid}/queue/movies/`);
    return;
  } else {
    return;
  }
});

if (document.title === 'Filmoteka Library') {
  // get collection data watched
  refs.getWatchedDataBtn.addEventListener('click', getWatchedCollection);
  // get collection data queue
  refs.getQueueDataBtn.addEventListener('click', getQueueCollection);
  return;
} else {
  return;
}

function getWatchedCollection(e) {
  Notiflix.Loading.standard();

  refs.getQueueDataBtn.classList.contains('button--active')
    ? refs.getQueueDataBtn.classList.remove('button--active')
    : null;

  refs.getWatchedDataBtn.classList.add('button--active');

  getDocs(colRefWatched)
    .then(async snapshot => {
      return getData(snapshot);
    })
    .then(async data => {
      Notiflix.Loading.remove();

      if (data.length === 0) {
        showEmptyData('watched');
      }

      insertMarkup(refs.libraryContainer, await renderByFirebase(data));

      refs.addWatchedBtn.classList.remove('visually-hidden');
      refs.addWatchedBtn.textContent = 'Delete from watched';
      refs.addQueueBtn.classList.add('visually-hidden');
      refs.libraryContainer.addEventListener('click', showInfoFromFirebase);
      refs.addWatchedBtn.addEventListener('click', deleteWatched);
    })
    .catch(error => {
      console.log(error);
    });
}

function getQueueCollection(e) {
  Notiflix.Loading.standard();

  refs.getWatchedDataBtn.classList.contains('button--active')
    ? refs.getWatchedDataBtn.classList.remove('button--active')
    : null;

  refs.getQueueDataBtn.classList.add('button--active');

  getDocs(colRefQueue)
    .then(async snapshot => {
      return getData(snapshot);
    })
    .then(async data => {
      Notiflix.Loading.remove();
      if (data.length === 0) {
        showEmptyData('queue');
      }

      insertMarkup(refs.libraryContainer, await renderByFirebase(data));

      refs.addQueueBtn.classList.remove('visually-hidden');
      refs.addQueueBtn.textContent = 'Delete from queue';
      refs.addWatchedBtn.classList.add('visually-hidden');
      refs.libraryContainer.addEventListener('click', showInfoFromFirebase);

      refs.addQueueBtn.addEventListener('click', deleteQueue);
    })
    .catch(error => {
      console.log(error);
    });
}

function renderByFirebase(data) {
  return data.reduce(
    (
      acc,
      {
        poster_path,
        title,
        genre_ids = "haven't genres",
        vote_average,
        name,
        id,
        baseId,
      },
      i
    ) => {
      const genres = data[i].genres.map(el => {
        return el.name;
      });

      if (
        typeof poster_path === 'undefined' ||
        typeof poster_path === 'object'
      ) {
        poster_path = ALT_IMAGE_URL;
      } else {
        poster_path = 'https://image.tmdb.org/t/p/w500/' + poster_path;
      }
      acc += `<li class="movie-card"  data-id='${id}' firebase-id="${baseId}">
  <img src='${poster_path}' loading='lazy'/>
  <h3 class="movie-card__name">${title.toUpperCase() || name.toUpperCase()}</h3>
  <p class="movie-card__genres">
    ${
      // genres.length === 0 ? "haven't genre" : genres.join(', ')
      genres
    } <span class="movie-card__ratio">${
        vote_average ? vote_average.toFixed(1) : "haven't ratio"
      }</span>
  </p>
</li>`;
      return acc;
    },
    ''
  );
}

function getData(snapshot) {
  let collection = [];

  snapshot.docs.forEach(doc => {
    collection.push({ ...doc.data(), baseId: doc.id });
  });
  return collection;
}

function deleteData(path_to_folder, e) {
  // const { target } = e;
  const filmId = e.target.closest('div').getAttribute('firebase-id');

  const docRef = doc(db, `${path_to_folder}`, filmId);
  deleteDoc(docRef);
}

function handleDeleteData(e, path_to_folder, coolectionRef) {
  deleteData(`${path_to_folder}`, e);
  // const { target } = e;
  // const filmId = target.closest('div').getAttribute('firebase-id');

  // const docRef = doc(db, 'watched', filmId);
  // deleteDoc(docRef);
  getDocs(coolectionRef)
    .then(snapshot => {
      return getData(snapshot);
    })
    .then(async data => {
      insertMarkup(refs.libraryContainer, await renderByFirebase(data));
      closeModalOnBtn();
    });
}

function deleteQueue(e) {
  return handleDeleteData(e, `${USER_ID}/queue/movies`, colRefQueue);
}

function deleteWatched(e) {
  handleDeleteData(e, `${USER_ID}/watched/movies`, colRefWatched);
}

function showEmptyData(name) {
  Notiflix.Notify.info(`Your ${name} tab is empty 😔`);
}

export { colRefQueue, colRefWatched };
