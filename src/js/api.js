import axios from 'axios';

const KEY = '38551028-7f205e86e4b61da8a00434006'

axios.defaults.baseURL = 'https://pixabay.com/api/';
// const token = sessionStorage.getItem('token');
// axios.defaults.headers.common.Authorization = `Bearer ${token}`

const getContactService =  (search) => {
  try {
   return axios.get(
     `?key=${KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&page=&per_page=40`)
    // return data;
  } catch (error) {
    console.log(error.message);
  }
}

export {getContactService}
// https://pixabay.com/api/?key=38551028-7f205e86e4b61da8a00434006&q=jesus&image_type=photo&pretty=true