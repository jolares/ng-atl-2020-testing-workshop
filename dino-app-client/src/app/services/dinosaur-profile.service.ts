import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map, startWith } from "rxjs/operators";
import { of as observableOf } from "rxjs";

const MOCK_PROFILE_DETAILS = {
  id: "t-rex",
  pictureUrl:
    "https://previews.123rf.com/images/rivansyam/rivansyam1703/rivansyam170300004/72901589-cartoon-t-rex-was-standing-with-two-legs.jpg",
  name: "Jake Woods",
  type: "Tyrannosaurus Rex",
  birthday: 67,
  favoriteFood: ["Edmontosaurus", "Anatosaurus", "Triceratops"]
};

const MOCK_BIOGRAPHY = {
  bio: `I am one of the largest land carnivores of all time. I like to eat fellow dinosaurs, so I'm not very friendly. In my spare time, I like to practice touching my toes. Looking for someone that can scratch my back.`
};

// TODO
// Class test
@Injectable({
  providedIn: "root"
})
export class DinosaurProfileService {
  private readonly baseUrl = 'dinosaurs';
  constructor(private readonly http: HttpClient) {}

  getProfileDetails(id: string) {
    return this.http.get(`${this.baseUrl}/${id}/profile`).pipe(
      map(value => ({ value, status: "SUCCESS" })),
      catchError(() =>
        observableOf({
          // status: "ERROR"
          value: MOCK_PROFILE_DETAILS,
          status: "SUCCESS"
        })
      ),
      startWith({ status: "PENDING" })
    );
  }

  getBiography(id: string) {
    return this.http.get(`${this.baseUrl}/${id}/bio`).pipe(
      map(value => ({ value, status: "SUCCESS" })),
      catchError(() =>
        observableOf({
          // status: "ERROR",
          value: MOCK_BIOGRAPHY.bio,
          status: "SUCCESS"
        })
      ),
      startWith({ status: "PENDING" })
    );
  }
}
