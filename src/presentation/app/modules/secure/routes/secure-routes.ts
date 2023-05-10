import {Routes} from '@angular/router';
import {MainPageComponent} from '../main-page/main-page.component';
import {DashboardComponent} from '../components/dashboard/dashboard.component';
import {ProfileComponent} from '../components/profile/profile.component';
import {AccountSettingsComponent} from '../components/account-settings/account-settings.component';

export const SECURE_ROUTES: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {path: '', component: DashboardComponent, data: {title: 'Dashboard'}},
      {path: 'profile', component: ProfileComponent, data: {title: 'User Profile'}},
      {path: 'account-settings', component: AccountSettingsComponent, data: {title: 'Account Settings'}},
    ]
  }
];
