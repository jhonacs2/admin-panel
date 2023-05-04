import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {UserActions} from "../action";
import {map, mergeMap, tap} from "rxjs";
import {AuthLoginUseCase} from "../../../../domain/usecases/auth/auth-login-use.case";
import {RenewTokenUseCase} from "../../../../domain/usecases/auth/renew-token-use.case";
import {Router} from "@angular/router";

@Injectable()
export class UserEffect {

  constructor(private _action$: Actions,
              private _authLoginUseCase: AuthLoginUseCase,
              private _renewTokenUseCase: RenewTokenUseCase,
              private _router: Router) {
  }

  loginUser$ = createEffect(() =>
    this._action$.pipe(
      ofType(UserActions.login),
      mergeMap(
        (action) => this._authLoginUseCase.execute({email: action.email, password: action.password})
          .pipe(
            tap(user => localStorage.setItem("token", user.token)),
            map(user => UserActions.verifyToken({token: user.token}))
          )
      )
    )
  )

  verifyToken$ = createEffect(() =>
    this._action$.pipe(
      ofType(UserActions.verifyToken),
      mergeMap(
        (action) => this._renewTokenUseCase.execute({token: action.token})
          .pipe(
            tap(() => this._router.navigateByUrl('/secure')),
            map(userData => UserActions.loadDataUser({userData}))
          )
      )
    )
  )
}
