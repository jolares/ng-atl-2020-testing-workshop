import { Directive, ElementRef, HostListener } from "@angular/core";

// TODO
// Class test
// DOM test
@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective {
  currentColor;
  constructor(private readonly el: ElementRef) {
    this.currentColor = this.el.nativeElement.style.color;
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.highlight("#e6b972", "white");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highlight(null, this.currentColor);
  }

  private highlight(backgroundColor: string, color: string) {
    this.el.nativeElement.style.backgroundColor = backgroundColor;
    this.el.nativeElement.style.color = color;
  }
}
