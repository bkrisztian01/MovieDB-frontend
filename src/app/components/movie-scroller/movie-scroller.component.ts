import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-scroller',
  templateUrl: './movie-scroller.component.html',
  styleUrls: ['./movie-scroller.component.scss'],
})
export class MovieScrollerComponent {
  @Input() movies: Movie[];
  @Input() morePath: string;
}
