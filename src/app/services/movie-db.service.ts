import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Movie } from '../models/Movie';
import { Show } from '../models/Show';
import { DiscoverResult, SearchResult } from '../models/SearchResult';

const httpHeaders = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json;charset=utf-8',
    Authorization: `Bearer ${environment.THEMOVIEDB_API_KEY}`,
  }),
};

@Injectable({
  providedIn: 'root',
})
export class MovieDbService {
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

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

  getMovieById(id: number) {
    const url = `${this.apiUrl}/movie/${id}`;
    const options = {
      ...httpHeaders,
    };

    return this.http.get<Movie>(url, options);
  }

  getShowById(id: number) {
    const url = `${this.apiUrl}/tv/${id}`;
    const options = {
      ...httpHeaders,
    };

    return this.http.get<Show>(url, options);
  }

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
}
