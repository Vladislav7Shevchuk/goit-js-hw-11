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

  if (!searchText) {
    return;
  }

  input.value = '';
  showLoader();

  fetchImage(searchText)
    .then(data => {
      handleSearchResults(data.data.hits);
    })
    .catch(err => console.log(err));
}

function handleSearchResults(images) {
  hideLoader();

  if (!images || images.length === 0) {
    showMessage();
  }
  renderGallery(images);
}
