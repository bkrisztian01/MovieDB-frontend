import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss'],
})
export class MoviePageComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  movieId: number;

  ngOnInit(): void {
    this.movieId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
