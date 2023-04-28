import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {PublicRoutesModule} from "./routes/public-routes.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthModule} from "../../../../data/repositories/Auth/auth.module";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    PublicRoutesModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule
  ],
})
export class PublicModule {
}
