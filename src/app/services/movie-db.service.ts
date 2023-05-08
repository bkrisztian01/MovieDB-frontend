import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Movie } from '../models/Movie';
import { Show } from '../models/Show';
import { DiscoverResult, SearchResult } from '../models/SearchResult';
import { Credits } from '../models/Credits';
import { Images } from '../models/Images';

/**
 * HTTP headers for API authentication.
 */
const httpHeaders = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json;charset=utf-8',
    Authorization: `Bearer ${environment.THEMOVIEDB_API_KEY}`,
  }),
};

/**
 * Service used for accessing the TheMovieDB API.
 */
@Injectable({
  providedIn: 'root',
})
export class MovieDbService {
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  /**
   * Returns movies you might not have seen.
   * @param page - The page number
   * @returns The movies with the total amount of entries.
   */
  getDiscoverMovies(page = 1) {
    const url = `${this.apiUrl}/discover/movie`;
    const options = {
      ...httpHeaders,
      params: {
        page,
      },
    };

    return this.http.get<DiscoverResult<Movie>>(url, options);
  }

  /**
   * Returns TV shows you might not have seen.
   * @param page - The page number
   * @returns The TV shows with the total amount of entries.
   */
  getDiscoverShows(page = 1) {
    const url = `${this.apiUrl}/discover/tv`;
    const options = {
      ...httpHeaders,
      params: {
        page,
      },
    };

    return this.http.get<DiscoverResult<Show>>(url, options);
  }

  /**
   * Get details of a movie.
   * @param id - The ID of the movie
   * @returns The details of the movie.
   */
  getMovieById(id: number) {
    const url = `${this.apiUrl}/movie/${id}`;
    const options = {
      ...httpHeaders,
    };

    return this.http.get<Movie>(url, options);
  }

  /**
   * Get details of a TV show.
   * @param id - The ID of the TV show
   * @returns The details of the TV show.
   */
  getShowById(id: number) {
    const url = `${this.apiUrl}/tv/${id}`;
    const options = {
      ...httpHeaders,
    };

    return this.http.get<Show>(url, options);
  }

  /**
   * Search for movies by title.
   * @param query - Keywords to search for
   * @param page - The page number
   * @returns Movies that matches the query.
   */
  searchMovie(query: string, page = 1) {
    const url = `${this.apiUrl}/search/movie`;
    const options = {
      ...httpHeaders,
      params: {
        page,
        query,
      },
    };

    return this.http.get<SearchResult<Movie>>(url, options);
  }

  /**
   * Search for TV shows by title.
   * @param query - Keywords to search for
   * @param page - The page number
   * @returns TV shows that matches the query.
   */
  searchShow(query: string, page = 1) {
    const url = `${this.apiUrl}/search/tv`;
    const options = {
      ...httpHeaders,
      params: {
        page,
        query,
      },
    };

    return this.http.get<SearchResult<Show>>(url, options);
  }

  /**
   * Get credits of a movie.
   * @param id - The ID of the movies
   * @returns The credits of the movie.
   */
  getMovieCredits(id: number) {
    const url = `${this.apiUrl}/movie/${id}/credits`;
    const options = {
      ...httpHeaders,
    };

    return this.http.get<Credits>(url, options);
  }

  /**
   * Get the images that belong to a movie.
   * @param id - The ID of the movies
   * @returns The credits of the movie.
   */
  getMovieImages(id: number) {
    const url = `${this.apiUrl}/movie/${id}/images`;
    const options = {
      ...httpHeaders,
      params: {
        language: 'en',
      },
    };

    return this.http.get<Images>(url, options);
  }
}
