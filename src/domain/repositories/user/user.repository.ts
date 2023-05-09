import {Observable} from 'rxjs';
import {UploadImageModel} from '../../models/user/upload-image.model';
import {UserTypes} from '../../../base/enums/user-types.enum';

export abstract class UserRepository {
  abstract changeProfilePhoto(params: {
    userType: UserTypes,
    userId: string,
    image: File
  }): Observable<UploadImageModel>;
}
