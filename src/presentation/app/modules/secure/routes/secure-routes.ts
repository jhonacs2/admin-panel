import {Routes} from "@angular/router";
import {MainPageComponent} from "../main-page/main-page.component";
import {DashboardComponent} from "../components/dashboard/dashboard.component";

export const SECURE_ROUTES: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {path: '', component: DashboardComponent, data: {title: 'Dashboard'}}
    ]
  }
]
