import {Routes} from "@angular/router";
import {TokenGuard} from "../guard/token.guard";

export const APP_ROUTES: Routes = [
  {
    path: 'public',
    loadChildren: () => import('../modules/public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'secure',
    loadChildren: () => import('../modules/secure/secure.module').then(m => m.SecureModule),
    canActivate: [TokenGuard],
  },
  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full'
  },
  {path: '**', redirectTo: 'public'}
]
