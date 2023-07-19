import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appResaltado]',
})
export class ResaltadoDirective implements OnChanges {
  color = "white";

  @Input()
  appResaltado = 'white';


  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
    
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.establecerColorDeLetra();
  }

  establecerColorDeLetra(): void {
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'color',
      this.appResaltado
    );
    

    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'font-size',
      '20px',
    

    );
  }
}
