import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appName]'
})
export class NameDirective {

  constructor(Element: ElementRef) {
    Element.nativeElement.innerText = "Hello I am learning ng";
  }

}
