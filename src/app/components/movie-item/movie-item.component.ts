import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector:
    'app-movie-item[id][title][posterPath][voteAverage][itemPathPrefix]',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent {
  @Input() id: number;
  @Input() title: string;
  @Input() posterPath: string;
  @Input() voteAverage: number;
  @Input() itemPathPrefix: string;

  constructor(private router: Router) {}

  onClick() {
    this.router.navigate([this.itemPathPrefix, this.id]);
  }
}
