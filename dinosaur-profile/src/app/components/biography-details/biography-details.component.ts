import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from "@angular/core";
import { DinosaurProfileService } from "src/app/services/dinosaur-profile.service";
import { Observable } from "rxjs";

// TODO
// Class test
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
      <app-cases
        class="biography-details-container"
        *ngIf="biographyDetails$ | async as biographyDetails"
        [contentStatus]="biographyDetails.status"
      >
        <p success-case>{{ biographyDetails?.value }}</p>

        <div pending-case class="pending-container">
          <div class="spinner-container">
            <div class="small-spinner"></div>
          </div>
          <p>Loading biography...</p>
        </div>

        <p error-case>No dinosaur biography details found.</p>
      </app-cases>
    </ng-container>
  `,
  styleUrls: ["./biography-details.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BiographyDetailsComponent implements OnInit {
  @Input() id: string;
  isBiographyDisplayed: boolean = false;
  biographyDetails$: Observable<any>;

  constructor(dinosaurProfileService: DinosaurProfileService) {
    this.biographyDetails$ = dinosaurProfileService.getBiography(this.id);
  }

  ngOnInit() {}
}
