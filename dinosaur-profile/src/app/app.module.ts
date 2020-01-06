import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProfileDetailsComponent } from "./components/profile-details/profile-details.component";
import { HttpClientModule } from "@angular/common/http";
import { BiographyDetailsComponent } from './components/biography-details/biography-details.component';
import { CasesComponent } from './components/cases/cases.component';
import { MenuComponent } from './components/menu/menu.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { BcDatePipe } from './pipes/bc-date/bc-date.pipe';

@NgModule({
  declarations: [AppComponent, ProfileDetailsComponent, BiographyDetailsComponent, CasesComponent, MenuComponent, HighlightDirective, BcDatePipe],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
