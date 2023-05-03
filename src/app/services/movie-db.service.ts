import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

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

    return this.http.get(url, options);
  }

  getDiscoverShows(page = 1) {
    const url = `${this.apiUrl}/discover/tv`;
    const options = {
      ...httpHeaders,
      params: {
        page,
      },
    };

    return this.http.get(url, options);
  }

  getMovieById(id: number) {
    const url = `${this.apiUrl}/movie/${id}`;
    const options = {
      ...httpHeaders,
    };

    return this.http.get(url, options);
  }

  getShowById(id: number) {
    const url = `${this.apiUrl}/tv/${id}`;
    const options = {
      ...httpHeaders,
    };

    return this.http.get(url, options);
  }
}
