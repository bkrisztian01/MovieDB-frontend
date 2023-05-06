import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/Movie';
import { MovieDbService } from 'src/app/services/movie-db.service';
import Utils from 'src/app/utils';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss'],
})
export class MoviePageComponent implements OnInit {
  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieDbService: MovieDbService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const movieId = Number(paramMap.get('id'));
      if (!movieId) {
        this.router.navigate(['/']);
        return;
      }

      this.movieDbService.getMovieById(movieId).subscribe((movie) => {
        this.movie = movie;
        console.log(movie);
      });
    });
  }

  genres(): string {
    return this.movie.genres.map((g) => g.name).join(', ');
  }

  runtime(): string {
    return Utils.formatMinutes(this.movie.runtime);
  }

  releaseYear(): number {
    return Utils.dateStringToYear(this.movie.release_date);
  }

  voteAverage(): number {
    return this.movie.vote_average * 10;
  }
}
