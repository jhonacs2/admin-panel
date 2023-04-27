import {Routes} from "@angular/router";

export const APP_ROUTES: Routes = [
  {
    path: 'public',
    loadChildren: () => import('../modules/public/public.module').then(m => m.PublicModule)
  },
  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full'
  }
]
