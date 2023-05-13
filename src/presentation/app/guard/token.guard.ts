import {Injectable} from '@angular/core';
import {CanMatch, Router} from '@angular/router';
import {map, Observable, tap} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../state/app.state';
import {selectTokenUser} from '../state/selectors/user.selector';

@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanMatch {

  constructor(private _store: Store<AppState>, private _router: Router) {
  }

  canMatch(): Observable<boolean> | boolean {
    const token = localStorage.getItem('token') || '';

    if (!token) {
      return false;
    }

    return this._store.select(selectTokenUser).pipe(
      map(value => !!value),
      tap(hasToken => {
        if (!hasToken) {
          this._router.navigate(['/login']);
        }
      }));
  }

}
