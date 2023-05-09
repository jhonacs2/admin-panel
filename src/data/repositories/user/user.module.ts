import {NgModule} from '@angular/core';
import {UserRepository} from '../../../domain/repositories/user/user.repository';
import {ChangePhotoUseCase} from '../../../domain/usecases/user/change-photo.usecase';
import {UserImplementationRepository} from './user-implementation.repository';

const changePhotoUseCaseFactory = (userRepo: UserRepository) => new ChangePhotoUseCase(userRepo);
export const changePhotoUseCaseProvider = {
  provide: ChangePhotoUseCase,
  useFactory: changePhotoUseCaseFactory,
  deps: [UserRepository]
};

@NgModule({
  providers: [
    changePhotoUseCaseProvider,
    {provide: UserRepository, useClass: UserImplementationRepository}
  ]
})
export class UserModule {

}
