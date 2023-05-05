import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieDbService } from 'src/app/services/movie-db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies: Movie[];

  constructor(private movieDbService: MovieDbService) {}

  ngOnInit(): void {
    this.movieDbService.getDiscoverMovies().subscribe((data) => {
      this.movies = data.results;
      console.log(this.movies);
    });
  }
}
