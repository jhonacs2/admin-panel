import {UserModel} from '../../../../domain/models/auth/user.model';
import {createReducer, on} from '@ngrx/store';
import {loadDataUser, login, logoutUser, updatedPhotoUser, updatePhotoUser, verifyToken} from '../action/user.actions';

export interface UserState {
  user: DataUser;
  loading: boolean;
}

export interface DataUser {
  token: string,
  data: UserModel
}

export const UserInitialState: UserState = {
  user: {
    token: '',
    data: {
      'role': '',
      'google': true,
      'name': '',
      'email': '',
      'img': '',
      'id': ''
    }
  },
  loading: false
};

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
  on(logoutUser, (state) => ({
    ...UserInitialState
  })),
  on(updatePhotoUser, (state) => ({
    ...state,
    loading: true
  })),
  on(updatedPhotoUser, (state, {nombreArchivo}) => ({
    ...state,
    loading: false,
    user: {...state.user, data: {...state.user.data, img: nombreArchivo}}
  }))
);
