import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from "@angular/core";

// TODO
// DOM test for when there is data
// DOM test for when there is no data
// DOM test to make sure all items are displayed in ngFor
@Component({
  selector: "app-profile-details",
  template: `
    <div *ngIf="profileDetails; else showError" class="content">
      <div class="pic">
        <img class="profile-pic" [src]="profileDetails?.pictureUrl" />
      </div>

      <div class="profile-details">
        <h1>{{ profileDetails?.name }}</h1>
        <h3>{{ profileDetails?.type }}</h3>
        <div class="content-item">
          <h2>My favorite things to eat</h2>
          <ul>
            <li *ngFor="let food of profileDetails.favoriteFood">{{ food }}</li>
          </ul>
        </div>
        <div class="content-item">
          <button>View Biography</button>
        </div>
      </div>
    </div>
    <ng-template #showError>
      <div class="content">
        <h1>No dinosaur profile details found.</h1>
      </div>
    </ng-template>
  `,
  styleUrls: ["./profile-details.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileDetailsComponent implements OnInit {
  @Input() profileDetails;

  constructor() {}

  ngOnInit() {}
}
