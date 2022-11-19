import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  @HostListener('mouseenter') onMauseEnter() {
    this.element.nativeElement.style.backgroundColor = '#ABFFC4';
  }

  @HostListener('mouseleave') onMauseLeave() {
    this.element.nativeElement.style.backgroundColor = '';
  }

  constructor(
    private element: ElementRef
  ) {
    //this.element.nativeElement.style.backgroundColor = 'red';
   }

}
