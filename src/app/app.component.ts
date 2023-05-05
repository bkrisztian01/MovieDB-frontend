import { Component, OnInit } from '@angular/core';
import { MovieDbService } from './services/movie-db.service';
import { Movie } from './models/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'The Movie DB copy';
  movies: Movie[];

  constructor(private movieDbService: MovieDbService) {}

  ngOnInit(): void {
    this.movieDbService.getDiscoverMovies().subscribe((data) => {
      this.movies = data.results;
      console.log(this.movies);
    });
  }
}
