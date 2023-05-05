import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MovieScrollItem } from 'src/app/models/MovieScrollItem';

@Component({
  selector: 'app-movie-scroll-item',
  templateUrl: './movie-scroll-item.component.html',
  styleUrls: ['./movie-scroll-item.component.scss'],
})
export class MovieScrollItemComponent {
  @Input() movie: MovieScrollItem;
  @Input() itemPathPrefix: string;

  constructor(private router: Router) {}

  onClick() {
    this.router.navigate([this.itemPathPrefix, this.movie.id]);
  }
}
