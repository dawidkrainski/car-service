import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[csImportant]'
})
export class ImportantDirective {

  constructor(private da : ElementRef) {
    da.nativeElement.style.fontWeight = 700;
    da.nativeElement.style.color = "#295089";
   }

}
