import { Component } from "@angular/core";
import { DinosaurProfileService } from "./services/dinosaur-profile.service";
import { Observable } from "rxjs";
import { stringify } from "@angular/compiler/src/util";

// TODO
// DOM test for success
// DOM test for pending
// DOM test for error 
@Component({
  selector: "app-root",
  template: `
    <div
      class="container"
      *ngIf="profileDetails$ | async as profileDetails"
      [ngSwitch]="profileDetails.status"
    >
      <ng-template ngSwitchCase="SUCCESS">
        <app-profile-details
          [profileDetails]="profileDetails?.value"
        ></app-profile-details>
      </ng-template>
      <ng-template ngSwitchCase="PENDING">
        <div class="spinner"></div>
      </ng-template>
      <ng-template ngSwitchCase="ERROR">
        <h1>No dinosaur profile details found.</h1>
      </ng-template>
    </div>
  `,
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  profileDetails$: Observable<any>;

  constructor(private readonly dinosaurProfileService: DinosaurProfileService) {
    this.profileDetails$ = this.dinosaurProfileService.getProfileDetails("123");
  }
}
