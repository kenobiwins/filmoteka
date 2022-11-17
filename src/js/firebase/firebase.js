// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { refs } from '../refs/refs';
import { ALT_IMAGE_URL } from '../render/renderCards';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
// get collection data watched

if (document.title === 'Filmoteka Library') {
  refs.getWatchedDataBtn.addEventListener('click', () => {
    getDocs(colRefWatched)
      .then(async snapshot => {
        let collection = [];

        snapshot.docs.forEach(doc => {
          collection.push({ ...doc.data(), baseId: doc.id });
        });
        return collection;
      })
      .then(async data => {
        console.log('watched', data);
        if (data.length === 0) {
          console.log('empty 3:');
        }
        refs.libraryContainer.innerHTML = await renderByFirebase(data);
      })
      .catch(error => {
        console.log(error);
      });
  });
  // get collection data queue
  refs.getQueueDataBtn.addEventListener('click', () => {
    getDocs(colRefQueue)
      .then(snapshot => {
        let collection = [];

        snapshot.docs.forEach(doc => {
          collection.push({ ...doc.data(), baseId: doc.id });
        });
        return collection;
      })
      .then(async data => {
        console.log('queue', data);
        if (data.length === 0) {
          console.log('empty 3:');
        }
        refs.libraryContainer.innerHTML = await renderByFirebase(data);
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
      acc += `<li class="movie-card"  data-id='${id}'>
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

export { colRefQueue, colRefWatched };
