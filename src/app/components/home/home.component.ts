import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MovieItem } from 'src/app/models/MovieItem';
import { MovieDbService } from 'src/app/services/movie-db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  discoverMovies: MovieItem[];
  discoverShows: MovieItem[];

  constructor(private movieDbService: MovieDbService) {}

  ngOnInit(): void {
    this.movieDbService.getDiscoverMovies().subscribe((data) => {
      this.discoverMovies = data.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        voteAverage: movie.vote_average,
        posterPath: movie.poster_path,
      }));
    });

    this.movieDbService.getDiscoverShows().subscribe((data) => {
      this.discoverShows = data.results.map((show) => ({
        id: show.id,
        title: show.name,
        voteAverage: show.vote_average,
        posterPath: show.poster_path,
      }));
    });
  }
}
