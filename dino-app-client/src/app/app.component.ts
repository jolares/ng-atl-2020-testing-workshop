import { Component, OnChanges } from "@angular/core";
import { DinosaurProfileService } from "./services/dinosaur-profile.service";
import { Observable } from "rxjs";

// TODO
// Class test
// DOM Test
@Component({
  selector: "app-root",
  template: `
    <div class="container">
      <app-menu (clicked)="display($event)"></app-menu>
      <ng-container *ngIf="selectedDino">
        <app-cases
          *ngIf="profileDetails$ | async as profileDetails"
          [contentStatus]="profileDetails.status"
        >
          <app-profile-details
            success-case
            [profileDetails]="profileDetails?.value"
          ></app-profile-details>
          <h1 error-case>No dinosaur profile details found.</h1>
          <div pending-case class="spinner"></div>
        </app-cases>
      </ng-container>
    </div>
  `,
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  profileDetails$: Observable<any>;
  selectedDino = "t-rex";

  constructor(private readonly dinosaurProfileService: DinosaurProfileService) {
    this.getProfileDetails();
  }

  display(event) {
    this.selectedDino = event;
    this.getProfileDetails();
  }

  getProfileDetails() {
    this.profileDetails$ = this.dinosaurProfileService.getProfileDetails(
      this.selectedDino
    );
  }
}
