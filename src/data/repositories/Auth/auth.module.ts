import {NgModule} from "@angular/core";
import {AuthRepository} from "../../../domain/repositories/auth/auth.repository";
import {AuthLoginUseCase} from "../../../domain/usecases/auth/auth-login-use.case";
import {AuthImplementationRepository} from "./auth-implementation.repository";

const authLoginUseCaseFactory = (authRepo: AuthRepository) => new AuthLoginUseCase(authRepo);
export const authLoginUseCaseProvider = {
  provide: AuthLoginUseCase,
  useFactory: authLoginUseCaseFactory,
  deps: [AuthRepository]
}

@NgModule({
  providers: [
    authLoginUseCaseProvider,
    {provide: AuthRepository, useClass: AuthImplementationRepository}
  ]
})
export class AuthModule {
}
