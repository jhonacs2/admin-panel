import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MainPageComponent} from './main-page/main-page.component';
import {SecureRoutesModule} from './routes/secure-routes.module';
import {HeaderComponent} from './components/header/header.component';
import {SideBarComponent} from './components/side-bar/side-bar.component';
import {ImageUrlPipe} from './pipes/image-url.pipe';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UserModule} from '../../../../data/repositories/user/user.module';


@NgModule({
  declarations: [
    MainPageComponent,
    HeaderComponent,
    SideBarComponent,
    ImageUrlPipe,
    DashboardComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SecureRoutesModule,
    NgOptimizedImage,
    UserModule
  ]
})
export class SecureModule {
}
