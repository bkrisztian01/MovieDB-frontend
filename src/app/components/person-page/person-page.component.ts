import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
        console.log(this.person);
      });
    });
  }

  gender() {
    return Utils.genderMap.get(this.person.gender);
  }
}
