import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Credit } from 'src/app/models/Credit';

@Component({
  selector: 'app-cast-item',
  templateUrl: './cast-item.component.html',
  styleUrls: ['./cast-item.component.scss'],
})
export class CastItemComponent {
  @Input() credit: Credit;

  constructor(private router: Router) {}

  onClick() {
    this.router.navigate(['/person', this.credit.id]);
  }
}
