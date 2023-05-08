import { Component, Input } from '@angular/core';
import { Credit } from 'src/app/models/Credit';

@Component({
  selector: 'app-cast-scroller',
  templateUrl: './cast-scroller.component.html',
  styleUrls: ['./cast-scroller.component.scss'],
})
export class CastScrollerComponent {
  @Input() credits: Credit[];
}
