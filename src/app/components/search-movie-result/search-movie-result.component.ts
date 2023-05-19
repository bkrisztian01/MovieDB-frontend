import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-movie-result',
  templateUrl: './search-movie-result.component.html',
  styleUrls: ['./search-movie-result.component.scss'],
})
export class SearchMovieResultComponent {
  @Input() id: number;
  @Input() title: string;
  @Input() overview: string;
  @Input() posterPath: string;
  @Input() type: 'tv' | 'movie';

  constructor(private router: Router) {}

  /**
   * Navigates the client to the page of the result.
   */
  onClick() {
    this.router.navigate([`/${this.type}`, this.id]);
  }
}
