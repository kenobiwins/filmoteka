// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  doc,
  // addDoc,
} from 'firebase/firestore';
import { refs } from '../refs/refs';
import { closeModalOnBtn, showInfoFromFirebase } from '../render/renderModal';
import { ALT_IMAGE_URL, insertMarkup } from '../render/renderCards';
import Notiflix from 'notiflix';

const firebaseConfig = {
  apiKey: 'AIzaSyCebWfsV7NOjyL02i7fSXE4AU5yFpXdziw',
  authDomain: 'filmoteka-6b0fa.firebaseapp.com',
  projectId: 'filmoteka-6b0fa',
  storageBucket: 'filmoteka-6b0fa.appspot.com',
  messagingSenderId: '761691286246',
  appId: '1:761691286246:web:7601ab645d132396eb6927',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// init services
const db = getFirestore(app);

// collection ref
const colRefWatched = collection(db, 'watched/');
const colRefQueue = collection(db, 'queue/');

if (document.title === 'Filmoteka Library') {
  // get collection data watched
  refs.getWatchedDataBtn.addEventListener('click', e => {
    getDocs(colRefWatched)
      .then(async snapshot => {
        Notiflix.Loading.standard();
        return getData(snapshot);
      })
      .then(async data => {
        Notiflix.Loading.remove(500);
        console.log('watched', data);
        if (data.length === 0) {
          showEmptyData('watched');
        }
        refs.getQueueDataBtn.classList.contains('button--active')
          ? refs.getQueueDataBtn.classList.remove('button--active')
          : null;
        refs.getWatchedDataBtn.classList.add('button--active');
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
  });

  // get collection data queue
  refs.getQueueDataBtn.addEventListener('click', e => {
    getDocs(colRefQueue)
      .then(async snapshot => {
        Notiflix.Loading.standard();
        return getData(snapshot);
      })
      .then(async data => {
        console.log('queue', data);
        Notiflix.Loading.remove(500);
        if (data.length === 0) {
          showEmptyData('queue');
        }

        refs.getWatchedDataBtn.classList.contains('button--active')
          ? refs.getWatchedDataBtn.classList.remove('button--active')
          : null;
        refs.getQueueDataBtn.classList.add('button--active');

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
  return handleDeleteData(e, 'queue', colRefQueue);
}
function deleteWatched(e) {
  handleDeleteData(e, 'watched', colRefWatched);
}
function showEmptyData(name) {
  Notiflix.Notify.info(`Your ${name} tab is empty 😔`);
}

export { colRefQueue, colRefWatched, addToWatched, addToQueue, handleWatched };
