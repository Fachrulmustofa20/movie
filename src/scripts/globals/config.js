const CONFIG = {
  KEY: '10395561e6adf431ab556ddaceb2495b',
  BASE_URL: 'https://api.themoviedb.org/3/',
  BASE_IMAGE_URL: 'https://image.tmdb.org/t/p/w500/',
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: 'movie-catalogue-db',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'movies',
  WEB_SOCKET_SERVER: 'wss://stormy-badlands-06326.herokuapp.com',
};

export default CONFIG;
