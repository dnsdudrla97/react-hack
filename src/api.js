import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'ce4af0ebd881bf1f2bb9928e6aded1e8',
    language: 'en-US',
  },
});

export const moviesApi = {
  nowPlaying: () => api.get('movie/now_playing'),
  upComing: () => api.get('movie/upcoming'),
  popular: () => api.get('movie/pipular'),
};

export const tvApi = {
  topRated: () => api.get('tv/top_rated'),
  popular: () => api.get('tv/popular'),
  airingToday: () => api.get('tv/airing_today'),
};

export default api;
