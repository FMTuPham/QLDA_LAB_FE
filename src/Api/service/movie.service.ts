import API from '../instance'
import { ENDPOINTS } from '../endpoints'
import Movie from '../../types/movie.type'


export function getMovieList() {
  return API.get(ENDPOINTS.MOVIE_LIST)
}


export function createMovie(body: Movie) {
  return API.post(ENDPOINTS.CREATE_MOVIE, body)
}