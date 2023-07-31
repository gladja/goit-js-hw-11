import axios from 'axios';


const KEY = '38551028-7f205e86e4b61da8a00434006'
let page = 1;

axios.defaults.baseURL = 'https://pixabay.com/api/';
// const token = sessionStorage.getItem('token');
// axios.defaults.headers.common.Authorization = `Bearer ${token}`

const getContactService =  (search, ) => {
  try {
   return axios.get(
     `?key=${KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`)
    // return data;
  } catch (error) {
    console.log(error.message);
  }
}

function loadMore() {
  page += 1;
  console.log(page);
  // getContactService(page).then(data => {
  // if (data.data.totalHits > 0){
  //   Notiflix.Notify.success(`Hooray! We found ${data.data.totalHits} images.`);
  // }
  // console.log(data.data);

  // renderItem(data.data.hits);
  // simpleLightbox();
  // scroll();
  // });
return page
}

export {getContactService, loadMore}
// https://pixabay.com/api/?key=38551028-7f205e86e4b61da8a00434006&q=jesus&image_type=photo&pretty=true