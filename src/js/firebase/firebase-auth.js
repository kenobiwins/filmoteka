import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import Notiflix from 'notiflix';
import { refs } from '../refs/refs';

const auth = getAuth();

if (document.title === 'Filmoteka') {
  refs.signUpBtn.addEventListener('click', showSignUpModal);
  refs.formRegister.addEventListener('submit', registerUser);
  refs.buttonLogout.addEventListener('click', handleSignOut);
  refs.formLogin.addEventListener('submit', handleLogIn);

  checkUserLog();
  return;
} else {
  return;
}

function registerUser(e) {
  e.preventDefault();
  const {
    target: { email, password },
    currentTarget,
  } = e;

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(cred => {
      console.log('user created', cred.user);
      Notiflix.Notify.success(`user created ${cred.user}`);
      currentTarget.reset();
    })
    .catch(error => {
      Notiflix.Notify.failure(error.message);
      console.log(error.message);
    });
}

function handleSignOut(e) {
  signOut(auth)
    .then(() => {
      // console.log('user signed out');
      refs.signUpBtn.textContent = 'Sign up';
      Notiflix.Notify.success('user signed out');
      closeModalOnBtnRegister();
      location.reload();
    })
    .catch(error => {
      Notiflix.Notify.failure(error.message);
      console.log(error.message);
    });
}

function handleLogIn(e) {
  e.preventDefault();

  const {
    target: { email, password },
    currentTarget,
  } = e;

  if (email.value.length === 0) {
    Notiflix.Notify.warning('Please enter your e-mail');
    return;
  }
  if (password.value.length === 0) {
    Notiflix.Notify.warning('Please enter password');
    return;
  } else {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(cred => {
        console.log('user logged in', cred.user);
        currentTarget.reset();
        Notiflix.Notify.success(`Hello ${cred.user.email}!`);
        refs.headerNav.querySelector(
          '[data-value="libraryRef"]'
        ).style.display = '';
        refs.buttonLogout.style.display = '';
        closeModalOnBtnRegister();
        // location.reload();
      })
      .catch(error => {
        Notiflix.Notify.failure(`user ${email.value} is not found`);
        console.log(error.message);
      });
  }
}

function showSignUpModal(e) {
  e.preventDefault();
  refs.buttonCloseRegister.addEventListener('click', closeModalOnBtnRegister);
  refs.backdropRegister.addEventListener(
    'click',
    closeModalOnBackdropClickRegister
  );

  refs.backdropRegister.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
}

function closeModalOnBtnRegister(e) {
  refs.backdropRegister.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');

  refs.buttonCloseRegister.removeEventListener(
    'click',
    closeModalOnBtnRegister
  );
  refs.backdropRegister.removeEventListener('click', closeModalOnBtnRegister);

  window.removeEventListener('keydown', closeModalOnBackdropClickRegister);
}

function closeModalOnBackdropClickRegister(e) {
  const { target, currentTarget, code } = e;
  if (target === currentTarget) {
    refs.backdropRegister.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
  }
  if (code === 'Escape') {
    refs.backdropRegister.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
  }

  window.removeEventListener('keydown', closeModalOnBackdropClickRegister);
}

function checkUserLog() {
  return onAuthStateChanged(auth, user => {
    if (user) {
      refs.signUpBtn.textContent = user.email;
      refs.formLogin.style.display = 'none';
      refs.formRegister.style.display = 'none';
    } else {
      refs.headerNav.querySelector('[data-value="libraryRef"]').style.display =
        'none';
      refs.buttonLogout.style.display = 'none';
    }
  });
}

export { auth };
