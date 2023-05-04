import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {map, Observable, tap} from 'rxjs';
import {Store} from "@ngrx/store";
import {AppState} from "../state/app.state";
import {selectTokenUser} from "../state/selectors/user.selector";

@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate {

  constructor(private _store: Store<AppState>, private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean {
    return this._store.select(selectTokenUser).pipe(
      map(value => !!value),
      tap(hasToken => {
        if (!hasToken) {
          this._router.navigate(['/login']);
        }
      })
    );
  }

}
