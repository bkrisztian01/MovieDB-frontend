import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'img[fallback]',
})
export class FallbackImgDirective {
  @Input()
  @HostBinding('src')
  src: string;

  @Input() fallback: string;

  @HostListener('error')
  onError() {
    this.src = this.fallback;
  }
}
