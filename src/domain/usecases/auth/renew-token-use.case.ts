import {UseCase} from "../../base/use-case";
import {RenewModel} from "../../models/auth/renew.model";
import {Observable} from "rxjs";
import {AuthRepository} from "../../repositories/auth/auth.repository";

export class RenewTokenUseCase implements UseCase<{ token: string }, RenewModel> {

  constructor(private _authRepository: AuthRepository) {
  }

  execute(params: { token: string }): Observable<RenewModel> {
    return this._authRepository.renewToken(params);
  }

}
