import {NgModule} from "@angular/core";
import {AuthRepository} from "../../../domain/repositories/auth/auth.repository";
import {AuthLoginUseCase} from "../../../domain/usecases/auth/auth-login-use.case";
import {AuthImplementationRepository} from "./auth-implementation.repository";
import {RenewTokenUseCase} from "../../../domain/usecases/auth/renew-token-use.case";

const authLoginUseCaseFactory = (authRepo: AuthRepository) => new AuthLoginUseCase(authRepo);
export const authLoginUseCaseProvider = {
  provide: AuthLoginUseCase,
  useFactory: authLoginUseCaseFactory,
  deps: [AuthRepository]
}

const renewTokenUseCaseFactory = (authRepo: AuthRepository) => new RenewTokenUseCase(authRepo);
export const renewTokenUseCaseProvider = {
  provide: RenewTokenUseCase,
  useFactory: renewTokenUseCaseFactory,
  deps: [AuthRepository]
}

@NgModule({
  providers: [
    authLoginUseCaseProvider,
    renewTokenUseCaseProvider,
    {provide: AuthRepository, useClass: AuthImplementationRepository}
  ]
})
export class AuthModule {
}
