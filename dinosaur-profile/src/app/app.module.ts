import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProfileDetailsComponent } from "./components/profile-details/profile-details.component";
import { HttpClientModule } from "@angular/common/http";
import { BiographyDetailsComponent } from './components/biography-details/biography-details.component';

@NgModule({
  declarations: [AppComponent, ProfileDetailsComponent, BiographyDetailsComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
