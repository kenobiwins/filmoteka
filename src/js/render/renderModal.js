import { refs } from '../refs/refs';
import { fetchInfoMovieById, fetchGenres, fetchTrailerById } from '../API/API';
import { IMAGES_URL, ALT_IMAGE_URL } from './renderCards';
import {
  addToQueue,
  addToWatched,
  colRefQueue,
  colRefWatched,
  handleWatched,
} from '../firebase/firebase';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { async } from '@firebase/util';
import Notiflix from 'notiflix';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase-auth';

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

let dataVar = {};
let idForTrailer = '';
// let prevHTML = '';
// console.log(prevHTML);
async function showInfo(e) {
  // e.preventDefault();

  const { target, currentTarget } = e;

  if (target === currentTarget) return;

  const cardId = target.closest('li').getAttribute('data-id');

  if (!cardId) return;

  Notiflix.Loading.standard();

  const response = await fetchInfoMovieById(cardId);

  if (response === undefined || response === null) {
    Notiflix.Loading.remove();
    return;
  }

  idForTrailer = cardId;
  dataVar = response.data;

  [...refs.buttonsWrapper.children].forEach(el => {
    if (el.hasAttribute('disabled')) {
      el.removeAttribute('disabled');
    }
  });

  onAuthStateChanged(auth, user => {
    if (!user) {
      [...refs.buttonsWrapper.children].forEach(el => {
        el.setAttribute('disabled', '');
      });
    }
  });

  let {
    title,
    name,
    vote_average,
    vote_count,
    popularity,
    overview,
    genres,
    poster_path,
    id,
  } = response.data;

  getDocs(colRefWatched).then(snapshot => {
    snapshot.docs.forEach(doc => {
      [doc.data()].some(el => {
        return el['id'] === Number(cardId);
      })
        ? refs.addWatchedBtn.setAttribute('disabled', '')
        : null;
    });
  });

  getDocs(colRefQueue).then(snapshot => {
    snapshot.docs.forEach(doc => {
      [doc.data()].some(el => {
        return el['id'] === Number(cardId);
      })
        ? refs.addQueueBtn.setAttribute('disabled', '')
        : null;
    });
  });

  setHref(idForTrailer);

  if (!poster_path) {
    poster_path = ALT_IMAGE_URL;
  } else {
    poster_path = IMAGES_URL + poster_path;
  }

  el.img.src = poster_path;
  el.originalTitle.textContent = title.toUpperCase() || name.toUpperCase();
  el.ratio.firstElementChild.textContent = vote_average
    ? vote_average.toFixed(1)
    : "haven't ratio";
  el.ratio.lastElementChild.textContent = vote_count || '';

  el.popularity.textContent = popularity ? popularity.toFixed(1) : '';
  el.refTitle.textContent = title.toUpperCase() || name.toUpperCase();
  el.genres.textContent = genres.map(el => el['name']).join(', ');
  el.infoFilm.textContent = overview || "haven't overview";

  Notiflix.Loading.remove();

  refs.buttonCloseModal.addEventListener('click', closeModalOnBtn);
  refs.backdrop.addEventListener('click', closeModalOnBackdropClick);

  refs.backdrop.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');

  refs.posterWrapper.addEventListener('click', showTrailer);
  // refs.posterWrapper.addEventListener('click', handleIframe);
  refs.buttonsWrapper.addEventListener('click', handleSaveData);

  window.addEventListener('keydown', closeModalOnBackdropClick);
}

// function handleIframe(e) {
//   // e.preventDefault();
//   const { target, currentTarget } = e;
//   console.log(target);
//   console.log(currentTarget);
// }

async function setHref(id) {
  const response = await fetchTrailerById(id);

  return response.data.results.forEach(el => {
    if (
      (el.hasOwnProperty(['name']) && el['name'] === 'Official Trailer') ||
      'Official Trailer 2'
    ) {
      // refs.posterWrapper.href = el.key;
      // console.log(el);
      refs.posterWrapper.href = `https://www.youtube.com/embed/${el.key}`;
      return;
    } else {
      refs.posterWrapper.href = `#`;
      // refs.posterWrapper.removeEventListener('click', showTrailer);
      // Notiflix.Notify.info(`Haven't trailer`);
      return;
    }
  });
}

function handleSaveData(e) {
  const { target, currentTarget } = e;

  if (target === currentTarget) {
    return;
  }
  if (
    target === refs.addQueueBtn &&
    refs.addQueueBtn.textContent.trim() === 'Add to queue'
  ) {
    saveData(colRefQueue, dataVar);
    target.setAttribute('disabled', '');
    return;
  } else if (
    target === refs.addWatchedBtn &&
    refs.addWatchedBtn.textContent.trim() === 'Add to watched'
  ) {
    saveData(colRefWatched, dataVar);
    target.setAttribute('disabled', '');
    return;
  }
}

function saveData(collectionRef, data) {
  console.log(collectionRef, data);
  Notiflix.Notify.success(
    `Movie has saved to ${collectionRef._path.segments[1]}`
  );
  addDoc(collectionRef, data);
}

function closeModalOnBtn(e) {
  refs.buttonCloseModal.removeEventListener('click', closeModalOnBtn);
  refs.backdrop.removeEventListener('click', closeModalOnBtn);
  removeStyles();
  if (
    refs.posterWrapper.lastElementChild.classList.contains('visually-hidden')
  ) {
    refs.posterWrapper.children[1].classList.remove('visually-hidden');
    refs.posterWrapper.children[0].remove();
  }
  console.log(refs.posterWrapper);
  // refs.posterWrapper.innerHTML = prevHTML;

  refs.posterWrapper.removeEventListener('click', showTrailer);
  refs.buttonsWrapper.removeEventListener('click', handleSaveData);
  window.removeEventListener('keydown', closeModalOnBackdropClick);
}

function closeModalOnBackdropClick(e) {
  const { target, currentTarget, code } = e;
  if (target === currentTarget) {
    removeStyles();
    if (
      refs.posterWrapper.lastElementChild.classList.contains('visually-hidden')
    ) {
      refs.posterWrapper.children[1].classList.remove('visually-hidden');
      refs.posterWrapper.children[0].remove();
    }
  }
  if (code === 'Escape') {
    removeStyles();
    if (
      refs.posterWrapper.lastElementChild.classList.contains('visually-hidden')
    ) {
      refs.posterWrapper.children[1].classList.remove('visually-hidden');
      refs.posterWrapper.children[0].remove();
    }
  }

  window.removeEventListener('keydown', closeModalOnBackdropClick);
}

function removeStyles() {
  refs.backdrop.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
  el.img.src = '#';
  el.img.style.width = null;
}

async function showInfoFromFirebase(e) {
  e.preventDefault();
  Notiflix.Loading.pulse();
  const { target, currentTarget } = e;

  if (target === currentTarget) return;

  const cardId = target.closest('li').getAttribute('data-id');
  const firebaseId = target.closest('li').getAttribute('firebase-id');

  if (!cardId) return;

  const response = await fetchInfoMovieById(cardId);
  if (response === undefined || response === null) {
    return;
  }
  idForTrailer = cardId;
  setHref(idForTrailer);

  const {
    title,
    name,
    vote_average,
    vote_count,
    popularity,
    overview,
    genres,
    poster_path,
  } = response.data;

  if (poster_path === null || poster_path === undefined) {
    el.img.src = ALT_IMAGE_URL;
    el.img.style.width = '300px';
  } else {
    el.img.src = IMAGES_URL + poster_path;
  }
  el.img.alt = `poster for movie - ${title || name}`;
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
  // refs.buttonsWrapper.setAttribute('firebase-id', cardId);
  refs.buttonsWrapper.setAttribute('firebase-id', firebaseId);
  refs.posterWrapper.addEventListener('click', showTrailer);

  Notiflix.Loading.remove();

  window.addEventListener('keydown', closeModalOnBackdropClick);
}

function showTrailer(e) {
  e.preventDefault();
  const { target, currentTarget } = e;
  // console.log(target);
  // console.log(currentTarget);
  target.classList.add('visually-hidden');
  currentTarget.insertAdjacentHTML(
    'afterbegin',
    `<iframe width="280px" height="350px" src="${currentTarget.href}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
}

export {
  showInfo,
  closeModalOnBtn,
  closeModalOnBackdropClick,
  showInfoFromFirebase,
};
