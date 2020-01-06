import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from "@angular/core";

// TODO
// DOM tests
@Component({
  selector: "app-cases",
  template: `
    <div [ngSwitch]="contentStatus">
      <ng-template ngSwitchCase="SUCCESS">
        <ng-content select="[success-case]"></ng-content>
      </ng-template>
      <ng-template ngSwitchCase="PENDING">
        <ng-content select="[pending-case]"></ng-content>
      </ng-template>
      <ng-template ngSwitchCase="ERROR">
        <ng-content select="[error-case]"></ng-content>
      </ng-template>
    </div>
  `,
  styleUrls: ["./cases.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CasesComponent implements OnInit {
  @Input() contentStatus;

  constructor() {}

  ngOnInit() {}
}
