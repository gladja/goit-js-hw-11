import { getContactService } from './js/api';

const refs = {
  searchForm: document.querySelector('.search-form'),
};

refs.searchForm.addEventListener('submit', searchQuery);

function searchQuery(event) {
  event.preventDefault();
  // console.log(event.currentTarget.elements.value);
  console.log(event.target.searchQuery.value);
  const search = event.target.searchQuery.value;
  getContactService(search).then(data => {
    console.log(data.data.hits);
    renderItem(data.data.hits);
  });
}

function renderItem(data) {
  console.log(data);
  const card = data.map(itm => {
    // console.log(itm.webformatURL);
    return `
        <div class='photo-card'>
          <img src='itm.webformatURL' alt='itm.tags' loading='lazy' />
          <div class='info'>
          <p class='info-item'>
          <b>Likes</b>
          </p>
          <p class='info-item'>
          <b>Views</b>
          </p>
          <p class='info-item'>
          <b>Comments</b>
          </p>
          <p class='info-item'>
          <b>Downloads</b>
          </p>
          </div>
        </div>
    `;
  });
  return `
`
}