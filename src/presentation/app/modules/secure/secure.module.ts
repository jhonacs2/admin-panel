import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPageComponent} from './main-page/main-page.component';
import {SecureRoutesModule} from "./routes/secure-routes.module";
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';


@NgModule({
  declarations: [
    MainPageComponent,
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    SecureRoutesModule
  ]
})
export class SecureModule {
}