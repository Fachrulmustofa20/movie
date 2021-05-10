import TheMovieDbSource from '../../data/themoviedb-source';
import UrlParser from '../../routes/url-parser';
import { createMovieDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <div id="movie" class="movie"></div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await TheMovieDbSource.detailMovie(url.id);

    console.log(movie);

    // TODO: tampilkan movie di dalam DOM
    const moviesContainer = document.querySelector('#movie');
    moviesContainer.innerHTML = createMovieDetailTemplate(movie);
  },
};

export default Detail;
