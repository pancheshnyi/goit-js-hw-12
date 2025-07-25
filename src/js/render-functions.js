import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

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
  let simpleGallery = new SimpleLightbox('.gallery a', {});
  simpleGallery.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.style.display = 'block';
}

export function hideLoader() {
  loader.style.display = 'none';
}
