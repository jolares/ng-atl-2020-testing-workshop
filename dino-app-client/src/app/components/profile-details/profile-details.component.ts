import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from "@angular/core";

// TODO
// DOM test to make sure all items are displayed in ngFor
// DOM test for clicking the button
@Component({
  selector: "app-profile-details",
  template: `
    <div class="app-profile-details">
      <div class="picture-container">
        <img class="picture" [src]="profileDetails?.pictureUrl" />
      </div>

      <div class="details-container">
        <h1 appHighlight>{{ profileDetails?.name }}</h1>
        <h3>{{ profileDetails?.type }}</h3>
        <h4><i>Born on: {{ profileDetails?.birthday | bcDate}}</i></h4>
        <div class="favorite-food-container">
          <h2>My favorite things to eat</h2>
          <ul>
            <li *ngFor="let food of profileDetails?.favoriteFood">
              {{ food }}
            </li>
          </ul>
        </div>
        <div class="biography-container">
          <app-biography-details
            [id]="profileDetails?.id"
          ></app-biography-details>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./profile-details.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileDetailsComponent implements OnInit {
  @Input() profileDetails;

  constructor() {}

  ngOnInit() {}
}
