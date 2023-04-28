import {AuthEntity} from "../entities/auth-entity";
import {AuthModel} from "../../../../domain/models/auth/auth.model";
import {Mapper} from "../../../../base/utils/mapper";

export class AuthRepositoryMapper extends Mapper<AuthEntity, AuthModel> {
  mapFrom(param: AuthEntity): AuthModel {
    return {
      ok: param.ok,
      token: param.token
    };
  }

  mapTo(param: AuthModel): AuthEntity {
    return {
      ok: param.ok,
      token: param.token
    };
  }
}
