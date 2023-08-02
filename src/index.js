import axios from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.css';

// import { getContactService } from './js/api';
import { renderItem } from './js/render';
// import {scroll} from './js/scroll';

export const refs = {
  searchForm: document.querySelector('.search-form'),
  galleryEl: document.querySelector('.gallery'),
  loadMoreBtm: document.querySelector('.load-more'),
};

refs.searchForm.addEventListener('submit', searchQuery);
refs.loadMoreBtm.addEventListener('click', loadMore);

let search = '';
let page = 1;

let gallery = new SimpleLightbox('.gallery a', {
  fadeSpeed: 300,
  animationSpeed: 250,
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

function searchQuery(event) {
  event.preventDefault();

  refs.galleryEl.innerHTML = '';
  page = 1;
  refs.loadMoreBtm.classList.add('is-hidden');

  search = event.target.searchQuery.value;
  if (search.trim() === '') {
    Notiflix.Notify.warning('Sorry, type search query. Please try again.');
    return;
  }

  getContactService(search, page).then(data => {
    console.log(data);
    if (data.totalHits > 0) {
      Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
    }
    if (data.totalHits === 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      refs.loadMoreBtm.classList.add('is-hidden');
    }
    console.log(data.data);
    if (data.totalHits > 40) {
      refs.loadMoreBtm.classList.remove('is-hidden');
    }
    renderItem(data.hits);

    gallery.refresh();
    // scroll();
  });
}

function loadMore() {
  page += 1;
  refs.loadMoreBtm.classList.add('is-hidden');

  getContactService(search, page).then(data => {
    if (data.hits.length === 0) {
      Notiflix.Notify.warning(
        "We're sorry, but you've reached the end of search results."
      );
      refs.loadMoreBtm.classList.add('is-hidden');
      return;
    }
    console.log(data);
    renderItem(data.hits);
    gallery.refresh();
    refs.loadMoreBtm.classList.remove('is-hidden');
    // scroll();
  });
}

const API_KEY = '38551028-7f205e86e4b61da8a00434006';
const BASE_URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const getContactService = async () => {
  const URL = `?key=${API_KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`;
  try {
    const { data } = await axios(`${URL}`);
    // return await axios.get(
    //   `https://pixabay.com/api/?key=38551028-7f205e86e4b61da8a00434006&q=cat&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1`
    // );
    return data;
  } catch (error) {
    console.log(error);
    // Notiflix.Notify.failure('Sorry ERROR. Please try again.');
  }
};
