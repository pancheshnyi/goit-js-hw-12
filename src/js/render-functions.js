import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreButton = document.querySelector('.more-btn');
const loaderWrapper = document.querySelector('.loader-wrapper');
console.log('loaderWrapper:', loaderWrapper);
const simpleGallery = new SimpleLightbox('.gallery a', {});

export function createGallery(images, append = false) {
  const markup = images
    .map(image => {
      return `
      <li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img src="${image.webformatURL}" alt="${image.tags}" />
        </a>
        <ul class="descr-list">
          <li class="descr-list-item">
            <h2>Likes</h2>
            <p>${image.likes}</p>
          </li>
          <li class="descr-list-item">
            <h2>Views</h2>
            <p>${image.views}</p>
          </li>
          <li class="descr-list-item">
            <h2>Comments</h2>
            <p>${image.comments}</p>
          </li>
          <li class="descr-list-item">
            <h2>Downloads</h2>
            <p>${image.downloads}</p>
          </li>
        </ul>
      </li>`;
    })
    .join('');

  if (append) {
    gallery.insertAdjacentHTML('beforeend', markup);
  } else {
    gallery.innerHTML = markup;
  }

  simpleGallery.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loaderWrapper.style.display = 'flex';
}

export function hideLoader() {
  loaderWrapper.style.display = 'none';
}

export function disableLoadMoreButton() {
  loadMoreButton.disabled = true;
}

export function enableLoadMoreButton() {
  loadMoreButton.disabled = false;
}

export function showLoadMoreButton() {
  loadMoreButton.style.display = 'block';
}

export function hideLoadMoreButton() {
  loadMoreButton.style.display = 'none';
}
