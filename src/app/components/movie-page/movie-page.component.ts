import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/Movie';
import { Credit } from 'src/app/models/Credit';
import { MovieDbService } from 'src/app/services/movie-db.service';
import Utils from 'src/app/utils';
import { Images } from 'src/app/models/Images';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss'],
})
export class MoviePageComponent implements OnInit {
  movie: Movie;
  credits: Credit[];
  images: Images;

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
      });

      this.movieDbService.getMovieCredits(movieId).subscribe((credits) => {
        this.credits = credits.cast
          .filter((credit) => !!credit.character)
          .slice(0, 10);
      });

      this.movieDbService.getMovieImages(movieId).subscribe((images) => {
        this.images = images;
        console.log('Page', this.images);
      });
    });
  }
}
