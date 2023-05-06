import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MovieItem } from 'src/app/models/MovieItem';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent {
  @Input() movie: MovieItem;
  @Input() itemPathPrefix: string;

  constructor(private router: Router) {}

  onClick() {
    this.router.navigate([this.itemPathPrefix, this.movie.id]);
  }
}
