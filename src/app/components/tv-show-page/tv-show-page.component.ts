import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Credit } from 'src/app/models/Credit';
import { Images } from 'src/app/models/Images';
import { Movie } from 'src/app/models/Movie';
import { Show } from 'src/app/models/Show';
import { MovieDbService } from 'src/app/services/movie-db.service';

@Component({
  selector: 'app-tv-show-page',
  templateUrl: './tv-show-page.component.html',
  styleUrls: ['./tv-show-page.component.scss'],
})
export class TvShowPageComponent implements OnInit {
  show: Show;
  credits: Credit[];
  images: Images;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieDbService: MovieDbService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const tvShowId = Number(paramMap.get('id'));
      if (!tvShowId) {
        this.router.navigate(['/']);
        return;
      }

      this.movieDbService.getShowById(tvShowId).subscribe((show) => {
        this.show = show;
      });

      this.movieDbService.getShowCredits(tvShowId).subscribe((credits) => {
        this.credits = credits.cast
          .filter((credit) => !!credit.character)
          .slice(0, 10);
      });

      this.movieDbService.getShowImages(tvShowId).subscribe((images) => {
        this.images = images;
        console.log('Page', this.images);
      });
    });
  }
}
