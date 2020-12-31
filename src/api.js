import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'ce4af0ebd881bf1f2bb9928e6aded1e8',
    language: 'en-US',
  },
});
api.get('tv/popular');
export default api;
