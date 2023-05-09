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

  /**
   * Navigates the client to the persons detail page.
   */
  onClick() {
    this.router.navigate(['/person', this.credit.id]);
  }

  /**
   * Returns the character played by the cast.
   * @returns The character.
   */
  character() {
    return this.credit.character || this.credit.roles[0].character || '';
  }
}
