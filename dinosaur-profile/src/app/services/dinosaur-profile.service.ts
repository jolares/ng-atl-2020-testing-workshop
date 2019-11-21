import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, delay } from "rxjs/operators";
import { of as observableOf } from "rxjs";

const MOCK_PROFILE_DETAILS = {
  id: "123",
  pictureUrl:
    "https://previews.123rf.com/images/rivansyam/rivansyam1703/rivansyam170300004/72901589-cartoon-t-rex-was-standing-with-two-legs.jpg",
  name: "Jake Woods",
  type: "Tyrannosaurus Rex",
  favoriteFood: ["Edmontosaurus", "Anatosaurus", "Triceratops"]
};

@Injectable({
  providedIn: "root"
})
export class DinosaurProfileService {
  constructor(private readonly http: HttpClient) {}

  getProfileDetails(id: string) {
    return this.http
      .get(`/${id}/profile-details`)
      .pipe(delay(10000), catchError(err => observableOf(MOCK_PROFILE_DETAILS)));
  }
}
