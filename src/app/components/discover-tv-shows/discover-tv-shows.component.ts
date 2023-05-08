import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieItem } from 'src/app/models/MovieItem';
import { DiscoverResult } from 'src/app/models/SearchResult';
import { Show } from 'src/app/models/Show';
import { MovieDbService } from 'src/app/services/movie-db.service';

@Component({
  selector: 'app-discover-tv-shows',
  templateUrl: './discover-tv-shows.component.html',
  styleUrls: ['./discover-tv-shows.component.scss'],
})
export class DiscoverTvShowsComponent implements OnInit {
  discoverShowsResult: DiscoverResult<Show>;
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

      this.movieDbService.getDiscoverShows(this.page).subscribe((data) => {
        this.discoverShowsResult = data;
      });
    });
  }

  handlePageEvent(e: PageEvent) {
    this.page = e.pageIndex + 1;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { ...this.route.snapshot.queryParams, page: this.page },
    });
  }
}
