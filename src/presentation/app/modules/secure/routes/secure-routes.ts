import {Routes} from '@angular/router';
import {MainPageComponent} from '../views/main-page/main-page.component';
import {DashboardComponent} from '../components/dashboard/dashboard.component';
import {ProfileComponent} from '../views/profile/profile.component';
import {AccountSettingsComponent} from '../views/account-settings/account-settings.component';
import {GraphicComponent} from '../views/graphic/graphic.component';
import {TokenGuard} from '../../../guard/token.guard';

export const SECURE_ROUTES: Routes = [
  {
    path: '',
    component: MainPageComponent,
    canMatch: [TokenGuard],
    children: [
      {path: '', component: DashboardComponent, data: {title: 'Dashboard'}},
      {path: 'profile', component: ProfileComponent, data: {title: 'User Profile'}},
      {path: 'account-settings', component: AccountSettingsComponent, data: {title: 'Account Settings'}},
      {path: 'graphics', component: GraphicComponent, data: {title: 'graphics #1'}},
    ]
  }
];
