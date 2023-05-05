import { Component, OnInit } from '@angular/core';
import { MovieScrollItem } from 'src/app/models/MovieScrollItem';
import { MovieDbService } from 'src/app/services/movie-db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  discoverMovies: MovieScrollItem[];
  discoverShows: MovieScrollItem[];

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
