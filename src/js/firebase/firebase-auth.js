import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { refs } from '../refs/refs';

// backdropRegister;
// modalRegister;
// formRegister;
// buttonCloseRegister
const auth = getAuth();

if (document.title === 'Filmoteka') {
  refs.signUpBtn.addEventListener('click', showSignUpModal);
  refs.formRegister.addEventListener('submit', registerUser);
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
      currentTarget.reset();
    })
    .catch(error => {
      console.log(error.message);
    });
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
