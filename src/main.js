import { fetchImage } from './js/pixabay-api.js';
import {
  hideLoader,
  renderGallery,
  showLoader,
  showMessage,
} from './js/render-functions.js';

const form = document.querySelector('form');
const input = document.querySelector('#query');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const searchText = input.value.trim();
  if (!searchText) return showMessage();

  input.value = '';
  showLoader();

  fetchImage(searchText)
    .then(data => {
      const images = data.data.hits;

      if (!images || images.length === 0) {
        clearGallery();
        throw new Error();
      }

      renderGallery(images);
    })
    .catch(err => {
      console.error(' Помилка:', err);
      hideLoader();
      showMessage();
    });
}

function clearGallery() {
  const gallery = document.querySelector('.gallery');
  if (gallery) {
    gallery.innerHTML = '';
  }
}
