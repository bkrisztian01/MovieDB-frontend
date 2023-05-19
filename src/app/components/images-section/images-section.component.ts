import { Component, Input } from '@angular/core';
import { Images } from 'src/app/models/Images';

@Component({
  selector: 'app-images-section[images]',
  templateUrl: './images-section.component.html',
  styleUrls: ['./images-section.component.scss'],
})
export class ImagesSectionComponent {
  @Input() images: Images;
}
