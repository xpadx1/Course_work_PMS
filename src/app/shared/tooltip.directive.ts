import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import tippy from 'tippy.js';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements AfterViewInit {

  @Input('appTooltip') tooltipContent!: string; 

  constructor(private elRef: ElementRef) { }

  ngAfterViewInit(){
    tippy(this.elRef.nativeElement, {
      content: this.tooltipContent
    })
  }

}
