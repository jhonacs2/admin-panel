import {UserModel} from "../../../../domain/models/auth/user.model";
import {createReducer, on} from "@ngrx/store";
import {loadDataUser, login, verifyToken} from "../action/user.actions";

export interface UserState {
  user: DataUser
  loading: boolean
}

export interface DataUser {
  token: string,
  data: UserModel
}

export const UserInitialState: UserState = {
  user: {
    token: '',
    data: {
      "role": '',
      "google": true,
      "name": '',
      "email": '',
      "img": '',
      "id": ''
    }
  },
  loading: false
}

export const userReducer = createReducer(
  UserInitialState,
  on(login, (state) => ({
    ...state,
    loading: true
  })),
  on(verifyToken, (state, {token}) => ({
    ...state,
    user: {...state.user, token: token}
  })),
  on(loadDataUser, (state, {userData}) => ({
    ...state,
    loading: false,
    user: {...state.user, data: userData.usuario}
  })),
)
