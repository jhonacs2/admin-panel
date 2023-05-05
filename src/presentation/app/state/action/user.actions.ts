import {createAction, props} from '@ngrx/store';
import {RenewModel} from '../../../../domain/models/auth/renew.model';

export const login = createAction(
  '[Login Page] User Login',
  props<{ email: string, password: string }>()
);

export const verifyToken = createAction(
  '[Login Page] Verify Token',
  props<{ token: string }>()
);

export const loadDataUser = createAction(
  '[Login Page] Load User Data',
  props<{ userData: RenewModel }>()
);

export const logoutUser = createAction(
  '[header] Logout User'
);
