import {Mapper} from '../../../../base/utils/mapper';
import {ChangePhotoEntity} from '../entities/change-photo-entity';
import {UploadImageModel} from '../../../../domain/models/user/upload-image.model';

export class ChangePhotoRepositoryMapper extends Mapper<ChangePhotoEntity, UploadImageModel> {
  mapFrom(param: ChangePhotoEntity): UploadImageModel {
    return {
      ok: param.ok,
      message: param.msg,
      fileName: param.nombreArchivo
    };
  }

  mapTo(param: UploadImageModel): ChangePhotoEntity {
    return {
      ok: param.ok,
      msg: param.message,
      nombreArchivo: param.fileName
    };
  }
}
