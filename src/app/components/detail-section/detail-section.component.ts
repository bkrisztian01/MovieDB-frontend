import { Component, Input } from '@angular/core';
import { Genre } from 'src/app/models/Genre';
import Utils from 'src/app/utils';

@Component({
  selector:
    'app-detail-section[title][originalTitle][overview][genres][runtime][releaseDate][voteAverage]',
  templateUrl: './detail-section.component.html',
  styleUrls: ['./detail-section.component.scss'],
})
export class DetailSectionComponent {
  @Input() title: string;
  @Input() originalTitle: string;
  @Input() overview: string;
  @Input() posterPath: string;
  @Input() genres: Genre[];
  @Input() runtime: number;
  @Input() releaseDate: string;
  @Input() voteAverage: number;

  /**
   * Returns the genres in a formatted string.
   * @returns The genres.
   */
  genresString(): string {
    return this.genres.map((g) => g.name).join(', ');
  }

  /**
   * Returns the runtime in a formatted string.
   * @returns The runtime.
   */
  runtimeString(): string {
    return Utils.formatMinutes(this.runtime);
  }

  /**
   * Returns the release year.
   * @returns The release year.
   */
  releaseYear(): number {
    return Utils.dateStringToYear(this.releaseDate);
  }

  /**
   * Returns the vote average as percentage.
   * @returns The vote average.
   */
  voteAveragePercentage(): number {
    return this.voteAverage * 10;
  }
}
