import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieItem } from 'src/app/models/MovieItem';
import { DiscoverResult } from 'src/app/models/SearchResult';
import { MovieDbService } from 'src/app/services/movie-db.service';

@Component({
  selector: 'app-discover-movies',
  templateUrl: './discover-movies.component.html',
  styleUrls: ['./discover-movies.component.scss'],
})
export class DiscoverMoviesComponent implements OnInit {
  discoverMoviesResult: DiscoverResult<MovieItem>;
  page: number;

  constructor(
    private movieDbService: MovieDbService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((queries) => {
      const pageNumber = queries.get('page');
      this.page = Number(pageNumber) || 1;

      this.movieDbService.getDiscoverMovies(this.page).subscribe((data) => {
        this.discoverMoviesResult = {
          ...data,
          results: data.results.map((movie) => ({
            id: movie.id,
            title: movie.title,
            voteAverage: movie.vote_average,
            posterPath: movie.poster_path,
          })),
        };
      });
    });
  }

  /**
   * Handles the changes of page index.
   * @param e The page event
   */
  handlePageEvent(e: PageEvent) {
    this.page = e.pageIndex + 1;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { ...this.route.snapshot.queryParams, page: this.page },
    });
  }
}
