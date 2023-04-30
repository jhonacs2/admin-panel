import {Observable} from "rxjs";
import {AuthModel} from "../../models/auth/auth.model";
import {RenewModel} from "../../models/auth/renew.model";

export abstract class AuthRepository {
  abstract login(param: { email: string, password: string }): Observable<AuthModel>

  abstract renewToken(param: { token: string }): Observable<RenewModel>
}
