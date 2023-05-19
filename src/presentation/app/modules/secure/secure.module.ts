import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MainPageComponent} from './views/main-page/main-page.component';
import {SecureRoutesModule} from './routes/secure-routes.module';
import {HeaderComponent} from './components/header/header.component';
import {SideBarComponent} from './components/side-bar/side-bar.component';
import {ImageUrlPipe} from './pipes/image-url.pipe';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ProfileComponent} from './views/profile/profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AccountSettingsComponent} from './views/account-settings/account-settings.component';
import {AccountSettingsService} from './services/account-settings.service';
import { GraphicComponent } from './views/graphic/graphic.component';
import { DonutComponent } from './components/charts/donut/donut.component';
import { ProgressBarComponent } from './views/progress-bar/progress-bar.component';
import { IncrementsComponent } from './components/incrementers/increments.component';


@NgModule({
  declarations: [
    MainPageComponent,
    HeaderComponent,
    SideBarComponent,
    ImageUrlPipe,
    DashboardComponent,
    ProfileComponent,
    AccountSettingsComponent,
    GraphicComponent,
    DonutComponent,
    ProgressBarComponent,
    IncrementsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SecureRoutesModule,
    NgOptimizedImage,
    FormsModule,
  ],
  providers: [AccountSettingsService]
})
export class SecureModule {
}
