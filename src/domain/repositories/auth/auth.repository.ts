import {Observable} from "rxjs";
import {AuthModel} from "../../models/auth/auth.model";

export abstract class AuthRepository {
  abstract login(param: { email: string, password: string }): Observable<AuthModel>
}
