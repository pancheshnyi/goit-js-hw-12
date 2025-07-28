import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreButton = document.querySelector('.more-btn');
const loaderWrapper = document.querySelector('.loader-wrapper');
console.log('loaderWrapper:', loaderWrapper);
const simpleGallery = new SimpleLightbox('.gallery a', {});

export function createGallery(images) {
  gallery.innerHTML = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `
    <li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-img" src="${webformatURL}" alt="${tags}"/>
        </a>
            <ul class="descr-list">
                <li class="descr-list-item">
                <h2>Likes</h2>
                <p>${likes}</p>
                </li>
                <li class="descr-list-item">
                <h2>Views</h2>
                <p>${views}</p>
                </li>
                <li class="descr-list-item">
                <h2>Comments</h2>
                <p>${comments}</p>
                </li>
                <li class="descr-list-item">
                <h2>Downloads</h2>
                <p>${downloads}</p>
                </li>
            </ul>
        </li>
        `
    )
    .join('');

  simpleGallery.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loaderWrapper.style.display = 'flex';
}

export function hideLoader() {
  // console.log('hideLoader called');
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
