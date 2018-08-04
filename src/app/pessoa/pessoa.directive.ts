import { Directive, Renderer2, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appPessoa]'
})
export class PessoaDirective implements AfterViewInit {

  constructor(
    private renderer: Renderer2,
    private elemeto: ElementRef
  ) { }

  ngAfterViewInit(): void {
    this.renderer.setStyle(
      this.elemeto.nativeElement,
      'color',
      'blue'
    );
  }
}
