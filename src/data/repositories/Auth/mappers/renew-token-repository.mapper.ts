import {Mapper} from "../../../../base/utils/mapper";
import {RenewTokenEntity} from "../entities/renew-token-entity";
import {RenewModel} from "../../../../domain/models/auth/renew.model";

export class RenewTokenRepositoryMapper extends Mapper<RenewTokenEntity, RenewModel> {
  mapFrom({usuario}: RenewTokenEntity): RenewModel {
    return {
      usuario: {
        "role": usuario.role,
        "google": usuario.google,
        "name": usuario.nombre,
        "email": usuario.email,
        "img": usuario.img,
        "id": usuario.uid
      }
    };
  }

  mapTo({usuario}: RenewModel): RenewTokenEntity {
    return {
      usuario: {
        "role": usuario.role,
        "google": usuario.google,
        "nombre": usuario.name,
        "email": usuario.email,
        "img": usuario.img,
        "uid": usuario.id
      }
    };
  }

}
