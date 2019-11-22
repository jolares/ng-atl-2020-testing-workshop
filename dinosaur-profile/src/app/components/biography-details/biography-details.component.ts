import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { DinosaurProfileService } from "src/app/services/dinosaur-profile.service";
import { Observable } from "rxjs";

// TODO
// DOM test for success
// DOM test for pending
// DOM test for error
// DOM test for button label
// DOM test for enabled/disabled button
@Component({
  selector: "app-biography-details",
  template: `
    <button (click)="isBiographyDisplayed = !isBiographyDisplayed">
      {{ isBiographyDisplayed ? "Hide" : "Show" }} Biography
    </button>
    <ng-container *ngIf="isBiographyDisplayed">
      <div
        class="biography-details-container"
        *ngIf="biographyDetails$ | async as biographyDetails"
        [ngSwitch]="biographyDetails.status"
      >
        <ng-template ngSwitchCase="SUCCESS">
          <p>{{ biographyDetails?.value }}</p>
        </ng-template>
        <ng-template ngSwitchCase="PENDING">
          <div class="pending-container">
            <div class="spinner-container">
              <div class="small-spinner"></div>
            </div>
            <p>Loading biography...</p>
          </div>
        </ng-template>
        <ng-template ngSwitchCase="ERROR">
          <p>No dinosaur biography details found.</p>
        </ng-template>
      </div>
    </ng-container>
  `,
  styleUrls: ["./biography-details.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BiographyDetailsComponent implements OnInit {
  isBiographyDisplayed: boolean = false;
  biographyDetails$: Observable<any>;

  constructor(dinosaurProfileService: DinosaurProfileService) {
    this.biographyDetails$ = dinosaurProfileService.getBiography("123");
  }

  ngOnInit() {}
}
