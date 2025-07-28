import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  disableLoadMoreButton,
  enableLoadMoreButton,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const loadMoreButton = document.querySelector('.more-btn');
hideLoadMoreButton();

let page = 1;
let query = '';
let totalHits = 0;

form.addEventListener('submit', handleSubmit);
loadMoreButton.addEventListener('click', handleLoadMore);

async function handleSubmit(event) {
  event.preventDefault();
  clearGallery();
  hideLoadMoreButton();
  showLoader();
  disableLoadMoreButton();

  page = 1;
  query = event.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.warning({
      message: 'Please enter a valid search query',
      position: 'topRight',
      color: 'red',
      timeout: 5000,
    });
    hideLoader();
    enableLoadMoreButton();
    form.reset();
    return;
  }

  try {
    const data = await getImagesByQuery(query, page);
    totalHits = data.totalHits;
    console.log(data);

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        color: 'red',
        timeout: 5000,
      });
      hideLoadMoreButton();
    } else {
      createGallery(data.hits);
      await waitForAllImagesToLoad();

      if (page * 15 < totalHits) {
        showLoadMoreButton();
        enableLoadMoreButton();
      } else {
        hideLoadMoreButton();
        iziToast.info({
          message: "We're sorry, but you've reached the end of search results.",
          position: 'topRight',
          timeout: 5000,
        });
      }
    }
  } catch (error) {
    iziToast.error({
      message: 'An error occurred while fetching images.',
      position: 'topRight',
      timeout: 5000,
    });
  } finally {
    hideLoader();
    form.reset();
  }
}

async function handleLoadMore() {
  showLoader();
  disableLoadMoreButton();
  hideLoadMoreButton();
  page += 1;

  try {
    const data = await getImagesByQuery(query, page);
    createGallery(data.hits, true);
    await waitForAllImagesToLoad();

    const firstCard = document.querySelector('.gallery-item');
    if (firstCard) {
      const cardHeight = firstCard.getBoundingClientRect().height;
      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }

    if (page * 15 >= totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        timeout: 5000,
      });
    } else {
      showLoadMoreButton();
      enableLoadMoreButton();
    }
    // const firstCard = document.querySelector('.gallery-item');
    // if (firstCard) {
    //   const cardHeight = firstCard.getBoundingClientRect().height;
    //   window.scrollBy({
    //     top: cardHeight * 2,
    //     behavior: 'smooth',
    //   });
    // }
  } catch (error) {
    iziToast.error({
      message: 'An error occurred while fetching more images.',
      position: 'topRight',
      timeout: 5000,
    });
  } finally {
    hideLoader();
  }
}

async function waitForAllImagesToLoad() {
  const images = document.querySelectorAll('.gallery img');
  const promises = [];

  images.forEach(img => {
    if (!img.complete) {
      promises.push(
        new Promise(resolve => {
          img.onload = () => resolve();
          img.onerror = () => resolve();
        })
      );
    }
  });

  return Promise.all(promises);
}
