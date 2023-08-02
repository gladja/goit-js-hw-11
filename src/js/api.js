import axios from 'axios';
import Notiflix from 'notiflix';

const API_KEY = '38551028-7f205e86e4b61da8a00434006';
// const BASE_URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const getContactService = async (search, page) => {
  try {
    return await axios.get(
      `https://pixabay.com/api/?key=38551028-7f205e86e4b61da8a00434006&q=cat&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1`
    );
  } catch (error) {
    // console.log(error);
    Notiflix.Notify.failure('Sorry ERROR. Please try again.');
  }
};

export { getContactService };
// `?key=${API_KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
