import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {PublicRoutesModule} from "./routes/public-routes.module";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    PublicRoutesModule
  ]
})
export class PublicModule {
}
