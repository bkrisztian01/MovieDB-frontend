import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-search-movie-result',
  templateUrl: './search-movie-result.component.html',
  styleUrls: ['./search-movie-result.component.scss'],
})
export class SearchMovieResultComponent {
  @Input() movie: Movie;
}
