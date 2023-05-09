import {UseCase} from '../../base/use-case';
import {UserTypes} from '../../../base/enums/user-types.enum';
import {UploadImageModel} from '../../models/user/upload-image.model';
import {Observable} from 'rxjs';
import {UserRepository} from '../../repositories/user/user.repository';

export class ChangePhotoUseCase implements UseCase<{
  userType: UserTypes,
  userId: string,
  image: File
}, UploadImageModel> {

  constructor(private _userRepository: UserRepository) {
  }

  execute(params: { userType: UserTypes; userId: string; image: File }): Observable<UploadImageModel> {
    return this._userRepository.changeProfilePhoto(params);
  }
}
