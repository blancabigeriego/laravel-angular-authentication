import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from "./components/login/login.component";
import { SingupComponent } from "./components/singup/singup.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { RequestResetComponent } from "./components/password/request-reset/request-reset.component";
import { ResponseResetComponent } from "./components/password/response-reset/response-reset.component";
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule, RouterOutlet } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SingupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterOutlet, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
