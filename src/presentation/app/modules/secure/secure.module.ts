import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MainPageComponent} from './main-page/main-page.component';
import {SecureRoutesModule} from "./routes/secure-routes.module";
import {HeaderComponent} from './components/header/header.component';
import {SideBarComponent} from './components/side-bar/side-bar.component';
import { ImageUrlPipe } from './pipes/image-url.pipe';


@NgModule({
  declarations: [
    MainPageComponent,
    HeaderComponent,
    SideBarComponent,
    ImageUrlPipe,
  ],
  imports: [
    CommonModule,
    SecureRoutesModule,
    NgOptimizedImage
  ]
})
export class SecureModule {
}
