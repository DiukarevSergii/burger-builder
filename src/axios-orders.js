import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-db830.firebaseio.com/',
});

export default instance;
