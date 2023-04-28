import {UseCase} from "../../base/use-case";
import {AuthModel} from "../../models/auth/auth.model";
import {Observable} from "rxjs";
import {AuthRepository} from "../../repositories/auth/auth.repository";

export class AuthLoginUseCase implements UseCase<{ email: string, password: string }, AuthModel> {

  constructor(private _authRepository: AuthRepository) {
  }

  execute(params: { email: string; password: string }): Observable<AuthModel> {
    return this._authRepository.login(params);
  }

}
