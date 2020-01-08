import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from "@angular/core";

// TODO
// Class test
// DOM test
@Component({
  selector: "app-menu",
  template: `
    <div class="menu">
      <button (click)="onClick('t-rex')">T-Rex</button>
      <button (click)="onClick('dino1')">Other Dino</button>
      <button (click)="onClick('dino2')">Other Dino2</button>
    </div>
  `,
  styleUrls: ["./menu.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  @Output() clicked = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick(selectedDino: string) {
    this.clicked.emit(selectedDino);
  }
}
