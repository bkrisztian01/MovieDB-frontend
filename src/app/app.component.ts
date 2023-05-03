import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { MovieDbService } from './services/movie-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'The Movie DB copy';
  content: string;

  constructor(private movieDbService: MovieDbService) {}

  ngOnInit(): void {
    this.movieDbService
      .getMovieById(123)
      .subscribe((data) => (this.content = JSON.stringify(data, null, 4)));
  }
}
