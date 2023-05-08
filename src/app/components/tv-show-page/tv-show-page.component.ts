import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Credit } from 'src/app/models/Credit';
import { Episodes } from 'src/app/models/Episodes';
import { Images } from 'src/app/models/Images';
import { Show } from 'src/app/models/Show';
import { MovieDbService } from 'src/app/services/movie-db.service';
import Utils from 'src/app/utils';

@Component({
  selector: 'app-tv-show-page',
  templateUrl: './tv-show-page.component.html',
  styleUrls: ['./tv-show-page.component.scss'],
})
export class TvShowPageComponent implements OnInit {
  util = Utils;
  show: Show;
  credits: Credit[];
  images: Images;
  seasonEpisodes: Map<number, Episodes> = new Map<number, Episodes>();

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
          .filter((credit) => !!credit.roles[0].character)
          .slice(0, 12);
      });

      this.movieDbService.getShowImages(tvShowId).subscribe((images) => {
        this.images = images;
      });
    });
  }

  fetchSeasonEpisodes(seasonNumber: number) {
    if (this.seasonEpisodes.has(seasonNumber)) {
      return;
    }

    this.movieDbService
      .getEpisodesOfSeason(this.show.id, seasonNumber)
      .subscribe((episodes) => {
        this.seasonEpisodes.set(seasonNumber, episodes);
      });
  }
}
