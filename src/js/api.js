import axios from 'axios';
import Notiflix from 'notiflix';

const API_KEY = '38529296-de6c3fac31b2614a8135b6c10';
const BASE_URL = 'https://pixabay.com/api/';
const per_page = 40;
axios.defaults.baseURL = 'https://pixabay.com/api/';

const getContactService = async (search, page) => {
  const URL = `?key=${API_KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`;
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

// function getContactService(search, page) {
//   fetch(
//     `${BASE_URL}?key=${API_KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
//   ).then(data => {
//     console.log(data);
//     return data.json();
//   });
// }

export { getContactService };
// `?key=${API_KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
