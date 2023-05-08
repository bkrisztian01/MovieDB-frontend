import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Credit } from 'src/app/models/Credit';
import { Credits } from 'src/app/models/Credits';
import { Person } from 'src/app/models/Person';
import { MovieDbService } from 'src/app/services/movie-db.service';
import Utils from 'src/app/utils';

@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrls: ['./person-page.component.scss'],
})
export class PersonPageComponent implements OnInit {
  personId: number;
  person: Person;
  credits: Credits;
  utils = Utils;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieDbService: MovieDbService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramsMap) => {
      this.personId = Number(paramsMap.get('id'));
      if (!this.personId) {
        this.router.navigate(['/']);
        return;
      }

      this.movieDbService.getPersonById(this.personId).subscribe((person) => {
        this.person = person;
      });

      this.movieDbService
        .getCombinedCreditsOfPerson(this.personId)
        .subscribe((credits) => {
          this.credits = credits;
          this.credits.cast.sort((a, b) => {
            const dateA = a.release_date || a.first_air_date;
            const dateB = b.release_date || b.first_air_date;
            return (
              Utils.dateStringToYear(dateB) - Utils.dateStringToYear(dateA)
            );
          });
        });
    });
  }

  gender() {
    return Utils.genderMap.get(this.person.gender);
  }

  mediaLink(credit: Credit) {
    return `/${credit.media_type}/${credit.id}`;
  }
}
