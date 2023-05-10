import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() menuClick = new EventEmitter();

  /**
   * Emits the menu button click event.
   */
  onClick() {
    this.menuClick.emit();
  }
}
