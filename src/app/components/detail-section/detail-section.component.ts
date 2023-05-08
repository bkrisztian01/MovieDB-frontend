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

  genresString(): string {
    return this.genres.map((g) => g.name).join(', ');
  }

  runtimeString(): string {
    return Utils.formatMinutes(this.runtime);
  }

  releaseYear(): number {
    return Utils.dateStringToYear(this.releaseDate);
  }

  voteAveragePercentage(): number {
    return this.voteAverage * 10;
  }
}
