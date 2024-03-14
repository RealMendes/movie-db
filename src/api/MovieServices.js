import axios from 'axios';
const API_KEY= '3b7d9d4754c426abf6e92fdf44c546fd';
const BASE_URL = 'https://api.themoviedb.org/3';
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MovieServices {
    static getMovies() {
        return axios(withBaseUrl('/movie/popular'));
    }

    static getMovieById(id) {
        const response = axios(withBaseUrl(`/movie/${id}`));
        console.log(response);
        return response;
       
    }
}
