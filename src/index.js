import Notiflix from 'notiflix';
import simpleLightbox from './js/simpleLightbox'


import { getContactService, loadMore } from './js/api';


const refs = {
  searchForm: document.querySelector('.search-form'),
  galleryEl: document.querySelector('.gallery'),
  loadMore: document.querySelector('.load-more'),
};

refs.searchForm.addEventListener('submit', searchQuery);
refs.loadMore.addEventListener('click', loadMore);

function searchQuery(event) {
  event.preventDefault();
  // console.log(event.currentTarget.elements.value);
  // console.log(event.target.searchQuery.value);
  refs.galleryEl.innerHTML = '';

  const search = event.target.searchQuery.value;

  getContactService(search).then(data => {
    if (data.data.totalHits > 0){
    Notiflix.Notify.success(`Hooray! We found ${data.data.totalHits} images.`);
    }
    console.log(data.data);

    renderItem(data.data.hits);
    simpleLightbox();
    // scroll();
  });
}

function renderItem(data) {
  // console.log(data);
  if (data.length === 0) {
    Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
    return
  }
  const card = data.map(itm => {
    return `
          <div class="photo-card">
          <a class='gallery__link' href='${itm.largeImageURL}'>
            <img src='${itm.webformatURL}' alt='${itm.tags}' loading='lazy'
            class='gallery__image' width='450' height='300'/>
          </a>
          <div class='info'>
          <p class='info-item'>
          <b>Likes:</b>
          ${itm.likes}
          </p>
          <p class='info-item'>
          <b>Views:</b>
          ${itm.views}
          </p>
          <p class='info-item'>
          <b>Comments:</b>
          ${itm.comments}
          </p>
          <p class='info-item'>
          <b>Downloads:</b>
          ${itm.downloads}
          </p>
          </div>
        </div>
`;
  }).join('');
  refs.galleryEl.insertAdjacentHTML('beforeend', card);
}


function scroll() {
  const { height: cardHeight } = document
    .querySelector(".gallery")
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 8,
    behavior: "smooth",
  });
}

