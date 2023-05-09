import {Injectable} from '@angular/core';
import {UserRepository} from '../../../domain/repositories/user/user.repository';
import {UserTypes} from '../../../base/enums/user-types.enum';
import {map, Observable} from 'rxjs';
import {UploadImageModel} from '../../../domain/models/user/upload-image.model';
import {HttpClient} from '@angular/common/http';
import {ChangePhotoRepositoryMapper} from './mappers/change-photo-repository.mapper';
import {ChangePhotoEntity} from './entities/change-photo-entity';

@Injectable({
  providedIn: 'root'
})
export class UserImplementationRepository extends UserRepository {

  private _changePhotoMapper: ChangePhotoRepositoryMapper = new ChangePhotoRepositoryMapper();

  constructor(private _http: HttpClient) {
    super();
  }

  changeProfilePhoto(params: { userType: UserTypes; userId: string; image: File }): Observable<UploadImageModel> {
    const formData = new FormData();
    formData.append('imagen', params.image);
    return this._http.put<ChangePhotoEntity>(`/api/upload/${params.userType}/${params.userId}`, formData)
      .pipe(map(this._changePhotoMapper.mapFrom));
  }
}
