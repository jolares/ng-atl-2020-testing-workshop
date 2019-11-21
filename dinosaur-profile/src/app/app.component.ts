import { Component } from "@angular/core";
import { DinosaurProfileService } from "./services/dinosaur-profile.service";
import { Observable } from "rxjs";

// TODO
// DOM test for when the spinner is showing
// DOM test for when results are showing
@Component({
  selector: "app-root",
  template: `
    <div
      class="container"
      *ngIf="profileDetails$ | async as profileDetails; else showSpinner"
    >
      <app-profile-details
        [profileDetails]="profileDetails"
      ></app-profile-details>
    </div>
    <ng-template #showSpinner>
      <div class="container">
        <div class="spinner"></div>
      </div>
    </ng-template>
  `,
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  profileDetails$: Observable<any>;
  constructor(private readonly dinosaurProfileService: DinosaurProfileService) {
    this.profileDetails$ = this.dinosaurProfileService.getProfileDetails("123");
  }
}
