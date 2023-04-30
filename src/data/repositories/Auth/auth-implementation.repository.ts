import {AuthRepository} from "../../../domain/repositories/auth/auth.repository";
import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {AuthModel} from "../../../domain/models/auth/auth.model";
import {HttpClient} from "@angular/common/http";
import {AuthRepositoryMapper} from "./mappers/auth-repository.mapper";
import {AuthEntity} from "./entities/auth-entity";
import {RenewModel} from "../../../domain/models/auth/renew.model";
import {RenewTokenEntity} from "./entities/renew-token-entity";
import {RenewTokenRepositoryMapper} from "./mappers/renew-token-repository.mapper";


@Injectable({
  providedIn: 'root'
})
export class AuthImplementationRepository extends AuthRepository {

  authMapper: AuthRepositoryMapper = new AuthRepositoryMapper();
  renewMapper: RenewTokenRepositoryMapper = new RenewTokenRepositoryMapper();

  constructor(private _http: HttpClient) {
    super();
  }

  login(param: { email: string; password: string }): Observable<AuthModel> {
    return this._http
      .post<AuthEntity>('http://localhost:3000/api/login', {...param})
      .pipe(map(this.authMapper.mapFrom));
  }

  renewToken(param: { token: string }): Observable<RenewModel> {
    return this._http.get<RenewTokenEntity>('http://localhost:3000/api/login/renew', {headers: {'x-token': param.token}})
      .pipe(map(this.renewMapper.mapFrom));
  }

}
