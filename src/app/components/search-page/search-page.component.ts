import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/Movie';
import { SearchResult } from 'src/app/models/SearchResult';
import { Show } from 'src/app/models/Show';
import { MovieDbService } from 'src/app/services/movie-db.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  query: string;
  page: number;
  movieSearchResult: SearchResult<Movie>;
  showSearchResult: SearchResult<Show>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private movieDbService: MovieDbService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((queries) => {
      const query = queries.get('query');
      if (!query) {
        this.router.navigate(['/']);
        return;
      }
      this.query = query;

      const pageNumber = queries.get('page');
      this.page = Number(pageNumber) || 1;

      this.movieDbService
        .searchMovie(this.query, this.page)
        .subscribe((sr) => (this.movieSearchResult = sr));

      this.movieDbService
        .searchShow(this.query, this.page)
        .subscribe((sr) => (this.showSearchResult = sr));
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

  /**
   * Resets the page index query parameter on tab change.
   */
  onSelectedTabChange() {
    this.page = 1;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { ...this.route.snapshot.queryParams, page: this.page },
    });
  }
}
