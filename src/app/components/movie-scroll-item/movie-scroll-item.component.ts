import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-scroll-item',
  templateUrl: './movie-scroll-item.component.html',
  styleUrls: ['./movie-scroll-item.component.scss'],
})
export class MovieScrollItemComponent {
  @Input() movie: Movie;

  constructor(private router: Router) {}

  onClick() {
    this.router.navigate(['/movies', this.movie.id]);
  }
}
