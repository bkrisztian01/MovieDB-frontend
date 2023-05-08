import { Component, Input } from '@angular/core';
import { MovieItem } from 'src/app/models/MovieItem';

@Component({
  selector: 'app-movie-scroller',
  templateUrl: './movie-scroller.component.html',
  styleUrls: ['./movie-scroller.component.scss'],
})
export class MovieScrollerComponent {
  @Input() title: string;
  @Input() movies: MovieItem[];
  @Input() itemPathPrefix: string;
}
